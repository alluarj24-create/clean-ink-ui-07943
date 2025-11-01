import { useEffect, useState } from "react";
import { FileText, Edit3, Calendar, CheckCircle2 } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import StatCard from "@/components/admin/StatCard";
import LoadingState from "@/components/admin/shared/LoadingState";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DashboardStats, ActivityItem } from "@/types/blog.types";

export default function AdminHomePage() {
  const [stats, setStats] = useState<DashboardStats>({
    totalBlogs: 0,
    publishedBlogs: 0,
    scheduledBlogs: 0,
    totalDrafts: 0,
  });
  const [recentActivity, setRecentActivity] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Keep your existing fetch logic here
    // For now using mock data
    setTimeout(() => {
      setStats({
        totalBlogs: 42,
        publishedBlogs: 38,
        scheduledBlogs: 4,
        totalDrafts: 7,
      });
      setRecentActivity([
        { id: '1', title: 'Getting Started with React', type: 'blog', status: 'Published', date: '2024-01-20' },
        { id: '2', title: 'TypeScript Best Practices', type: 'draft', status: 'Draft', date: '2024-01-19' },
        { id: '3', title: 'Building Modern UIs', type: 'blog', status: 'Scheduled', date: '2024-01-18' },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <LoadingState message="Loading dashboard..." />;
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome back! Here's an overview of your content.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Blogs"
            value={stats.totalBlogs}
            icon={FileText}
            description="All published blogs"
          />
          <StatCard
            title="Published"
            value={stats.publishedBlogs}
            icon={CheckCircle2}
            description="Live on your site"
          />
          <StatCard
            title="Scheduled"
            value={stats.scheduledBlogs}
            icon={Calendar}
            description="Upcoming posts"
          />
          <StatCard
            title="Drafts"
            value={stats.totalDrafts}
            icon={Edit3}
            description="Work in progress"
          />
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest content updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-3 border-b last:border-b-0"
                >
                  <div className="flex-1">
                    <p className="font-medium">{item.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant={item.type === 'blog' ? 'default' : 'secondary'}>
                        {item.type === 'blog' ? '📰 Blog' : '📝 Draft'}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{item.status}</span>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {new Date(item.date).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}

