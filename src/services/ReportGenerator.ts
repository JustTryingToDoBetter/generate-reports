/**
 * Report Generator Service
 * Handles the logic for creating different types of reports
 */
import { Report, createReport, ChartData } from '../models/Report';

export class ReportGenerator {
  /**
   * Generate a sales report with sample data
   */
  static generateSalesReport(createdBy: string): Report {
    const report = createReport(
      'Monthly Sales Report',
      'sales',
      'Total sales increased by 15% compared to last month',
      {
        totalRevenue: 125000,
        totalOrders: 450,
        averageOrderValue: 277.78,
        topProducts: [
          { name: 'Product A', sales: 45000 },
          { name: 'Product B', sales: 32000 },
          { name: 'Product C', sales: 28000 },
        ],
      },
      createdBy
    );

    report.content.charts = [
      {
        type: 'bar',
        title: 'Top Products',
        data: [45000, 32000, 28000],
        labels: ['Product A', 'Product B', 'Product C'],
      },
    ];

    return report;
  }

  /**
   * Generate a performance report
   */
  static generatePerformanceReport(createdBy: string): Report {
    const report = createReport(
      'Team Performance Report',
      'performance',
      'Team productivity improved by 20% this quarter',
      {
        tasksCompleted: 156,
        averageCompletionTime: 3.5,
        teamMembers: 8,
        efficiency: 85,
      },
      createdBy
    );

    report.content.charts = [
      {
        type: 'line',
        title: 'Weekly Progress',
        data: [120, 135, 145, 156],
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      },
    ];

    return report;
  }

  /**
   * Generate an analytics report
   */
  static generateAnalyticsReport(createdBy: string): Report {
    const report = createReport(
      'User Analytics Report',
      'analytics',
      'Active users grew by 30% with strong engagement metrics',
      {
        activeUsers: 5600,
        newUsers: 1200,
        retentionRate: 78,
        avgSessionDuration: 12.5,
      },
      createdBy
    );

    report.content.charts = [
      {
        type: 'pie',
        title: 'User Distribution',
        data: [5600, 1200],
        labels: ['Active Users', 'New Users'],
      },
    ];

    return report;
  }

  /**
   * Create a custom report with user-provided data
   */
  static createCustomReport(
    title: string,
    summary: string,
    data: Record<string, any>,
    createdBy: string
  ): Report {
    return createReport(title, 'custom', summary, data, createdBy);
  }
}
