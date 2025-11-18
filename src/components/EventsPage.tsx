import { useState } from "react";
import { EventCard } from "./EventCard";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Search,
  Filter,
  Sparkles,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  SlidersHorizontal,
  Award,
  Tag,
  X,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

interface EventsPageProps {
  onViewEvent?: () => void;
  onNavigate?: (page: string) => void;
}

export function EventsPage({ onViewEvent, onNavigate }: EventsPageProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [showAIFinder, setShowAIFinder] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Categories list - supports many categories
  const categories = [
    "Technology",
    "Marketing",
    "Networking",
    "Creative",
    "Entertainment",
    "Business",
    "Design",
    "Finance",
    "Healthcare",
    "Education",
    "Startups",
    "Artificial Intelligence",
    "Data Science",
    "Cybersecurity",
    "Blockchain",
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Product Management",
    "Sales",
    "Leadership",
    "Women in Tech",
    "Diversity & Inclusion",
    "Sustainability",
    "Social Impact",
    "Non-profit",
    "Music",
    "Art",
    "Photography",
    "Writing",
    "Film & TV",
    "Sports",
    "Fitness",
    "Food & Drink",
    "Travel",
    "Fashion",
    "Real Estate",
    "Legal",
    "Consulting",
    "Manufacturing",
    "Retail",
    "Agriculture",
    "Energy",
    "Transportation",
    "Media & Journalism",
  ];

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearCategories = () => {
    setSelectedCategories([]);
  };

  const allEvents = [
    {
      id: "1",
      title: "Global Tech Innovation Summit 2025",
      date: "Nov 20, 2025",
      time: "9:00 AM",
      location: "San Francisco Convention Center, CA",
      type: "in-person" as const,
      attendees: 450,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1080&q=80",
      tags: ["Innovation", "AI", "Leadership"],
      isFeatured: true,
    },
    {
      id: "2",
      title: "Advanced Digital Marketing Bootcamp",
      date: "Nov 22, 2025",
      time: "2:00 PM",
      location: "Online via Zoom",
      type: "online" as const,
      attendees: 320,
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080&q=80",
      tags: ["SEO", "Content Marketing", "Analytics"],
    },
    {
      id: "3",
      title: "Startup Founders & Investors Mixer",
      date: "Nov 25, 2025",
      time: "6:00 PM",
      location: "WeWork Downtown, New York",
      type: "in-person" as const,
      attendees: 180,
      category: "Networking",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1080&q=80",
      tags: ["Startups", "Venture Capital", "Pitching"],
    },
    {
      id: "4",
      title: "Deep Learning & Neural Networks Workshop",
      date: "Dec 1, 2025",
      time: "10:00 AM",
      location: "MIT Campus, Cambridge, MA",
      type: "in-person" as const,
      attendees: 280,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1080&q=80",
      tags: ["Machine Learning", "Python", "TensorFlow"],
      isFeatured: true,
    },
    {
      id: "5",
      title: "Contemporary Art & Design Exhibition",
      date: "Dec 5, 2025",
      time: "7:00 PM",
      location: "MoMA Gallery, Manhattan",
      type: "in-person" as const,
      attendees: 150,
      category: "Creative",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1080&q=80",
      tags: ["Modern Art", "Design", "Gallery"],
    },
    {
      id: "6",
      title: "Jazz & Blues Music Festival",
      date: "Dec 10, 2025",
      time: "1:00 PM",
      location: "Lincoln Center, New York",
      type: "in-person" as const,
      attendees: 220,
      category: "Entertainment",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1080&q=80",
      tags: ["Jazz", "Live Music", "Festival"],
    },
    {
      id: "7",
      title: "Blockchain & Cryptocurrency Conference",
      date: "Dec 12, 2025",
      time: "11:00 AM",
      location: "Austin Convention Center, TX",
      type: "in-person" as const,
      attendees: 380,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1080&q=80",
      tags: ["Blockchain", "Crypto", "Web3"],
    },
    {
      id: "8",
      title: "Sustainable Business Practices Forum",
      date: "Dec 15, 2025",
      time: "3:00 PM",
      location: "Seattle Conference Center, WA",
      type: "in-person" as const,
      attendees: 195,
      category: "Business",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1080&q=80",
      tags: ["Sustainability", "ESG", "Green Business"],
    },
    {
      id: "9",
      title: "UX/UI Design Masterclass",
      date: "Dec 18, 2025",
      time: "9:30 AM",
      location: "Online via Microsoft Teams",
      type: "online" as const,
      attendees: 275,
      category: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1080&q=80",
      tags: ["UX Design", "UI", "User Research"],
    },
    {
      id: "10",
      title: "Women in Tech Leadership Summit",
      date: "Dec 20, 2025",
      time: "8:00 AM",
      location: "Silicon Valley Tech Park, CA",
      type: "in-person" as const,
      attendees: 320,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1080&q=80",
      tags: ["Diversity", "Leadership", "Women in Tech"],
    },
  ];

  // Trending events - same as shown on Home page Trending section
  const trendingEvents = [
    {
      id: "4",
      title: "Deep Learning & Neural Networks Workshop",
      date: "Dec 1, 2025",
      time: "10:00 AM",
      location: "MIT Campus, Cambridge, MA",
      type: "in-person" as const,
      attendees: 280,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1080&q=80",
      tags: ["Machine Learning", "Python", "TensorFlow"],
      isFeatured: true,
    },
    {
      id: "5",
      title: "Contemporary Art & Design Exhibition",
      date: "Dec 5, 2025",
      time: "7:00 PM",
      location: "MoMA Gallery, Manhattan",
      type: "in-person" as const,
      attendees: 150,
      category: "Creative",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1080&q=80",
      tags: ["Modern Art", "Design", "Gallery"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section relocated from Home */}
      <div className="bg-gradient-to-r from-[#FF7A33] to-[#1D6FD8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-20">
          <div className="flex flex-col items-start p-4 md:p-6 lg:p-8">
            <h1 className="text-lg md:text-2xl lg:text-3xl mb-2">Curated Events For You</h1>
            <p className="text-white/90 text-xs md:text-sm lg:text-base mb-3">
            You have 5 recommended events this week based on your interests
            </p>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => onNavigate?.("events")}
                className="bg-white text-[#FF7A33] hover:bg-gray-100 h-8 md:h-9 text-xs md:text-sm"
                size="sm"
              >
                <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1 md:mr-1.5" />
                Discover Events
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white/20 h-8 md:h-9 text-xs md:text-sm"
                size="sm"
                onClick={() => onNavigate?.("event-calendar")}
              >
                View Calendar
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        {/* Header */}
        <div className="mt-4 md:mt-6 mb-4 md:mb-8">
          <h1 className="mb-2 text-lg md:text-xl lg:text-2xl">Discover Events</h1>
          <p className="text-gray-600 text-sm md:text-base">
            Find and join events that match your interests
          </p>
        </div>

        {/* Search and AI Finder */}
        <div className="mb-4 md:mb-8 space-y-3 md:space-y-4">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <div className="w-full max-w-lg relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400 z-10 pointer-events-none" />
              <Input
                type="search"
                placeholder="Search events, topics, speakers..."
                className="pl-10 md:pl-12 h-10 md:h-12 w-full text-sm pr-3"
              />
            </div>
            <Button
              onClick={() => {
                setShowCategories(!showCategories);
                setShowFilters(false);
              }}
              variant="outline"
              className={`h-10 md:h-12 text-xs md:text-sm ${selectedCategories.length > 0 ? "bg-[#FF7A33]/10 border-[#FF7A33] text-[#FF7A33]" : ""}`}
              size="sm"
            >
              <Tag className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2" />
              Categories
              {selectedCategories.length > 0 && (
                <Badge className="ml-1.5 h-5 min-w-5 flex items-center justify-center bg-[#FF7A33] text-white border-0 text-xs px-1.5">
                  {selectedCategories.length}
                </Badge>
              )}
            </Button>
            <Button
              onClick={() => {
                setShowFilters(!showFilters);
                setShowCategories(false);
              }}
              variant="outline"
              className="h-10 md:h-12 text-xs md:text-sm"
              size="sm"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2" />
              Filters
            </Button>
            <Button
              onClick={() => setShowAIFinder(!showAIFinder)}
              className="h-10 md:h-12 bg-gradient-to-r from-[#FF7A33] to-[#1D6FD8] text-white hover:from-[#FF6A23] hover:to-[#1C5FBC] text-xs md:text-sm"
              size="sm"
            >
              <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2" />
              AI Event Finder
            </Button>
            <Button
              onClick={() => onNavigate?.("connection-matchmaking")}
              variant="outline"
              className="h-10 md:h-12 whitespace-nowrap text-xs md:text-sm"
              size="sm"
            >
              <Users className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5 md:mr-2" />
              Matchmaking
            </Button>
          </div>

          {/* Categories Panel */}
          {showCategories && (
            <Card className="p-3 md:p-6">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 md:w-5 md:h-5 text-[#FF7A33]" />
                  <h3 className="text-sm md:text-base font-semibold">Categories</h3>
                  {selectedCategories.length > 0 && (
                    <Badge className="bg-[#FF7A33] text-white border-0 text-xs">
                      {selectedCategories.length} selected
                    </Badge>
                  )}
                </div>
                {selectedCategories.length > 0 && (
                  <Button
                    onClick={clearCategories}
                    variant="ghost"
                    size="sm"
                    className="text-xs md:text-sm h-8"
                  >
                    <X className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    Clear All
                  </Button>
                )}
              </div>
              <div className="max-h-[300px] md:max-h-[400px] overflow-y-auto pr-2">
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {categories.map((category) => {
                    const isSelected = selectedCategories.includes(category);
                    return (
                      <button
                        key={category}
                        onClick={() => toggleCategory(category)}
                        className={`
                          px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all
                          ${
                            isSelected
                              ? "bg-[#FF7A33] text-white border-2 border-[#FF7A33] shadow-sm"
                              : "bg-gray-100 text-gray-700 border-2 border-gray-200 hover:border-[#FF7A33]/50 hover:bg-gray-50"
                          }
                        `}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>
              {selectedCategories.length > 0 && (
                <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t">
                  <p className="text-xs md:text-sm text-gray-600 mb-2">
                    Selected: {selectedCategories.join(", ")}
                  </p>
                </div>
              )}
            </Card>
          )}

          {/* AI Event Finder Panel */}
          {showAIFinder && (
            <Card className="p-3 md:p-6 bg-gradient-to-br from-[#FF7A33]/5 to-[#1D6FD8]/5 border-2 border-[#FF7A33]/20">
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-sm md:text-base">AI Event Finder</h3>
                  <p className="text-gray-600 mb-3 md:mb-4 text-xs md:text-sm">
                    Tell us what you're looking for and we'll find the perfect events
                    for you
                  </p>
                </div>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <Label className="text-sm">What are you interested in?</Label>
                  <Input
                    placeholder="e.g., AI, startup networking, design workshops..."
                    className="mt-2 text-sm"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                  <div>
                    <Label>Date Range</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="week">This Week</SelectItem>
                        <SelectItem value="month">This Month</SelectItem>
                        <SelectItem value="quarter">Next 3 Months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Location</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="online">Online</SelectItem>
                        <SelectItem value="local">Local Events</SelectItem>
                        <SelectItem value="any">Any Location</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Event Size</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small (0-50)</SelectItem>
                        <SelectItem value="medium">Medium (50-200)</SelectItem>
                        <SelectItem value="large">Large (200+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white hover:from-[#FF6A23] hover:to-[#FF8856]">
                  Find My Perfect Events
                </Button>
              </div>
            </Card>
          )}

          {/* Filters Panel */}
          {showFilters && (
            <Card className="p-3 md:p-6">
              <h3 className="mb-3 md:mb-4 text-sm md:text-base">Filters</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6">
                <div>
                  <Label className="mb-2 md:mb-3 block text-sm">Event Type</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="online" />
                      <label htmlFor="online" className="text-xs md:text-sm cursor-pointer">
                        Online
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="in-person" />
                      <label htmlFor="in-person" className="text-xs md:text-sm cursor-pointer">
                        In-Person
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <Label className="mb-2 md:mb-3 block text-sm">Sort By</Label>
                  <Select>
                    <SelectTrigger className="text-sm">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date">Date</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="relevant">Most Relevant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button variant="outline" className="w-full text-xs md:text-sm" size="sm">
                    Clear Filters
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Events Tabs */}
        <Tabs defaultValue="all" className="space-y-3 md:space-y-6">
          <TabsList className="flex flex-row flex-nowrap w-full max-w-lg text-xs md:text-sm">
            <TabsTrigger value="all">All Events</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3 md:space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-xs md:text-sm">
                Showing {allEvents.length} events
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {allEvents.map((event) => (
                <EventCard key={event.id} {...event} onViewDetails={onViewEvent} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trending" className="space-y-3 md:space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-xs md:text-sm">
                Showing {trendingEvents.length} trending events
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {trendingEvents.map((event) => (
                <EventCard key={event.id} {...event} onViewDetails={onViewEvent} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-3 md:space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-xs md:text-sm">
                Showing {allEvents.filter((e) => e.date.includes("Nov")).length}{" "}
                upcoming events
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {allEvents
                .filter((e) => e.date.includes("Nov"))
                .map((event) => (
                  <EventCard key={event.id} {...event} onViewDetails={onViewEvent} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="saved">
            <Card className="p-6 md:p-12 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
              </div>
              <h3 className="mb-2 text-sm md:text-base">No Saved Events</h3>
              <p className="text-gray-600 mb-3 md:mb-4 text-xs md:text-sm">
                Start saving events you're interested in
              </p>
              <Button className="bg-gradient-to-r from-[#FF7A33] to-[#FF9966] text-white text-xs md:text-sm" size="sm">
                Explore Events
              </Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
