import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import DraftTable from "@/components/admin/DraftTable";
import PageHeader from "@/components/admin/shared/PageHeader";
import SearchBar from "@/components/admin/shared/SearchBar";
import LoadingState from "@/components/admin/shared/LoadingState";
import { Draft } from "@/types/blog.types";

export default function DraftsPage() {
  const navigate = useNavigate();
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchDrafts();
  }, []);

  const fetchDrafts = async () => {
    try {
      // Keep your existing fetch logic here
      // For now using mock data
      setTimeout(() => {
        setDrafts([
          { _id: '1', title: 'Understanding React Hooks', updatedAt: '2024-01-20', wordCount: 450 },
          { _id: '2', title: 'CSS Grid vs Flexbox', updatedAt: '2024-01-19', wordCount: 320 },
          { _id: '3', title: 'JavaScript Performance Tips', updatedAt: '2024-01-18', wordCount: 0 },
        ]);
        setLoading(false);
      }, 500);
    } catch (err) {
      console.error('Failed to fetch drafts:', err);
      setLoading(false);
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/admin/drafts/${id}`);
  };

  const handleDelete = async (id: string) => {
    try {
      // Keep your existing delete logic here
      setDrafts(drafts.filter(d => d._id !== id));
    } catch (err) {
      console.error('Failed to delete draft:', err);
    }
  };

  const filteredDrafts = drafts.filter(draft =>
    draft.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <LoadingState message="Loading drafts..." />;
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <PageHeader
          title="Drafts"
          description="Work on your unpublished content"
          action={{
            label: "New Draft",
            icon: <Plus className="mr-2 h-4 w-4" />,
            onClick: () => navigate('/admin/blogs/new')
          }}
        />
        
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search drafts..."
        />

        <DraftTable
          drafts={filteredDrafts}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </AdminLayout>
  );
}
