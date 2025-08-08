import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, Heart, Home, Clock, Target, Star, Lightbulb } from "lucide-react";

const WhatYoullLearn = () => {
  const learningPoints = [
    {
      icon: Brain,
      title: "Scientific Kundali Reading",
      description: "Learn the authentic scientific approach to reading kundali charts with mathematical precision",
      highlight: "Core Foundation"
    },
    {
      icon: TrendingUp,
      title: "Career & Success Prediction",
      description: "Identify your true career path and timing for major professional decisions",
      highlight: "Career Focus"
    },
    {
      icon: Heart,
      title: "Health & Wellness Analysis",
      description: "Understand health patterns and preventive measures through planetary positions",
      highlight: "Health Insights"
    },
    {
      icon: Home,
      title: "Family & Relationship Harmony",
      description: "Resolve family conflicts and create peaceful relationships using kundali wisdom",
      highlight: "Peace at Home"
    },
    {
      icon: Clock,
      title: "Perfect Timing (Muhurat)",
      description: "Master the art of selecting auspicious timing for important life events",
      highlight: "Timing Mastery"
    },
    {
      icon: Target,
      title: "Life Purpose Discovery",
      description: "Uncover your soul's purpose and align your actions with cosmic energy",
      highlight: "Purpose Clarity"
    }
  ];

  const bonuses = [
    "Free Kundali Analysis Template",
    "Planetary Remedy Guidebook",
    "Life Event Timing Calculator",
    "Direct Q&A with Dr. Gunjan"
  ];

  return (
    <div className="relative bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#2C2E4A" }}>
            What You'll <span style={{ color: "#2C2E4A" }}>Master</span>
          </h2>
          <p className="text-xl mb-6" style={{ color: "#5E3A9D" }}>
            Transform your life with scientific kundali analysis
          </p>
          <Badge
            variant="outline"
            className="border-0 text-lg px-6 py-2"
            style={{
              backgroundColor: "#F6C945",
              color: "#5E3A9D",
              fontWeight: 700
            }}
          >
            ✨ 2 Hours of Intensive Training
          </Badge>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {learningPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <Card
                key={index}
                className="bg-[#FFF9F2] border-0 transition-all duration-300 group
    hover:shadow-2xl hover:scale-105 hover:bg-[#fff1db]
    cursor-pointer"
                style={{
                  boxShadow:
                    "0 2px 16px 0 rgba(246, 201, 69, 0.13), 0 1.5px 16px 0 #f6c94511"
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{
                        backgroundColor: "#F6C94522"
                      }}
                    >
                      <IconComponent
                        className="w-6 h-6"
                        style={{ color: "#2C2E4A" }}
                      />
                    </div>
                    <div className="flex-1">
                     <Badge
          variant="secondary"
          className="mb-2 border-0 transition-colors duration-300 group-hover:bg-[#F6C945] group-hover:text-white"
          style={{
            backgroundColor: "#F6C94522",
            color: "#2C2E4A"
          }}
        >
                        {point.highlight}
                      </Badge>
                      <h3
                        className="font-semibold text-lg mb-2 group-hover:text-[#F551DE] transition-colors"
                        style={{ color: "#2C2E4A" }}
                      >
                        {point.title}
                      </h3>
                      <p
                        className="text-base leading-relaxed"
                        style={{ color: "#2C2E4A99" }}
                      >
                        {point.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bonus Section */}
        <div className="max-w-4xl mx-auto">
          <Card
            className="border-0 shadow-lg"
            style={{ backgroundColor: "#F551DE12" }}
          >
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6" style={{ color: "#F6C945" }} />
                <h3 className="text-2xl font-bold" style={{ color: "#2C2E4A" }}>
                  Exclusive Bonuses
                </h3>
                <Star className="w-6 h-6" style={{ color: "#F6C945" }} />
              </div>
              <p className="mb-6" style={{ color: "#2C2E4A" }}>
                Register today and get these valuable resources absolutely FREE!
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {bonuses.map((bonus, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg p-4"
                    style={{ backgroundColor: "#FFF9F2" }}
                  >
                    <Lightbulb className="w-5 h-5" style={{ color: "#F6C945" }} />
                    <span className="font-medium" style={{ color: "#2C2E4A" }}>
                      {bonus}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Badge
                  className="font-bold text-lg px-6 py-2 border-0"
                  style={{
                    backgroundColor: "#F6C945",
                    color: "#2C2E4A"
                  }}
                >
                  Total Value: ₹2,997 - Yours FREE!
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WhatYoullLearn;
