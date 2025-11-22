import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Search,
  Send,
  MoreVertical,
  Phone,
  Video,
  Paperclip,
  Smile,
  Users,
  Bell,
  Calendar,
  ArrowLeft,
} from "lucide-react";

export function ChatPage() {
  const [selectedChat, setSelectedChat] = useState("1");
  const [message, setMessage] = useState("");
  const [showChatList, setShowChatList] = useState(true);

  const conversations = [
    {
      id: "1",
      name: "Sarah Johnson",
      lastMessage: "See you at the Tech Summit!",
      time: "2m ago",
      unread: 2,
      avatar: "SJ",
      online: true,
      type: "direct",
    },
    {
      id: "2",
      name: "Marketing Masterclass Group",
      lastMessage: "Alex: Thanks for sharing the notes",
      time: "15m ago",
      unread: 0,
      avatar: "MM",
      online: false,
      type: "group",
      members: 24,
    },
    {
      id: "3",
      name: "Michael Chen",
      lastMessage: "Would love to connect after the event",
      time: "1h ago",
      unread: 1,
      avatar: "MC",
      online: true,
      type: "direct",
    },
    {
      id: "4",
      name: "AI Workshop Alumni",
      lastMessage: "New resources shared in the chat",
      time: "3h ago",
      unread: 0,
      avatar: "AI",
      online: false,
      type: "group",
      members: 156,
    },
    {
      id: "5",
      name: "EventConnect",
      lastMessage: "Reminder: Tech Summit starts tomorrow at 9 AM",
      time: "5h ago",
      unread: 0,
      avatar: "EC",
      online: false,
      type: "system",
    },
  ];

  const messages = [
    {
      id: "1",
      sender: "Sarah Johnson",
      avatar: "SJ",
      message: "Hey! Are you going to the Tech Leaders Summit tomorrow?",
      time: "10:30 AM",
      isMe: false,
    },
    {
      id: "2",
      sender: "Me",
      message: "Yes! I'm really excited. Will you be there?",
      time: "10:32 AM",
      isMe: true,
    },
    {
      id: "3",
      sender: "Sarah Johnson",
      avatar: "SJ",
      message:
        "Absolutely! I'm speaking on the AI panel in the afternoon. We should grab coffee during the break.",
      time: "10:35 AM",
      isMe: false,
    },
    {
      id: "4",
      sender: "Me",
      message: "That would be great! I'll be at the opening keynote.",
      time: "10:37 AM",
      isMe: true,
    },
    {
      id: "5",
      sender: "Sarah Johnson",
      avatar: "SJ",
      message: "See you at the Tech Summit!",
      time: "10:40 AM",
      isMe: false,
    },
  ];

  const systemMessages = [
    {
      id: "1",
      type: "event-reminder",
      title: "Event Reminder",
      message: "Tech Leaders Summit 2025 starts tomorrow at 9:00 AM",
      time: "5 hours ago",
      icon: Calendar,
      color: "text-[#FF7A33]",
    },
    {
      id: "2",
      type: "match",
      title: "New Connection Match",
      message: "You have 3 new connection recommendations based on your interests",
      time: "1 day ago",
      icon: Users,
      color: "text-[#1D6FD8]",
    },
    {
      id: "3",
      type: "suggestion",
      title: "Event Suggestion",
      message: "AI & Machine Learning Workshop matches your interests",
      time: "2 days ago",
      icon: Bell,
      color: "text-purple-600",
    },
  ];

  const currentConversation = conversations.find((c) => c.id === selectedChat);

  // Handle window resize - show chat list on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowChatList(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle chat selection on mobile - hide list and show chat
  const handleChatSelect = (chatId: string) => {
    setSelectedChat(chatId);
    if (window.innerWidth < 1024) {
      setShowChatList(false);
    }
  };

  // Handle back button on mobile
  const handleBackToList = () => {
    setShowChatList(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-2 sm:py-4 lg:py-8">
        <h1 className="mb-3 sm:mb-4 lg:mb-6 text-lg sm:text-xl lg:text-2xl px-2 sm:px-0">Messages</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 h-[calc(100vh-120px)] sm:h-[calc(100vh-140px)] lg:h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <Card className={`lg:col-span-1 flex flex-col ${showChatList ? 'flex' : 'hidden lg:flex'}`}>
            <div className="p-2 sm:p-3 lg:p-4 border-b">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-8 sm:h-9 lg:h-10">
                  <TabsTrigger value="all" className="text-xs sm:text-sm">All</TabsTrigger>
                  <TabsTrigger value="direct" className="text-xs sm:text-sm">Direct</TabsTrigger>
                  <TabsTrigger value="groups" className="text-xs sm:text-sm">Groups</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="relative mt-2 sm:mt-3 lg:mt-4">
                <Search className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search messages..."
                  className="pl-7 sm:pl-10 text-sm h-8 sm:h-9 lg:h-10"
                />
              </div>
            </div>

            <ScrollArea className="flex-1">
              <div className="p-1 sm:p-2">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => handleChatSelect(conversation.id)}
                    className={`p-2 sm:p-3 lg:p-4 rounded-lg cursor-pointer transition-colors mb-1 sm:mb-2 ${
                      selectedChat === conversation.id
                        ? "bg-gradient-to-r from-[#FF7A33]/10 to-[#1D6FD8]/10"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="relative flex-shrink-0">
                        <Avatar className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
                          <AvatarFallback
                            className={`text-xs sm:text-sm ${
                              conversation.type === "system"
                                ? "bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] text-white"
                                : "bg-gray-200 text-gray-700"
                            }`}
                          >
                            {conversation.avatar}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <span className="absolute bottom-0 right-0 w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-green-500 border border-white rounded-full"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5 sm:mb-1">
                          <p className="truncate text-sm sm:text-base font-medium">{conversation.name}</p>
                          <span className="text-[10px] sm:text-xs text-gray-500 flex-shrink-0 ml-2">
                            {conversation.time}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-xs sm:text-sm text-gray-600 truncate flex-1">
                            {conversation.lastMessage}
                          </p>
                          {conversation.unread > 0 && (
                            <Badge className="ml-2 bg-[#FF7A33] text-white border-0 h-4 min-w-4 sm:h-5 sm:min-w-5 flex items-center justify-center p-0 px-1 sm:px-1.5 text-[10px] sm:text-xs flex-shrink-0">
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                        {conversation.type === "group" && conversation.members && (
                          <div className="flex items-center gap-1 mt-0.5 sm:mt-1">
                            <Users className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-400" />
                            <span className="text-[10px] sm:text-xs text-gray-500">
                              {conversation.members} members
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </Card>

          {/* Chat Area */}
          <Card className={`lg:col-span-2 flex flex-col ${!showChatList ? 'flex' : 'hidden lg:flex'}`}>
            {currentConversation?.type === "system" ? (
              // System Messages View
              <div className="flex-1 flex flex-col min-h-0">
                <div className="p-2 sm:p-3 lg:p-4 border-b flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleBackToList}
                        className="lg:hidden mr-1 h-8 w-8 sm:h-9 sm:w-9"
                      >
                        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Button>
                      <Avatar className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
                        <AvatarFallback className="bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] text-white text-xs sm:text-sm">
                          {currentConversation.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-sm sm:text-base lg:text-lg">{currentConversation.name}</h3>
                        <p className="text-xs sm:text-sm text-gray-600">System Notifications</p>
                      </div>
                    </div>
                  </div>
                </div>

                <ScrollArea className="flex-1 p-3 sm:p-4 lg:p-6 min-h-0">
                  <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                    {systemMessages.map((msg) => {
                      const Icon = msg.icon;
                      return (
                        <Card key={msg.id} className="p-2 sm:p-3 lg:p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-2 sm:gap-3 lg:gap-4">
                            <div
                              className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 ${msg.color}`}
                            >
                              <Icon className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1 sm:mb-2 gap-2">
                                <h4 className="text-sm sm:text-base font-medium truncate">{msg.title}</h4>
                                <span className="text-[10px] sm:text-xs text-gray-500 flex-shrink-0">{msg.time}</span>
                              </div>
                              <p className="text-xs sm:text-sm lg:text-base text-gray-600 break-words">{msg.message}</p>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </ScrollArea>
              </div>
            ) : (
              // Regular Chat View
              <>
                <div className="p-2 sm:p-3 lg:p-4 border-b flex-shrink-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleBackToList}
                        className="lg:hidden h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0"
                      >
                        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Button>
                      <Avatar className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex-shrink-0">
                        <AvatarFallback className="bg-gray-200 text-gray-700 text-xs sm:text-sm">
                          {currentConversation?.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm sm:text-base lg:text-lg truncate">{currentConversation?.name}</h3>
                        {currentConversation?.online && (
                          <p className="text-xs sm:text-sm text-green-600">Online</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                      <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10">
                        <Phone className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10">
                        <Video className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10">
                        <MoreVertical className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                      </Button>
                    </div>
                  </div>
                </div>

                <ScrollArea className="flex-1 p-2 sm:p-3 lg:p-6 min-h-0">
                  <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`flex gap-2 sm:gap-3 max-w-[85%] sm:max-w-[75%] lg:max-w-[70%] ${
                            msg.isMe ? "flex-row-reverse" : "flex-row"
                          }`}
                        >
                          {!msg.isMe && (
                            <Avatar className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex-shrink-0">
                              <AvatarFallback className="bg-gray-200 text-gray-700 text-[10px] sm:text-xs">
                                {msg.avatar}
                              </AvatarFallback>
                            </Avatar>
                          )}
                          <div className="min-w-0">
                            <div
                              className={`rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 lg:px-4 lg:py-3 break-words ${
                                msg.isMe
                                  ? "bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white"
                                  : "bg-gray-100 text-gray-900"
                              }`}
                            >
                              <p className="text-sm sm:text-base leading-relaxed break-words">{msg.message}</p>
                            </div>
                            <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1 px-1 sm:px-2">
                              {msg.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <div className="p-2 sm:p-3 lg:p-4 border-t flex-shrink-0 bg-white">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 flex-shrink-0">
                      <Paperclip className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 flex-shrink-0">
                      <Smile className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                    </Button>
                    <Input
                      placeholder="Type a message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          setMessage("");
                        }
                      }}
                      className="flex-1 text-sm sm:text-base h-8 sm:h-9 lg:h-10 min-w-0"
                    />
                    <Button
                      size="icon"
                      className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856] h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 flex-shrink-0"
                    >
                      <Send className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
