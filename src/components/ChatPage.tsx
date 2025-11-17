import { useState } from "react";
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
} from "lucide-react";

export function ChatPage() {
  const [selectedChat, setSelectedChat] = useState("1");
  const [message, setMessage] = useState("");

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="mb-6">Messages</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <Card className="lg:col-span-1 flex flex-col">
            <div className="p-4 border-b">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="direct">Direct</TabsTrigger>
                  <TabsTrigger value="groups">Groups</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search messages..."
                  className="pl-10"
                />
              </div>
            </div>

            <ScrollArea className="flex-1">
              <div className="p-2">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedChat(conversation.id)}
                    className={`p-4 rounded-lg cursor-pointer transition-colors mb-2 ${
                      selectedChat === conversation.id
                        ? "bg-gradient-to-r from-[#FF7A33]/10 to-[#1D6FD8]/10"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarFallback
                            className={
                              conversation.type === "system"
                                ? "bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] text-white"
                                : "bg-gray-200 text-gray-700"
                            }
                          >
                            {conversation.avatar}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="truncate">{conversation.name}</p>
                          <span className="text-xs text-gray-500">
                            {conversation.time}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-gray-600 truncate flex-1">
                            {conversation.lastMessage}
                          </p>
                          {conversation.unread > 0 && (
                            <Badge className="ml-2 bg-[#FF7A33] text-white border-0 h-5 min-w-5 flex items-center justify-center p-0 px-1.5">
                              {conversation.unread}
                            </Badge>
                          )}
                        </div>
                        {conversation.type === "group" && conversation.members && (
                          <div className="flex items-center gap-1 mt-1">
                            <Users className="w-3 h-3 text-gray-400" />
                            <span className="text-xs text-gray-500">
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
          <Card className="lg:col-span-2 flex flex-col">
            {currentConversation?.type === "system" ? (
              // System Messages View
              <div className="flex-1 flex flex-col">
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] text-white">
                          {currentConversation.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3>{currentConversation.name}</h3>
                        <p className="text-sm text-gray-600">System Notifications</p>
                      </div>
                    </div>
                  </div>
                </div>

                <ScrollArea className="flex-1 p-6">
                  <div className="space-y-4">
                    {systemMessages.map((msg) => {
                      const Icon = msg.icon;
                      return (
                        <Card key={msg.id} className="p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-4">
                            <div
                              className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 ${msg.color}`}
                            >
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4>{msg.title}</h4>
                                <span className="text-xs text-gray-500">{msg.time}</span>
                              </div>
                              <p className="text-gray-600">{msg.message}</p>
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
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-gray-200 text-gray-700">
                          {currentConversation?.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3>{currentConversation?.name}</h3>
                        {currentConversation?.online && (
                          <p className="text-sm text-green-600">Online</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Phone className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Video className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>

                <ScrollArea className="flex-1 p-6">
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`flex gap-3 max-w-[70%] ${
                            msg.isMe ? "flex-row-reverse" : "flex-row"
                          }`}
                        >
                          {!msg.isMe && (
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="bg-gray-200 text-gray-700 text-xs">
                                {msg.avatar}
                              </AvatarFallback>
                            </Avatar>
                          )}
                          <div>
                            <div
                              className={`rounded-2xl px-4 py-3 ${
                                msg.isMe
                                  ? "bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white"
                                  : "bg-gray-100 text-gray-900"
                              }`}
                            >
                              <p>{msg.message}</p>
                            </div>
                            <p className="text-xs text-gray-500 mt-1 px-2">
                              {msg.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <div className="p-4 border-t">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Paperclip className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Smile className="w-5 h-5" />
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
                      className="flex-1"
                    />
                    <Button
                      size="icon"
                      className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856]"
                    >
                      <Send className="w-5 h-5" />
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
