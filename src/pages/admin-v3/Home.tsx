import { useState } from "react";
import { Grid, List, Calendar as CalendarIcon, TrendingUp, Search, Plus, Settings, LogOut } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function AdminV3Home() {
  const [view, setView] = useState<"grid" | "list">("grid");

  const posts = [
    {
      id: 1,
      title: "Understanding React Hooks",
      excerpt: "Deep dive into useState, useEffect, and custom hooks",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      status: "published",
      date: "Mar 15, 2024",
      views: "1.2K",
      category: "React",
    },
    {
      id: 2,
      title: "TypeScript Best Practices",
      excerpt: "Write better TypeScript code with these proven patterns",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop",
      status: "draft",
      date: "Mar 14, 2024",
      views: "-",
      category: "TypeScript",
    },
    {
      id: 3,
      title: "Next.js Server Actions",
      excerpt: "Building full-stack apps with Server Actions",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      status: "published",
      date: "Mar 13, 2024",
      views: "892",
      category: "Next.js",
    },
    {
      id: 4,
      title: "CSS Grid Mastery",
      excerpt: "Create complex layouts with CSS Grid",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=400&fit=crop",
      status: "scheduled",
      date: "Mar 18, 2024",
      views: "-",
      category: "CSS",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/admin-v3/home">
              <h1 className="text-2xl font-bold">Editorial Studio</h1>
            </Link>
            <div className="flex items-center gap-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search content..."
                  className="pl-9 w-64 border-slate-300"
                />
              </div>
              <Link to="/admin-v3/editor">
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  New Article
                </Button>
              </Link>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-red-600 hover:text-red-700"
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/admin/login";
                }}
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Nav */}
      <div className="border-b bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <nav className="flex items-center gap-8">
              <Link to="/admin-v3/home">
                <button className="text-sm font-medium text-slate-900">All Content</button>
              </Link>
              <Link to="/admin-v3/blogs">
                <button className="text-sm font-medium text-slate-600 hover:text-slate-900">Published</button>
              </Link>
              <Link to="/admin-v3/drafts">
                <button className="text-sm font-medium text-slate-600 hover:text-slate-900">Drafts</button>
              </Link>
              <Link to="/admin-v3/analytics">
                <button className="text-sm font-medium text-slate-600 hover:text-slate-900">Analytics</button>
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <Button
                variant={view === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setView("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={view === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setView("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          <Card className="p-6 border-l-4 border-l-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Total Posts</p>
                <p className="text-3xl font-bold">48</p>
              </div>
              <CalendarIcon className="h-8 w-8 text-blue-500" />
            </div>
          </Card>
          <Card className="p-6 border-l-4 border-l-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">This Month</p>
                <p className="text-3xl font-bold">12</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </Card>
          <Card className="p-6 border-l-4 border-l-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Total Views</p>
                <p className="text-3xl font-bold">24.5K</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-500" />
            </div>
          </Card>
          <Card className="p-6 border-l-4 border-l-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Drafts</p>
                <p className="text-3xl font-bold">8</p>
              </div>
              <CalendarIcon className="h-8 w-8 text-purple-500" />
            </div>
          </Card>
        </div>

        {/* Content Grid/List */}
        {view === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      variant={
                        post.status === "published"
                          ? "default"
                          : post.status === "draft"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {post.status}
                    </Badge>
                    <span className="text-xs text-slate-500">{post.category}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{post.date}</span>
                    <span>{post.views} views</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center gap-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-32 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge
                        variant={
                          post.status === "published"
                            ? "default"
                            : post.status === "draft"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {post.status}
                      </Badge>
                      <span className="text-xs text-slate-500">{post.category}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-1">{post.title}</h3>
                    <p className="text-sm text-slate-600">{post.excerpt}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-600 mb-1">{post.date}</p>
                    <p className="text-sm font-medium">{post.views} views</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
