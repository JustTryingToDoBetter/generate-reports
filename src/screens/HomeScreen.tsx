/**
 * Home Screen
 * Main screen with report generation options
 */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Report } from '../models/Report';
import { ReportCard } from '../components/ReportCard';
import { ReportGenerator } from '../services/ReportGenerator';
import { getCurrentUser } from '../utils/sampleData';

interface HomeScreenProps {
  navigation: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [reports, setReports] = useState<Report[]>([]);
  const currentUser = getCurrentUser();

  const generateReport = (type: 'sales' | 'performance' | 'analytics') => {
    let newReport: Report;
    
    switch (type) {
      case 'sales':
        newReport = ReportGenerator.generateSalesReport(currentUser.id);
        break;
      case 'performance':
        newReport = ReportGenerator.generatePerformanceReport(currentUser.id);
        break;
      case 'analytics':
        newReport = ReportGenerator.generateAnalyticsReport(currentUser.id);
        break;
    }

    setReports([newReport, ...reports]);
    navigation.navigate('ReportDetail', { report: newReport });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>📊 Generate Reports</Text>
        <Text style={styles.subtitle}>
          Create and send professional reports
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.salesButton]}
          onPress={() => generateReport('sales')}
        >
          <Text style={styles.buttonEmoji}>💰</Text>
          <Text style={styles.buttonTitle}>Sales Report</Text>
          <Text style={styles.buttonSubtitle}>Revenue & orders</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.performanceButton]}
          onPress={() => generateReport('performance')}
        >
          <Text style={styles.buttonEmoji}>📈</Text>
          <Text style={styles.buttonTitle}>Performance</Text>
          <Text style={styles.buttonSubtitle}>Team metrics</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.analyticsButton]}
          onPress={() => generateReport('analytics')}
        >
          <Text style={styles.buttonEmoji}>🔍</Text>
          <Text style={styles.buttonTitle}>Analytics</Text>
          <Text style={styles.buttonSubtitle}>User insights</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.reportsSection}>
        <Text style={styles.sectionTitle}>Recent Reports</Text>
        <ScrollView style={styles.reportsList}>
          {reports.length === 0 ? (
            <View style={styles.emptyState}>
              <Text style={styles.emptyText}>
                No reports yet. Generate your first report!
              </Text>
            </View>
          ) : (
            reports.map(report => (
              <ReportCard
                key={report.id}
                report={report}
                onPress={(r) => navigation.navigate('ReportDetail', { report: r })}
              />
            ))
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  salesButton: {
    backgroundColor: '#10b981',
  },
  performanceButton: {
    backgroundColor: '#3b82f6',
  },
  analyticsButton: {
    backgroundColor: '#8b5cf6',
  },
  buttonEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  buttonTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 2,
    textAlign: 'center',
  },
  buttonSubtitle: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
  },
  reportsSection: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 12,
  },
  reportsList: {
    flex: 1,
  },
  emptyState: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#9ca3af',
    textAlign: 'center',
  },
});
