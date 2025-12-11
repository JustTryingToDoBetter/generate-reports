/**
 * Report Generator Tests
 * Tests for report generation functionality
 */
import { ReportGenerator } from '../src/services/ReportGenerator';
import { Report } from '../src/models/Report';

describe('ReportGenerator', () => {
  const userId = 'test-user-123';

  test('generates sales report with correct structure', () => {
    const report = ReportGenerator.generateSalesReport(userId);

    expect(report).toBeDefined();
    expect(report.type).toBe('sales');
    expect(report.title).toBe('Monthly Sales Report');
    expect(report.createdBy).toBe(userId);
    expect(report.status).toBe('draft');
    expect(report.content.data).toHaveProperty('totalRevenue');
    expect(report.content.data).toHaveProperty('totalOrders');
  });

  test('generates performance report with correct structure', () => {
    const report = ReportGenerator.generatePerformanceReport(userId);

    expect(report).toBeDefined();
    expect(report.type).toBe('performance');
    expect(report.title).toBe('Team Performance Report');
    expect(report.createdBy).toBe(userId);
    expect(report.content.data).toHaveProperty('tasksCompleted');
    expect(report.content.data).toHaveProperty('efficiency');
  });

  test('generates analytics report with correct structure', () => {
    const report = ReportGenerator.generateAnalyticsReport(userId);

    expect(report).toBeDefined();
    expect(report.type).toBe('analytics');
    expect(report.title).toBe('User Analytics Report');
    expect(report.createdBy).toBe(userId);
    expect(report.content.data).toHaveProperty('activeUsers');
    expect(report.content.data).toHaveProperty('newUsers');
  });

  test('creates custom report with provided data', () => {
    const title = 'Custom Test Report';
    const summary = 'This is a test summary';
    const data = { metric1: 100, metric2: 200 };

    const report = ReportGenerator.createCustomReport(
      title,
      summary,
      data,
      userId
    );

    expect(report).toBeDefined();
    expect(report.type).toBe('custom');
    expect(report.title).toBe(title);
    expect(report.content.summary).toBe(summary);
    expect(report.content.data).toEqual(data);
  });

  test('all generated reports have unique IDs', () => {
    const report1 = ReportGenerator.generateSalesReport(userId);
    const report2 = ReportGenerator.generateSalesReport(userId);

    expect(report1.id).not.toBe(report2.id);
  });

  test('reports include charts when applicable', () => {
    const report = ReportGenerator.generateSalesReport(userId);

    expect(report.content.charts).toBeDefined();
    expect(report.content.charts?.length).toBeGreaterThan(0);
  });
});
