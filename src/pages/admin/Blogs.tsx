import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import BlogTable from "@/components/admin/BlogTable";
import PageHeader from "@/components/admin/shared/PageHeader";
import SearchBar from "@/components/admin/shared/SearchBar";
import LoadingState from "@/components/admin/shared/LoadingState";

interface Blog {
  _id: string;
  title: string;
  status: 'published' | 'scheduled';
  publishedAt?: string;
  scheduledFor?: string;
  tags: string[];
}

export default function BlogsPage() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      // Keep your existing fetch logic here
      // For now using mock data
      setTimeout(() => {
        setBlogs([
          {
            _id: '1',
            title: 'Getting Started with React',
            status: 'published',
            publishedAt: '2024-01-20',
            tags: ['react', 'javascript', 'tutorial'],
          },
          {
            _id: '2',
            title: 'TypeScript Best Practices',
            status: 'published',
            publishedAt: '2024-01-18',
            tags: ['typescript', 'best-practices'],
          },
          {
            _id: '3',
            title: 'Building Modern UIs',
            status: 'scheduled',
            scheduledFor: '2024-01-25',
            tags: ['ui', 'design', 'react'],
          },
        ]);
        setLoading(false);
      }, 500);
    } catch (err) {
      console.error('Failed to fetch blogs:', err);
      setLoading(false);
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/admin/blogs/${id}/edit`);
  };

  const handleDelete = async (id: string) => {
    try {
      // Keep your existing delete logic here
      setBlogs(blogs.filter(b => b._id !== id));
    } catch (err) {
      console.error('Failed to delete blog:', err);
    }
  };

  const handleView = (id: string) => {
    navigate(`/blog/${id}`);
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <LoadingState message="Loading blogs..." />;
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <PageHeader
          title="Blogs"
          description="Manage your published and scheduled content"
          action={{
            label: "New Blog",
            icon: <Plus className="mr-2 h-4 w-4" />,
            onClick: () => navigate('/admin/blogs/new')
          }}
        />
        
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search blogs..."
        />

        <BlogTable
          blogs={filteredBlogs}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onView={handleView}
        />
      </div>
    </AdminLayout>
  );
}
