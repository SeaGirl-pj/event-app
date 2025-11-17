import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { Progress } from "./ui/progress";
import { Calendar, ArrowRight, ArrowLeft, Check } from "lucide-react";

interface SignupProps {
  onSignup: () => void;
  onSwitchToLogin: () => void;
}

export function Signup({ onSignup, onSwitchToLogin }: SignupProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    industry: "",
    eventTypes: [] as string[],
    eventFormat: "",
    networkingGoals: [] as string[],
    skillsToLearn: "",
    preferredDays: [] as string[],
    experienceLevel: "",
    wantsAISuggestions: "",
  });

  const totalSteps = 9;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onSignup();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const toggleArrayItem = (field: "eventTypes" | "networkingGoals" | "preferredDays", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF7A33]/10 via-white to-[#1D6FD8]/10 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF7A33] to-[#1D6FD8] rounded-xl flex items-center justify-center">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl">EventConnect</h1>
          </div>
          <p className="text-gray-600">
            {step === 1
              ? "Create your account"
              : "Help us personalize your experience"}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-gray-600">Step {step} of {totalSteps}</span>
            <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Form Card */}
        <Card className="p-8 shadow-xl">
          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <h2 className="mb-2">Let's get started</h2>
                <p className="text-gray-600">Create your EventConnect account</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <p className="text-xs text-gray-500">
                  Must be at least 8 characters
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Industry */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h2 className="mb-2">What industry do you work in?</h2>
                <p className="text-gray-600">
                  This helps us recommend relevant events
                </p>
              </div>
              <RadioGroup
                value={formData.industry}
                onValueChange={(value) =>
                  setFormData({ ...formData, industry: value })
                }
                className="space-y-3"
              >
                {[
                  "Technology & Software",
                  "Finance & Banking",
                  "Healthcare & Medical",
                  "Marketing & Advertising",
                  "Education & Training",
                  "Creative & Design",
                  "Engineering & Manufacturing",
                  "Other",
                ].map((industry) => (
                  <div
                    key={industry}
                    className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <RadioGroupItem value={industry} id={industry} />
                    <Label htmlFor={industry} className="cursor-pointer flex-1">
                      {industry}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step 3: Event Types */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <h2 className="mb-2">What type of events interest you?</h2>
                <p className="text-gray-600">Select all that apply</p>
              </div>
              <div className="space-y-3">
                {[
                  "Networking Events",
                  "Conferences & Summits",
                  "Workshops & Training",
                  "Webinars & Online Events",
                  "Social & Cultural Events",
                  "Career Fairs",
                  "Hackathons & Competitions",
                  "Panel Discussions",
                ].map((type) => (
                  <div
                    key={type}
                    className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => toggleArrayItem("eventTypes", type)}
                  >
                    <Checkbox
                      id={type}
                      checked={formData.eventTypes.includes(type)}
                      onCheckedChange={() => toggleArrayItem("eventTypes", type)}
                    />
                    <Label htmlFor={type} className="cursor-pointer flex-1">
                      {type}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Event Format */}
          {step === 4 && (
            <div className="space-y-5">
              <div>
                <h2 className="mb-2">Do you prefer online or in-person events?</h2>
                <p className="text-gray-600">Choose your preference</p>
              </div>
              <RadioGroup
                value={formData.eventFormat}
                onValueChange={(value) =>
                  setFormData({ ...formData, eventFormat: value })
                }
                className="space-y-3"
              >
                {[
                  {
                    value: "in-person",
                    label: "In-Person Events",
                    desc: "I prefer attending events physically",
                  },
                  {
                    value: "online",
                    label: "Online Events",
                    desc: "I prefer virtual events and webinars",
                  },
                  {
                    value: "both",
                    label: "Both",
                    desc: "I'm flexible with both formats",
                  },
                ].map((option) => (
                  <div
                    key={option.value}
                    className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor={option.value} className="cursor-pointer">
                        {option.label}
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">{option.desc}</p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step 5: Networking Goals */}
          {step === 5 && (
            <div className="space-y-5">
              <div>
                <h2 className="mb-2">What are your networking goals?</h2>
                <p className="text-gray-600">Select all that apply</p>
              </div>
              <div className="space-y-3">
                {[
                  "Find job opportunities",
                  "Build professional connections",
                  "Learn new skills",
                  "Find mentors or mentees",
                  "Discover business partnerships",
                  "Stay updated with industry trends",
                  "Share my expertise",
                  "Expand my client base",
                ].map((goal) => (
                  <div
                    key={goal}
                    className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => toggleArrayItem("networkingGoals", goal)}
                  >
                    <Checkbox
                      id={goal}
                      checked={formData.networkingGoals.includes(goal)}
                      onCheckedChange={() => toggleArrayItem("networkingGoals", goal)}
                    />
                    <Label htmlFor={goal} className="cursor-pointer flex-1">
                      {goal}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Skills to Learn */}
          {step === 6 && (
            <div className="space-y-5">
              <div>
                <h2 className="mb-2">What skills or topics are you trying to learn?</h2>
                <p className="text-gray-600">
                  Help us recommend the right events for you
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="skills">Skills or Topics</Label>
                <textarea
                  id="skills"
                  className="w-full min-h-[120px] px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A33] focus:border-transparent resize-none"
                  placeholder="e.g., Data Science, Public Speaking, Leadership, AI & Machine Learning, Marketing Strategy..."
                  value={formData.skillsToLearn}
                  onChange={(e) =>
                    setFormData({ ...formData, skillsToLearn: e.target.value })
                  }
                />
              </div>
            </div>
          )}

          {/* Step 7: Preferred Days */}
          {step === 7 && (
            <div className="space-y-5">
              <div>
                <h2 className="mb-2">What days are best for attending events?</h2>
                <p className="text-gray-600">Select your preferred days</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                  "Weekends Only",
                ].map((day) => (
                  <div
                    key={day}
                    className={`p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-all ${
                      formData.preferredDays.includes(day)
                        ? "border-[#FF7A33] bg-[#FF7A33]/5"
                        : ""
                    }`}
                    onClick={() => toggleArrayItem("preferredDays", day)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{day}</span>
                      {formData.preferredDays.includes(day) && (
                        <Check className="w-5 h-5 text-[#FF7A33]" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 8: Event Experience Level */}
          {step === 8 && (
            <div className="space-y-5">
              <div>
                <h2 className="mb-2">What's your event experience level?</h2>
                <p className="text-gray-600">
                  Help us tailor the event recommendations
                </p>
              </div>
              <RadioGroup
                value={formData.experienceLevel}
                onValueChange={(value) =>
                  setFormData({ ...formData, experienceLevel: value })
                }
                className="space-y-3"
              >
                {[
                  {
                    value: "beginner",
                    label: "Just Getting Started",
                    desc: "I'm new to professional events and networking",
                  },
                  {
                    value: "intermediate",
                    label: "Regular Attendee",
                    desc: "I attend events occasionally and have some experience",
                  },
                  {
                    value: "advanced",
                    label: "Event Veteran",
                    desc: "I frequently attend and organize events",
                  },
                  {
                    value: "expert",
                    label: "Industry Expert",
                    desc: "I'm a speaker, organizer, or industry leader",
                  },
                ].map((option) => (
                  <div
                    key={option.value}
                    className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor={option.value} className="cursor-pointer">
                        {option.label}
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">{option.desc}</p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          {/* Step 9: AI Suggestions */}
          {step === 9 && (
            <div className="space-y-5">
              <div>
                <h2 className="mb-2">Enable AI-powered recommendations?</h2>
                <p className="text-gray-600">
                  Let our AI help you discover the perfect events and connections
                </p>
              </div>
              <RadioGroup
                value={formData.wantsAISuggestions}
                onValueChange={(value) =>
                  setFormData({ ...formData, wantsAISuggestions: value })
                }
                className="space-y-3"
              >
                {[
                  {
                    value: "yes",
                    label: "Yes, enable AI suggestions",
                    desc: "Get personalized event recommendations and connection matches",
                  },
                  {
                    value: "limited",
                    label: "Limited AI assistance",
                    desc: "Use AI for event discovery only, not for connections",
                  },
                  {
                    value: "no",
                    label: "No AI suggestions",
                    desc: "I prefer to browse events manually",
                  },
                ].map((option) => (
                  <div
                    key={option.value}
                    className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor={option.value} className="cursor-pointer">
                        {option.label}
                      </Label>
                      <p className="text-sm text-gray-600 mt-1">{option.desc}</p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
              <div className="p-4 bg-gradient-to-r from-[#FF7A33]/10 to-[#1D6FD8]/10 rounded-lg border border-[#FF7A33]/20 mt-4">
                <p className="text-sm text-gray-700">
                  💡 <strong>Privacy Note:</strong> Your data is used only to improve
                  your experience and is never shared with third parties.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-8">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                className="flex-1"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            <Button
              type="button"
              onClick={handleNext}
              className={`bg-gradient-to-r from-[#FF7A33] to-[#FF9966] hover:from-[#FF6A23] hover:to-[#FF8856] text-white ${
                step === 1 ? "w-full" : "flex-1"
              }`}
            >
              {step === totalSteps ? (
                <>
                  Complete
                  <Check className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>

          {step === 1 && (
            <p className="mt-6 text-center text-gray-600">
              Already have an account?{" "}
              <button
                onClick={onSwitchToLogin}
                className="text-[#1D6FD8] hover:underline"
              >
                Sign in
              </button>
            </p>
          )}
        </Card>
      </div>
    </div>
  );
}
