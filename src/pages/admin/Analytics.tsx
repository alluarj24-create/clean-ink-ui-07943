import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import PageHeader from "@/components/admin/shared/PageHeader";
import StatCard from "@/components/admin/StatCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Eye, BookOpen, TrendingUp, Clock, Flame, ArrowUp, ArrowDown, Minus } from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { mockAnalyticsOverview, mockBlogAnalytics, mockTopicAnalytics, mockChartData } from "@/data/mockAnalytics";

export default function Analytics() {
  const [timeRange, setTimeRange] = useState("30");

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') return <ArrowUp className="h-4 w-4 text-green-500" />;
    if (trend === 'down') return <ArrowDown className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
  };

  const getTrendColor = (value: number) => {
    if (value > 0) return "text-green-500";
    if (value < 0) return "text-red-500";
    return "text-muted-foreground";
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <PageHeader
            title="Blog Analytics"
            description="Track performance, engagement, and insights"
          />
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
              <SelectItem value="all">All time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Overview Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Views"
            value={mockAnalyticsOverview.totalViews.toLocaleString()}
            icon={Eye}
            description={
              <span className={getTrendColor(mockAnalyticsOverview.viewsTrend)}>
                {mockAnalyticsOverview.viewsTrend > 0 ? '+' : ''}{mockAnalyticsOverview.viewsTrend}% from last period
              </span>
            }
          />
          <StatCard
            title="Total Reads"
            value={mockAnalyticsOverview.totalReads.toLocaleString()}
            icon={BookOpen}
            description={
              <span className={getTrendColor(mockAnalyticsOverview.readsTrend)}>
                {mockAnalyticsOverview.readsTrend > 0 ? '+' : ''}{mockAnalyticsOverview.readsTrend}% from last period
              </span>
            }
          />
          <StatCard
            title="Engagement Rate"
            value={`${mockAnalyticsOverview.engagementRate}%`}
            icon={TrendingUp}
            description={
              <span className={getTrendColor(mockAnalyticsOverview.engagementTrend)}>
                {mockAnalyticsOverview.engagementTrend > 0 ? '+' : ''}{mockAnalyticsOverview.engagementTrend}% from last period
              </span>
            }
          />
          <StatCard
            title="Avg. Time on Page"
            value={`${mockAnalyticsOverview.avgTimeOnPage} min`}
            icon={Clock}
            description={
              <span className={getTrendColor(mockAnalyticsOverview.timeTrend)}>
                {mockAnalyticsOverview.timeTrend > 0 ? '+' : ''}{mockAnalyticsOverview.timeTrend}% from last period
              </span>
            }
          />
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Views & Reads Over Time</CardTitle>
              <CardDescription>Daily traffic for the selected period</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="views" stroke="hsl(var(--primary))" strokeWidth={2} />
                  <Line type="monotone" dataKey="reads" stroke="hsl(var(--accent))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Performance by Topic</CardTitle>
              <CardDescription>Total views per topic</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mockTopicAnalytics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="topic" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="totalViews" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Top Performing Content */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Content</CardTitle>
            <CardDescription>Your most successful blog posts</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Reads</TableHead>
                  <TableHead>Completion</TableHead>
                  <TableHead>Engagement</TableHead>
                  <TableHead>Trend</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockBlogAnalytics.map((blog) => (
                  <TableRow key={blog.blogId}>
                    <TableCell className="font-medium max-w-xs truncate">
                      {blog.title}
                      {blog.isViral && (
                        <Flame className="inline-block ml-2 h-4 w-4 text-orange-500" />
                      )}
                    </TableCell>
                    <TableCell>{blog.views.toLocaleString()}</TableCell>
                    <TableCell>{blog.reads.toLocaleString()}</TableCell>
                    <TableCell>{blog.completionRate}%</TableCell>
                    <TableCell>
                      <Badge variant={blog.engagementScore > 80 ? "default" : "secondary"}>
                        {blog.engagementScore}
                      </Badge>
                    </TableCell>
                    <TableCell>{getTrendIcon(blog.trend)}</TableCell>
                    <TableCell>
                      {blog.isViral && (
                        <Badge variant="destructive" className="gap-1">
                          <Flame className="h-3 w-3" />
                          Viral
                        </Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Topic Analytics */}
        <Card>
          <CardHeader>
            <CardTitle>Topic Analytics</CardTitle>
            <CardDescription>Performance breakdown by topic</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {mockTopicAnalytics.map((topic) => (
                <Card key={topic.topic} className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg">{topic.topic}</h3>
                      <Badge variant="outline">{topic.totalPosts} posts</Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Views</span>
                        <span className="font-medium">{topic.totalViews.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Avg Engagement</span>
                        <span className="font-medium">{topic.avgEngagement}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
