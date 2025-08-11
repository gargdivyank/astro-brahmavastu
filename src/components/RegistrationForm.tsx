import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Users, TrendingUp, Award, Calendar, Clock, CheckCircle } from "lucide-react";

const RegistrationForm = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      profession: "Software Engineer",
      content: "After following the kundali analysis, my career took a complete U-turn. I got promoted within 3 months!",
      rating: 5,
      problem: "Career Issues"
    },
    {
      name: "Rajesh Kumar",
      profession: "Business Owner",
      content: "The financial guidance based on my kundali helped me make the right investments. My business grew 200%!",
      rating: 5,
      problem: "Financial Problems"
    },
    {
      name: "Meera Patel",
      profession: "Homemaker",
      content: "My family's peace improved dramatically after implementing the suggested remedies. Highly recommended!",
      rating: 5,
      problem: "Family Peace"
    }
  ];

  const successMetrics = [
    { icon: Users, label: "Happy Clients", value: "10,000+" },
    { icon: TrendingUp, label: "Success Rate", value: "94%" },
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: CheckCircle, label: "Problems Solved", value: "50,000+" }
  ];

  return (
    <div id="registration" className="relative py-16" style={{
      background: "linear-gradient(to bottom, #1A0823 0%, #50046E 100%)"
    }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Real Success Stories
            </h2>
            <p className="text-xl text-cosmic-gold mb-8">
              See how thousands have transformed their lives through scientific kundali analysis
            </p>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-cosmic-gold/30 text-center">
                <CardContent className="p-6">
                  <metric.icon className="h-8 w-8 text-cosmic-gold mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-cosmic-gold">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/95 backdrop-blur-sm border-cosmic-gold/30 shadow-cosmic-glow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-6 w-6 text-cosmic-purple mr-2" />
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-cosmic-gold fill-current" />
                        ))}
                      </div>
                      <Badge variant="secondary" className="bg-cosmic-purple/20 text-cosmic-purple">
                        {testimonial.problem}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-cosmic-purple-dark mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-cosmic-purple-dark">{testimonial.name}</div>
                      <div className="text-sm text-cosmic-purple">{testimonial.profession}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action Section */}
          <Card className="bg-gradient-to-r from-cosmic-purple to-cosmic-gold text-white border-0 shadow-cosmic-glow">
            <CardContent className="p-8 text-center">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Transform Your Life?
                  </h3>
                  <p className="text-lg mb-6">
                    Join our next webinar and discover how scientific kundali analysis can unlock your potential
                  </p>
                  <div className="flex items-center justify-center space-x-6 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Next Session: Aug 19, 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>6:00-8:00 PM IST</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-4">
                    <div className="text-3xl font-bold mb-2">Join Webinar</div>
                    <div className="text-sm opacity-90">Limited Seats Available</div>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-white text-cosmic-purple hover:bg-cosmic-gold hover:text-white"
                    onClick={() => {
                      window.location.href = "/PaymentPage";
                    }}
                  >
                    Reserve Your Spot <span className="ml-2 text-base font-semibold"> ₹1 /-</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;