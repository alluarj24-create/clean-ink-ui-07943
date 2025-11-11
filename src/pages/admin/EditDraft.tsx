import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, Send, Calendar, Image as ImageIcon, Tag as TagIcon, Plus, X } from "lucide-react";
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
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

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
        <div className="flex gap-6">
          {/* Left Panel - Metadata - Fixed Width */}
          <div className="w-80 hidden lg:block space-y-6 flex-shrink-0">
            {/* Title Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Blog Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Enter blog title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Cover Image Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cover Image</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="coverImage">Image URL</Label>
                  <Input
                    id="coverImage"
                    placeholder="https://example.com/image.jpg"
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                  />
                  {coverImage && (
                    <div className="mt-3 rounded-lg overflow-hidden border">
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
                </div>
              </CardContent>
            </Card>

            {/* Tags Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tags</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Add Tag Input */}
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a tag"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddTag();
                      }
                    }}
                  />
                  <Button onClick={handleAddTag} size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                {/* Selected Tags */}
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="gap-1">
                        {tag}
                        <button
                          onClick={() => handleRemoveTag(tag)}
                          className="ml-1 hover:text-destructive"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Suggested Tags */}
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">Suggested tags:</p>
                  <div className="flex flex-wrap gap-2">
                    {availableTags
                      .filter((tag) => !tags.includes(tag))
                      .map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="cursor-pointer hover:bg-secondary"
                          onClick={() => {
                            setTags([...tags, tag]);
                          }}
                        >
                          {tag}
                          <Plus className="ml-1 h-3 w-3" />
                        </Badge>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <DateTimePicker
                  value={scheduleDate}
                  onChange={setScheduleDate}
                />
                {scheduleDate && (
                  <Button
                    onClick={handleSchedule}
                    className="w-full mt-4"
                    variant="outline"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule for {scheduleDate.toLocaleDateString()}
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Resizable Editor and Preview */}
          <div className="flex-1 min-w-0">
            <ResizablePanelGroup direction="horizontal" className="h-full">
              {/* Editor Panel */}
              <ResizablePanel defaultSize={55} minSize={30}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">Content Editor</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Write your blog content using the rich text editor below
                    </p>
                  </CardHeader>
                  <CardContent>
                    <TiptapEditor
                      content={content}
                      onUpdate={(newContent) => {
                        setContent(newContent);
                      }}
                    />
                  </CardContent>
                </Card>
              </ResizablePanel>

              {/* Resize Handle */}
              <ResizableHandle withHandle className="hidden lg:flex" />

              {/* Preview Panel */}
              <ResizablePanel defaultSize={45} minSize={30} className="hidden lg:block">
                <Card className="h-[calc(100vh-8rem)]">
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
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
