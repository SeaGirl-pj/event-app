import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Plus,
  Image as ImageIcon,
  Calendar,
  MoreVertical,
  Edit,
  Trash2,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface Post {
  id: string;
  userId: string;
  userName: string;
  userInitials: string;
  eventName: string;
  eventId: string;
  caption: string;
  image: string;
  timestamp: string;
  likes: number;
  comments: number;
  isOwnPost: boolean;
}

interface PostsPageProps {
  onNavigate?: (page: string, eventId?: string) => void;
}

export function PostsPage({ onNavigate }: PostsPageProps) {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [newPostCaption, setNewPostCaption] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [editingPostId, setEditingPostId] = useState<string | null>(null);

  // Mock events data
  const recentEvents = [
    { id: "1", name: "Tech Leaders Summit 2025" },
    { id: "2", name: "Digital Marketing Conference" },
    { id: "3", name: "AI & Innovation Workshop" },
    { id: "4", name: "Startup Pitch Night" },
  ];

  // Mock posts data
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      userId: "1",
      userName: "John Doe",
      userInitials: "JD",
      eventName: "Tech Leaders Summit 2025",
      eventId: "1",
      caption:
        "Great insights on AI and leadership at today's summit. Met amazing people and learned so much about the future of technology. Looking forward to implementing these strategies.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwbmV0d29ya2luZ3xlbnwxfHx8fDE3NjMxNzc3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 5,
      isOwnPost: true,
    },
    {
      id: "2",
      userId: "2",
      userName: "Sarah Johnson",
      userInitials: "SJ",
      eventName: "Digital Marketing Conference",
      eventId: "2",
      caption:
        "Excellent workshop on data-driven marketing strategies. The speakers shared valuable insights on customer engagement and conversion optimization.",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2MzE3Nzc5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      timestamp: "5 hours ago",
      likes: 42,
      comments: 8,
      isOwnPost: false,
    },
    {
      id: "3",
      userId: "3",
      userName: "Michael Chen",
      userInitials: "MC",
      eventName: "AI & Innovation Workshop",
      eventId: "3",
      caption:
        "Fascinating deep dive into machine learning applications. The hands-on sessions were particularly valuable for understanding practical implementation.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHdvcmtzaG9wfGVufDF8fHx8MTc2MzE3Nzc5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      timestamp: "1 day ago",
      likes: 36,
      comments: 12,
      isOwnPost: false,
    },
    {
      id: "4",
      userId: "4",
      userName: "Emily Rodriguez",
      userInitials: "ER",
      eventName: "Startup Pitch Night",
      eventId: "4",
      caption:
        "Inspiring evening watching innovative startups present their ideas. The level of creativity and problem-solving was impressive.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwcGl0Y2h8ZW58MXx8fHwxNzYzMTc3Nzk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      timestamp: "2 days ago",
      likes: 28,
      comments: 6,
      isOwnPost: false,
    },
  ]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreatePost = () => {
    if (!newPostCaption || !selectedEvent || !imagePreview) return;

    const selectedEventData = recentEvents.find((e) => e.id === selectedEvent);
    if (!selectedEventData) return;

    const newPost: Post = {
      id: Date.now().toString(),
      userId: "1",
      userName: "John Doe",
      userInitials: "JD",
      eventName: selectedEventData.name,
      eventId: selectedEvent,
      caption: newPostCaption,
      image: imagePreview,
      timestamp: "Just now",
      likes: 0,
      comments: 0,
      isOwnPost: true,
    };

    setPosts([newPost, ...posts]);
    setShowCreatePost(false);
    setNewPostCaption("");
    setSelectedEvent("");
    setImagePreview("");
  };

  const handleDeletePost = (postId: string) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const handleEditPost = (postId: string) => {
    setEditingPostId(postId);
    // In a real app, you would open an edit dialog here
    alert("Edit functionality would open here with the post content");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="mb-2">Posts</h1>
            <p className="text-gray-600">
              Share your event experiences and connect with other attendees
            </p>
          </div>
          <Dialog open={showCreatePost} onOpenChange={setShowCreatePost}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856]">
                <Plus className="w-4 h-4 mr-2" />
                Create Post
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create New Post</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                {/* Event Selection */}
                <div>
                  <label className="text-sm mb-2 block">Select Event</label>
                  <Select value={selectedEvent} onValueChange={setSelectedEvent}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose an event you attended" />
                    </SelectTrigger>
                    <SelectContent>
                      {recentEvents.map((event) => (
                        <SelectItem key={event.id} value={event.id}>
                          {event.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="text-sm mb-2 block">Upload Photo</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#FF7A33] transition-colors cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      {imagePreview ? (
                        <ImageWithFallback
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      ) : (
                        <>
                          <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-600">
                            Click to upload an image
                          </p>
                          <p className="text-sm text-gray-400 mt-1">
                            PNG, JPG up to 10MB
                          </p>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                {/* Caption */}
                <div>
                  <label className="text-sm mb-2 block">Caption</label>
                  <Textarea
                    placeholder="Share your experience..."
                    value={newPostCaption}
                    onChange={(e) => setNewPostCaption(e.target.value)}
                    className="min-h-[120px]"
                  />
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setShowCreatePost(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleCreatePost}
                    disabled={!newPostCaption || !selectedEvent || !imagePreview}
                    className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856]"
                  >
                    Post
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              {/* Post Header */}
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] text-white">
                      {post.userInitials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{post.userName}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-3 h-3" />
                      <span>{post.eventName}</span>
                      <span>•</span>
                      <span>{post.timestamp}</span>
                    </div>
                  </div>
                </div>
                {post.isOwnPost && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleEditPost(post.id)}>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Post
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDeletePost(post.id)}
                        className="text-red-600"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete Post
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>

              {/* Post Image */}
              <div className="w-full h-[400px] bg-gray-100">
                <ImageWithFallback
                  src={post.image}
                  alt={post.eventName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Post Content */}
              <div className="p-4">
                {/* Actions */}
                <div className="flex items-center gap-4 mb-3">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Heart className="w-5 h-5" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <MessageCircle className="w-5 h-5" />
                    {post.comments}
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2 ml-auto">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>

                {/* Caption */}
                <p className="text-gray-800">{post.caption}</p>

                {/* Event Tag */}
                <Badge
                  variant="outline"
                  className="mt-3 cursor-pointer hover:bg-gray-100"
                  onClick={() => onNavigate && onNavigate("event-detail", post.eventId)}
                >
                  <Calendar className="w-3 h-3 mr-1" />
                  {post.eventName}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}