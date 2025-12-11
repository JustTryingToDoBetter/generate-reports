/**
 * Report Card Component
 * Displays a report summary card
 */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Report } from '../models/Report';
import { formatDate } from '../utils/formatters';

interface ReportCardProps {
  report: Report;
  onPress: (report: Report) => void;
}

export const ReportCard: React.FC<ReportCardProps> = ({ report, onPress }) => {
  const getTypeColor = (type: Report['type']) => {
    switch (type) {
      case 'sales':
        return '#10b981';
      case 'performance':
        return '#3b82f6';
      case 'analytics':
        return '#8b5cf6';
      default:
        return '#6b7280';
    }
  };

  const getStatusColor = (status: Report['status']) => {
    switch (status) {
      case 'sent':
        return '#10b981';
      case 'pending':
        return '#f59e0b';
      default:
        return '#6b7280';
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(report)}
    >
      <View style={styles.header}>
        <Text style={styles.title}>{report.title}</Text>
        <View
          style={[
            styles.statusBadge,
            { backgroundColor: getStatusColor(report.status) },
          ]}
        >
          <Text style={styles.statusText}>{report.status}</Text>
        </View>
      </View>
      
      <Text style={styles.summary} numberOfLines={2}>
        {report.content.summary}
      </Text>
      
      <View style={styles.footer}>
        <View
          style={[styles.typeBadge, { backgroundColor: getTypeColor(report.type) }]}
        >
          <Text style={styles.typeText}>{report.type}</Text>
        </View>
        <Text style={styles.date}>{formatDate(report.createdAt)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2937',
    marginRight: 8,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#fff',
    textTransform: 'uppercase',
  },
  summary: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  typeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  typeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
    textTransform: 'capitalize',
  },
  date: {
    fontSize: 12,
    color: '#9ca3af',
  },
});
