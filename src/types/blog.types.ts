export interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  tags: string[];
  publishedAt: string;
  status?: 'published' | 'scheduled';
  scheduledFor?: string;
}

export interface Draft {
  _id: string;
  title: string;
  updatedAt: string;
  wordCount?: number;
}

export interface DashboardStats {
  totalBlogs: number;
  publishedBlogs: number;
  scheduledBlogs: number;
  totalDrafts: number;
}

export interface ActivityItem {
  id: string;
  title: string;
  type: 'blog' | 'draft';
  status: string;
  date: string;
}
