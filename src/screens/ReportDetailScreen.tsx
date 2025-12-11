/**
 * Report Detail Screen
 * Shows report details and allows sending to users
 */
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Report } from '../models/Report';
import { formatDate, formatCurrency } from '../utils/formatters';

interface ReportDetailScreenProps {
  navigation: any;
  route: {
    params: {
      report: Report;
    };
  };
}

export const ReportDetailScreen: React.FC<ReportDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const { report } = route.params;
  const [currentReport, setCurrentReport] = useState(report);

  const handleSendReport = () => {
    navigation.navigate('UserSelection', { 
      report: currentReport,
      onSent: (updatedReport: Report) => {
        setCurrentReport(updatedReport);
      }
    });
  };

  const renderDataItem = (key: string, value: any) => {
    let displayValue = value;
    
    if (typeof value === 'number' && key.toLowerCase().includes('revenue')) {
      displayValue = formatCurrency(value);
    } else if (typeof value === 'object' && !Array.isArray(value)) {
      return null; // Skip nested objects for now
    } else if (Array.isArray(value)) {
      return (
        <View key={key} style={styles.dataItem}>
          <Text style={styles.dataLabel}>{key}:</Text>
          {value.map((item, idx) => (
            <View key={idx} style={styles.arrayItem}>
              <Text style={styles.dataValue}>
                • {typeof item === 'object' ? JSON.stringify(item) : item}
              </Text>
            </View>
          ))}
        </View>
      );
    }

    return (
      <View key={key} style={styles.dataItem}>
        <Text style={styles.dataLabel}>{key}:</Text>
        <Text style={styles.dataValue}>{String(displayValue)}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{currentReport.title}</Text>
          <View style={styles.metaInfo}>
            <Text style={styles.metaText}>
              Type: <Text style={styles.metaValue}>{currentReport.type}</Text>
            </Text>
            <Text style={styles.metaText}>
              Created: <Text style={styles.metaValue}>{formatDate(currentReport.createdAt)}</Text>
            </Text>
            <Text style={styles.metaText}>
              Status: <Text style={styles.metaValue}>{currentReport.status}</Text>
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.summary}>{currentReport.content.summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Metrics</Text>
          <View style={styles.dataContainer}>
            {Object.entries(currentReport.content.data).map(([key, value]) =>
              renderDataItem(key, value)
            )}
          </View>
        </View>

        {currentReport.content.charts && currentReport.content.charts.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Charts</Text>
            {currentReport.content.charts.map((chart, idx) => (
              <View key={idx} style={styles.chartCard}>
                <Text style={styles.chartTitle}>{chart.title}</Text>
                <Text style={styles.chartType}>Type: {chart.type}</Text>
                <View style={styles.chartData}>
                  {chart.labels.map((label, i) => (
                    <View key={i} style={styles.chartRow}>
                      <Text style={styles.chartLabel}>{label}</Text>
                      <Text style={styles.chartValue}>{chart.data[i]}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSendReport}
        >
          <Text style={styles.sendButtonText}>
            {currentReport.status === 'sent' ? '✓ Sent' : '📤 Send Report'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  content: {
    flex: 1,
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 12,
  },
  metaInfo: {
    gap: 4,
  },
  metaText: {
    fontSize: 14,
    color: '#6b7280',
  },
  metaValue: {
    fontWeight: '600',
    color: '#1f2937',
    textTransform: 'capitalize',
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 12,
  },
  summary: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
  },
  dataContainer: {
    gap: 12,
  },
  dataItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  dataLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'capitalize',
    flex: 1,
  },
  dataValue: {
    fontSize: 14,
    color: '#1f2937',
    fontWeight: '500',
    flex: 1,
    textAlign: 'right',
  },
  arrayItem: {
    marginTop: 4,
  },
  chartCard: {
    backgroundColor: '#f9fafb',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  chartType: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 12,
    textTransform: 'capitalize',
  },
  chartData: {
    gap: 8,
  },
  chartRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  chartLabel: {
    fontSize: 14,
    color: '#374151',
  },
  chartValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
  },
  footer: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  sendButton: {
    backgroundColor: '#6366f1',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
});
