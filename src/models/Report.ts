/**
 * Report Model
 * Represents a generated report
 */
export interface Report {
  id: string;
  title: string;
  type: 'sales' | 'performance' | 'analytics' | 'custom';
  content: ReportContent;
  createdAt: Date;
  createdBy: string;
  recipients: string[]; // User IDs
  status: 'draft' | 'sent' | 'pending';
}

export interface ReportContent {
  summary: string;
  data: Record<string, any>;
  charts?: ChartData[];
}

export interface ChartData {
  type: 'bar' | 'line' | 'pie';
  title: string;
  data: number[];
  labels: string[];
}

export const createReport = (
  title: string,
  type: Report['type'],
  summary: string,
  data: Record<string, any>,
  createdBy: string
): Report => {
  return {
    id: Math.random().toString(36).substring(2, 11),
    title,
    type,
    content: {
      summary,
      data,
    },
    createdAt: new Date(),
    createdBy,
    recipients: [],
    status: 'draft',
  };
};
