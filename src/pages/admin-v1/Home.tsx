import { useState } from "react";
import { Search, Plus, TrendingUp, Clock, FileText, Calendar, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function AdminV1Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    { label: "Total Views", value: "24.5K", change: "+12.5%", icon: TrendingUp, trend: "up" },
    { label: "Published", value: "48", change: "+8", icon: FileText, trend: "up" },
    { label: "Drafts", value: "12", change: "-3", icon: Clock, trend: "down" },
    { label: "Scheduled", value: "6", change: "+2", icon: Calendar, trend: "up" },
  ];

  const recentActivity = [
    { title: "Understanding React Hooks", status: "published", time: "2 hours ago", views: "1.2K" },
    { title: "Next.js 14 Features", status: "draft", time: "5 hours ago", views: "-" },
    { title: "TypeScript Best Practices", status: "scheduled", time: "Tomorrow 9:00 AM", views: "-" },
    { title: "CSS Grid Mastery", status: "published", time: "1 day ago", views: "856" },
  ];

  const quickActions = [
    { label: "New Blog", icon: Plus, path: "/admin-v1/editor" },
    { label: "Analytics", icon: TrendingUp, path: "/admin-v1/analytics" },
    { label: "Schedule", icon: Calendar, path: "/admin-v1/calendar" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Command Bar */}
      <div className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                placeholder="Search posts, drafts, or type a command..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-900/50 border-slate-800 focus:border-blue-500 text-slate-100 placeholder:text-slate-500"
              />
            </div>
            {quickActions.map((action) => (
              <Link key={action.label} to={action.path}>
                <Button variant="ghost" size="sm" className="gap-2 text-slate-300 hover:text-slate-100">
                  <action.icon className="h-4 w-4" />
                  <span className="hidden md:inline">{action.label}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Command Center
            </h1>
            <p className="text-slate-400 mt-2">Welcome back! Here's your content overview</p>
          </div>
          <Link to="/admin-v1/editor">
            <Button className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="h-5 w-5" />
              Create Post
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-blue-500/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <stat.icon className="h-8 w-8 text-blue-400" />
                  <Badge variant={stat.trend === "up" ? "default" : "secondary"} className="text-xs">
                    {stat.change}
                  </Badge>
                </div>
                <div className="mt-4">
                  <p className="text-3xl font-bold text-slate-100">{stat.value}</p>
                  <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Activity & Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <Card className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-100">
                <Zap className="h-5 w-5 text-yellow-400" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-lg bg-slate-900/50 hover:bg-slate-800/50 transition-colors cursor-pointer border border-slate-800"
                >
                  <div className="flex-1">
                    <h3 className="font-medium text-slate-100">{activity.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <Badge
                        variant={
                          activity.status === "published"
                            ? "default"
                            : activity.status === "draft"
                            ? "secondary"
                            : "outline"
                        }
                        className="text-xs"
                      >
                        {activity.status}
                      </Badge>
                      <span className="text-xs text-slate-400">{activity.time}</span>
                    </div>
                  </div>
                  {activity.views !== "-" && (
                    <div className="text-right">
                      <p className="text-lg font-semibold text-blue-400">{activity.views}</p>
                      <p className="text-xs text-slate-500">views</p>
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions Panel */}
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-100">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/admin-v1/drafts">
                <Button variant="outline" className="w-full justify-start gap-3 border-slate-700 hover:border-blue-500 text-slate-300">
                  <FileText className="h-4 w-4" />
                  View All Drafts
                </Button>
              </Link>
              <Link to="/admin-v1/blogs">
                <Button variant="outline" className="w-full justify-start gap-3 border-slate-700 hover:border-blue-500 text-slate-300">
                  <Calendar className="h-4 w-4" />
                  Published Posts
                </Button>
              </Link>
              <Link to="/admin-v1/analytics">
                <Button variant="outline" className="w-full justify-start gap-3 border-slate-700 hover:border-blue-500 text-slate-300">
                  <TrendingUp className="h-4 w-4" />
                  View Analytics
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full justify-start gap-3 border-red-900/50 hover:border-red-500 text-red-400 hover:text-red-300"
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/admin/login";
                }}
              >
                Logout
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
