export interface BlogAnalytics {
  blogId: string;
  title: string;
  slug: string;
  publishedAt: string;
  views: number;
  reads: number;
  completionRate: number;
  avgReadTime: number;
  engagementScore: number;
  trend: 'up' | 'down' | 'stable';
  isViral: boolean;
}

export interface AnalyticsOverview {
  totalViews: number;
  totalReads: number;
  engagementRate: number;
  avgTimeOnPage: number;
  viewsTrend: number; // percentage change
  readsTrend: number;
  engagementTrend: number;
  timeTrend: number;
}

export interface TopicAnalytics {
  topic: string;
  totalPosts: number;
  totalViews: number;
  avgEngagement: number;
  color: string;
}

export interface ChartDataPoint {
  date: string;
  views: number;
  reads: number;
}
