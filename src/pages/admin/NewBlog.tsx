import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewBlogPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreateDraft = async () => {
    if (!title.trim()) return;

    setLoading(true);
    try {
      // Keep your existing create draft logic here
      // For demo, simulating API call
      setTimeout(() => {
        const mockDraftId = 'new-draft-id';
        navigate(`/admin/drafts/${mockDraftId}`);
      }, 500);
    } catch (err) {
      console.error('Failed to create draft:', err);
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-2xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/admin/drafts')}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Drafts
        </Button>

        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Create New Blog</h1>
          <p className="text-muted-foreground mt-2">
            Start with a title and continue editing in the draft editor
          </p>
        </div>

        {/* Form Card */}
        <Card>
          <CardHeader>
            <CardTitle>Blog Title</CardTitle>
            <CardDescription>
              Give your blog post a descriptive title. You can change it later.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter blog title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && title.trim()) {
                    handleCreateDraft();
                  }
                }}
              />
            </div>

            <Button
              onClick={handleCreateDraft}
              disabled={!title.trim() || loading}
              className="w-full"
            >
              {loading ? 'Creating...' : 'Create Draft & Continue Editing'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}

