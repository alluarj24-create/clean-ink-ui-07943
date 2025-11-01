import { useState } from "react";
import { Plus, BarChart3, FileText, Calendar, LogOut, Edit, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function AdminV2Home() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Total Posts", value: "48", color: "from-blue-500 to-cyan-500" },
    { label: "This Week", value: "12", color: "from-purple-500 to-pink-500" },
    { label: "Drafts", value: "8", color: "from-orange-500 to-red-500" },
  ];

  const recentPosts = [
    { id: 1, title: "Understanding React Hooks", status: "published", date: "Mar 15", views: 1245 },
    { id: 2, title: "TypeScript Best Practices", status: "draft", date: "Mar 14", views: 0 },
    { id: 3, title: "Next.js Server Actions", status: "published", date: "Mar 13", views: 892 },
    { id: 4, title: "CSS Grid vs Flexbox", status: "scheduled", date: "Mar 18", views: 0 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Floating Header */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white/80 backdrop-blur-xl rounded-full shadow-xl border border-slate-200 px-6 py-3">
          <div className="flex items-center gap-8">
            <Link to="/admin-v2/home">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Zen Admin
              </h1>
            </Link>
            <nav className="flex items-center gap-6">
              {["overview", "content", "analytics"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm font-medium transition-colors capitalize ${
                    activeTab === tab
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto space-y-12">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <Card
              key={idx}
              className="group hover:scale-105 transition-all duration-300 cursor-pointer border-none shadow-lg hover:shadow-2xl"
            >
              <CardContent className="p-8">
                <div
                  className={`h-2 w-16 rounded-full bg-gradient-to-r ${stat.color} mb-6`}
                />
                <p className="text-5xl font-bold text-slate-900 mb-2">{stat.value}</p>
                <p className="text-slate-600 text-sm">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-slate-900">Recent Content</h2>
            <Link to="/admin-v2/editor">
              <Button className="rounded-full gap-2 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Plus className="h-4 w-4" />
                New Post
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:scale-105 transition-all duration-300 border-none shadow-md hover:shadow-xl"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge
                      variant={
                        post.status === "published"
                          ? "default"
                          : post.status === "draft"
                          ? "secondary"
                          : "outline"
                      }
                      className="rounded-full"
                    >
                      {post.status}
                    </Badge>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{post.date}</span>
                    {post.views > 0 && (
                      <span className="text-blue-600 font-medium">{post.views} views</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white/90 backdrop-blur-xl rounded-full shadow-2xl border border-slate-200 px-8 py-4">
          <div className="flex items-center gap-8">
            <Link to="/admin-v2/drafts">
              <Button variant="ghost" size="sm" className="gap-2 rounded-full">
                <FileText className="h-5 w-5" />
                <span className="hidden sm:inline">Drafts</span>
              </Button>
            </Link>
            <Link to="/admin-v2/blogs">
              <Button variant="ghost" size="sm" className="gap-2 rounded-full">
                <Calendar className="h-5 w-5" />
                <span className="hidden sm:inline">Posts</span>
              </Button>
            </Link>
            <Link to="/admin-v2/analytics">
              <Button variant="ghost" size="sm" className="gap-2 rounded-full">
                <BarChart3 className="h-5 w-5" />
                <span className="hidden sm:inline">Analytics</span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 rounded-full text-red-600 hover:text-red-700"
              onClick={() => {
                localStorage.clear();
                window.location.href = "/admin/login";
              }}
            >
              <LogOut className="h-5 w-5" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
