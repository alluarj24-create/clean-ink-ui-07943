import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Send, Calendar, Image as ImageIcon, Tag as TagIcon } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { DateTimePicker } from "@/components/admin/editor/DateTimePicker";
import { TiptapEditor } from "@/components/admin/editor/TiptapEditor";
import { BlogPreview } from "@/components/admin/editor/BlogPreview";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function EditDraftPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock state - replace with your actual data fetching
  const [title, setTitle] = useState("Draft Blog Title");
  const [coverImage, setCoverImage] = useState("");
  const [tags, setTags] = useState<string[]>(["react", "typescript"]);
  const [newTag, setNewTag] = useState("");
  const [content, setContent] = useState("");
  const [scheduleDate, setScheduleDate] = useState<Date>();

  const availableTags = ["react", "typescript", "javascript", "nextjs", "tutorial"];

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handlePublish = () => {
    console.log("Publishing draft...");
    // Your publish logic here
  };

  const handleSchedule = () => {
    if (!scheduleDate) {
      alert("Please select a schedule date and time");
      return;
    }
    console.log("Scheduling draft for:", scheduleDate);
    // Your schedule logic here
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate('/admin/drafts')}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Drafts
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handlePublish}>
              <Send className="mr-2 h-4 w-4" />
              Publish Now
            </Button>
          </div>
        </div>

        {/* Main Editor Grid - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_400px] gap-6">
          {/* Left Panel - Metadata */}
          <div className="lg:col-span-1 space-y-6">
            {/* Title Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Blog Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter blog title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-base"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Cover Image Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <ImageIcon className="h-5 w-5" />
                  Cover Image
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cover">Image URL</Label>
                  <Input
                    id="cover"
                    placeholder="https://example.com/image.jpg"
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                  />
                </div>
                {coverImage && (
                  <div className="rounded-lg overflow-hidden border">
                    <img
                      src={coverImage}
                      alt="Cover preview"
                      className="w-full h-32 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Tags Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TagIcon className="h-5 w-5" />
                  Tags
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="gap-1">
                      {tag}
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-1 hover:text-destructive"
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                </div>
                <Separator />
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a tag..."
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddTag();
                      }
                    }}
                  />
                  <Button onClick={handleAddTag} size="sm">
                    Add
                  </Button>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs text-muted-foreground">Suggested Tags</Label>
                  <div className="flex flex-wrap gap-2">
                    {availableTags
                      .filter((tag) => !tags.includes(tag))
                      .map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="cursor-pointer hover:bg-accent"
                          onClick={() => setTags([...tags, tag])}
                        >
                          + {tag}
                        </Badge>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <DateTimePicker value={scheduleDate} onChange={setScheduleDate} />
                <Button
                  onClick={handleSchedule}
                  variant="secondary"
                  className="w-full"
                  disabled={!scheduleDate}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Post
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Middle Panel - Editor */}
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-lg">Content Editor</CardTitle>
                <p className="text-sm text-muted-foreground">
                  What you see is what you get - format your content with the floating menu
                </p>
              </CardHeader>
              <CardContent>
                <TiptapEditor 
                  content={content}
                  onUpdate={(html) => setContent(html)}
                  showToolbar={false}
                />
                <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
                  <span>{content.length} characters</span>
                  <span className="text-xs">Auto-saved</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - Live Preview */}
          <div className="hidden lg:block">
            <Card className="sticky top-6 h-[calc(100vh-8rem)]">
              <CardContent className="p-0 h-full">
                <ScrollArea className="h-full">
                  <div className="p-6">
                    <BlogPreview
                      title={title}
                      coverImage={coverImage}
                      content={content}
                    />
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
