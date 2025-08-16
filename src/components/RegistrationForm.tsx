import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Users, TrendingUp, Award, Calendar, Clock, CheckCircle } from "lucide-react";

const RegistrationForm = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      profession: "Software Engineer",
      content:
        "After following the kundali analysis, my career took a complete U-turn. I got promoted within 3 months!",
      rating: 5,
      problem: "Career Issues",
    },
    {
      name: "Rajesh Kumar",
      profession: "Business Owner",
      content:
        "The financial guidance based on my kundali helped me make the right investments. My business grew 200%!",
      rating: 5,
      problem: "Financial Problems",
    },
    {
      name: "Meera Patel",
      profession: "Homemaker",
      content:
        "My family's peace improved dramatically after implementing the suggested remedies. Highly recommended!",
      rating: 5,
      problem: "Family Peace",
    },
  ];

  const successMetrics = [
    { icon: Users, label: "Happy Clients", value: "10,000+" },
    { icon: TrendingUp, label: "Success Rate", value: "94%" },
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: CheckCircle, label: "Problems Solved", value: "50,000+" },
  ];

  return (
    <div
      id="registration"
      className="relative py-16"
      style={{
        // soft lavender wash behind the section
        background:
          "linear-gradient(to bottom, #2C2E4A 100%, #E4D9F5 60%, #FFFFFF 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: "#F6C945" }}>
              Real Success Stories
            </h2>
            <p className="text-xl mb-8" style={{ color: "#FFFFFF" }}>
              See how thousands have transformed their lives through scientific kundali analysis
            </p>
          </div>

          {/* Success Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {successMetrics.map((m, i) => (
              <Card
                key={i}
                className="text-center border"
                style={{ backgroundColor: "#E4D9F5", borderColor: "#F6C94533" }}
              >
                <CardContent className="p-6">
                  <m.icon className="h-8 w-8 mx-auto mb-3" style={{ color: "#F6C945" }} />
                  <div className="text-2xl font-bold mb-1" style={{ color: "#2C2E4A" }}>
                    {m.value}
                  </div>
                  <div className="text-sm" style={{ color: "#5E3A9D" }}>
                    {m.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {testimonials.map((t, i) => (
              <Card
                key={i}
                className="shadow-sm border"
                style={{ backgroundColor: "#FFFFFF", borderColor: "#E4D9F5" }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-6 w-6 mr-2" style={{ color: "#5E3A9D" }} />
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {[...Array(t.rating)].map((_, idx) => (
                          <Star key={idx} className="h-4 w-4" style={{ color: "#F6C945" }} fill="#F6C945" />
                        ))}
                      </div>
                      <Badge
                        variant="secondary"
                        className="border-0"
                        style={{ backgroundColor: "#F551DE22", color: "#F551DE" }}
                      >
                        {t.problem}
                      </Badge>
                    </div>
                  </div>

                  <p className="italic mb-4" style={{ color: "#2C2E4A" }}>
                    “{t.content}”
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold" style={{ color: "#2C2E4A" }}>
                        {t.name}
                      </div>
                      <div className="text-sm" style={{ color: "#5E3A9D" }}>
                        {t.profession}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <Card
            className="border-0"
            style={{
              background: "linear-gradient(90deg, #F551DE 0%, #F6C945 100%)",
              color: "#FFFFFF",
            }}
          >
            <CardContent className="p-8 text-center">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Life?</h3>
                  <p className="text-lg mb-6">
                    Join our next webinar and discover how scientific kundali analysis can unlock your potential
                  </p>
                  <div className="flex items-center justify-center gap-6 text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Next Session: Aug 19, 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>6:00–8:00 PM IST</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div
                    className="rounded-lg p-6 mb-4"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    <div className="text-3xl font-bold mb-2">Join Webinar</div>
                    <div className="text-sm opacity-90">Limited Seats Available</div>
                  </div>

                  <Button
                    size="lg"
                    className="font-semibold"
                    style={{
                      backgroundColor: "#F6C945",
                      color: "#2C2E4A",
                    }}
                    onClick={() => (window.location.href = "/PaymentPage")}
                    onMouseEnter={(e) => {
                      (e.currentTarget.style.backgroundColor = "#5E3A9D"),
                        (e.currentTarget.style.color = "#FFFFFF");
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget.style.backgroundColor = "#F6C945"),
                        (e.currentTarget.style.color = "#2C2E4A");
                    }}
                  >
                    Reserve Your Spot <span className="ml-2 text-base font-semibold">₹1 /-</span>
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
