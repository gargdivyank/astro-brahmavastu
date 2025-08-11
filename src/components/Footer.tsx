import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Gift, Zap } from "lucide-react";

const Footer = () => {
  return (
    <div className="relative bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Final CTA Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#2C2E4A" }}>
            Don't Miss This <span style={{ color: "#2C2E4A" }}>Life-Changing</span> Opportunity
          </h2>
          <p className="text-xl mb-8" style={{ color: "#5E3A9D" }}>
            Join Dr. Gunjan Agarwal and thousands of others in discovering the scientific secrets of kundali analysis
          </p>
        </div>

        {/* Urgency Indicators */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#FFF9F2] rounded-lg p-4 border-2" style={{ borderColor: "#F6C945" }}>
            <Clock className="w-6 h-6 mx-auto mb-2" style={{ color: "#2C2E4A" }} />
            <p className="font-semibold" style={{ color: "#2C2E4A" }}>Limited Time</p>
            <p className="text-sm" style={{ color: "#2C2E4A" }}>Free Access</p>
          </div>
          <div className="bg-[#FFF9F2] rounded-lg p-4 border-2" style={{ borderColor: "#F6C945" }}>
            <Users className="w-6 h-6 mx-auto mb-2" style={{ color: "#2C2E4A" }} />
            <p className="font-semibold" style={{ color: "#2C2E4A" }}>847+ Registered</p>
            <p className="text-sm" style={{ color: "#2C2E4A" }}>Join the Community</p>
          </div>
          <div className="bg-[#FFF9F2] rounded-lg p-4 border-2" style={{ borderColor: "#F6C945" }}>
            <Gift className="w-6 h-6 mx-auto mb-2" style={{ color: "#2C2E4A" }} />
            <p className="font-semibold" style={{ color: "#2C2E4A" }}>₹2,997 Worth</p>
            <p className="text-sm" style={{ color: "#2C2E4A" }}>Free Bonuses</p>
          </div>
          <div className="bg-[#FFF9F2] rounded-lg p-4 border-2" style={{ borderColor: "#F6C945" }}>
            <Zap className="w-6 h-6 mx-auto mb-2" style={{ color: "#2C2E4A" }} />
            <p className="font-semibold" style={{ color: "#2C2E4A" }}>Instant Access</p>
            <p className="text-sm" style={{ color: "#2C2E4A" }}>Start Today</p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mb-8">
          <Button
            size="xl"
            className="mb-4 font-bold text-lg px-12 py-4 rounded-lg"
            style={{
              backgroundColor: "#F6C945",
              color: "#2C2E4A",
              boxShadow: "0 8px 24px -8px #F6C94566"
            }}
            onClick={() => {
              window.location.href = "/PaymentPage";
            }}
          >
            SECURE MY SPOT NOW
          </Button>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge
              className="text-white font-semibold"
              style={{ backgroundColor: "#3B82F6", color: "#fff" }}
            >
              ✓ 100% Free
            </Badge>
            <Badge className="bg-green-600 text-white font-semibold">
              ✓ Instant Registration
            </Badge>
            <Badge className="bg-[#E4D9F5] text-[#2C2E4A] font-semibold">
              ✓ Live Session
            </Badge>
          </div>
        </div>

        {/* Event Reminder */}
        <div className="bg-[#F6C94522] rounded-xl p-6 border-2 mb-8" style={{ borderColor: "#F6C945" }}>
          <h3 className="text-lg font-bold mb-2" style={{ color: "#2C2E4A" }}>🗓️ Mark Your Calendar</h3>
          <p className="text-lg font-semibold" style={{ color: "#2C2E4A" }}>
            <strong>Thursday, July 31st, 2025 | 6:00 PM - 8:00 PM IST</strong>
          </p>
          <p className="text-sm mt-2" style={{ color: "#2C2E4A" }}>
            Zoom link will be sent to your registered email 1 hour before the session
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
