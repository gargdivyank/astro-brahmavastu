import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Star, Sparkles } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <CheckCircle className="w-20 h-20 text-cosmic-gold animate-bounce" />
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-cosmic-purple animate-spin" />
              <Star className="absolute -bottom-2 -left-2 w-4 h-4 text-cosmic-gold animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-cosmic-purple-dark mb-6">
            Thank You! 🎉
          </h1>
          
          <div className="space-y-4 mb-8">
            <p className="text-2xl text-cosmic-purple-dark font-semibold">
              Your Registration has been Successful!
            </p>
            <p className="text-xl text-cosmic-purple-dark/80">
              for the Scientific Kundli Analysis Webinar
            </p>
            <div className="bg-cosmic-purple/10 rounded-xl p-6 border border-cosmic-purple/30 max-w-2xl mx-auto">
              <p className="text-cosmic-purple-dark font-medium text-lg">
                ✨ You'll receive the Zoom link via email soon ✨
              </p>
            </div>
          </div>
          
          <Button 
            onClick={() => navigate("/")} 
            variant="cosmic" 
            size="lg" 
            className="text-lg font-semibold py-4 px-8 hover:scale-105 transition-all duration-300"
          >
            Back to Home
          </Button>
          
          <p className="text-sm text-cosmic-purple-dark/70 mt-8">
            Check your email for further instructions
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou; 