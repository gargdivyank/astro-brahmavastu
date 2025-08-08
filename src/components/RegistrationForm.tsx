import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, Mail, Phone, Briefcase, AlertCircle } from "lucide-react";
import axios from "axios";
import { BASE_URL } from "@/utils/config";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    profession: "",
    problem: ""
  });
  const { toast } = useToast();
  const navigate = useNavigate();



const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.fullName || !formData.email || !formData.phone) {
    toast({
      title: "Please fill required fields",
      description: "Name, email, and phone are required to register.",
      variant: "destructive"
    });
    return;
  }

  try {
    // Replace the URL below with your actual backend API endpoint!
    const payload = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      profession: formData.profession,
      problem: formData.problem
    };
    const response = await axios.post(`${BASE_URL}/api/v1/leads/add-and-send-otp`, payload);
    console.log("response:",response);

    if (response.data.success) {
      // toast({
      //   title: "Registration Successful! 🎉",
      //   description: "You'll receive the Zoom link via email soon.",
      // });
      navigate('/thankyou');
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        profession: "",
        problem: ""
      });
    } else {
      toast({
        title: "Registration Failed",
        description: response.data.message || "Something went wrong.",
        variant: "destructive"
      });
    }
  } catch (err) {
    toast({
      title: "Network or Server Error",
      description: "Could not submit registration. Please try again.",
      variant: "destructive"
    });
    console.error(err);
  }
};


  return (
    <div id="registration" className="relative py-16" style={{
      background: "linear-gradient(to bottom, #1A0823 0%, #50046E 100%)"
    }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Form Section */}
            <Card className="bg-white/95 backdrop-blur-sm border-cosmic-gold/30 shadow-cosmic-glow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-cosmic-purple-dark mb-2">
                  Unlock your Kundli's 100% potential
                </CardTitle>
                <p className="text-cosmic-purple">
                  Free registration – fill in your details to book your spot!
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-cosmic-purple-dark font-semibold">
                        Your Full Name *
                      </Label>
                      <div className="relative">
                        <UserPlus className="absolute left-3 top-3 h-4 w-4 text-cosmic-purple" />
                        <Input
                          id="fullName"
                          placeholder="Full Name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="pl-10 border-cosmic-purple/30 focus:border-cosmic-purple"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-cosmic-purple-dark font-semibold">
                        Your Email *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-cosmic-purple" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="pl-10 border-cosmic-purple/30 focus:border-cosmic-purple"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-cosmic-purple-dark font-semibold">
                      Phone *
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-cosmic-purple" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="pl-10 border-cosmic-purple/30 focus:border-cosmic-purple"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="profession" className="text-cosmic-purple-dark font-semibold">
                      Profession
                    </Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-3 h-4 w-4 text-cosmic-purple z-10" />
                      <Select value={formData.profession} onValueChange={(value) => setFormData({ ...formData, profession: value })}>
                        <SelectTrigger className="pl-10 border-cosmic-purple/30 focus:border-cosmic-purple">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="professional">Working Professional</SelectItem>
                          <SelectItem value="business">Business Owner</SelectItem>
                          <SelectItem value="homemaker">Homemaker</SelectItem>
                          <SelectItem value="retired">Retired</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="problem" className="text-cosmic-purple-dark font-semibold">
                      Problem you're facing?
                    </Label>
                    <div className="relative">
                      <AlertCircle className="absolute left-3 top-3 h-4 w-4 text-cosmic-purple z-10" />
                      <Select value={formData.problem} onValueChange={(value) => setFormData({ ...formData, problem: value })}>
                        <SelectTrigger className="pl-10 border-cosmic-purple/30 focus:border-cosmic-purple">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="career">Career Issues</SelectItem>
                          <SelectItem value="health">Health Problems</SelectItem>
                          <SelectItem value="relationships">Relationship Issues</SelectItem>
                          <SelectItem value="financial">Financial Problems</SelectItem>
                          <SelectItem value="family">Family Peace</SelectItem>
                          <SelectItem value="general">General Guidance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button type="submit" variant="cosmic" size="lg" className="w-full">
                    Reserve My Free Spot Now
                  </Button>

                  <p className="text-xs text-cosmic-purple text-center">
                    * Required fields. Your information is secure and will only be used for this webinar.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Video/Testimonial Section */}
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cosmic-gold/30">
                <h3 className="text-white text-xl font-bold mb-4 text-center">
                  Watch What You'll Learn
                </h3>
                <div className="aspect-video bg-cosmic-purple-dark rounded-lg overflow-hidden">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/jYpykdbVf4Q"
    title="Watch What You'll Learn - Scientific Kundali Analysis"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

              </div>

              <div className="bg-cosmic-gold/10 backdrop-blur-sm rounded-xl p-6 border border-cosmic-gold/30">
                <h4 className="text-cosmic-gold text-lg font-bold mb-3">Limited Seats!</h4>
                <p className="text-white mb-4">
                  Join 1000+ people who have already transformed their lives through scientific kundali analysis.
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-white">Registered:</span>
                  <span className="text-cosmic-gold font-bold">847/1000</span>
                </div>
                <div className="w-full bg-cosmic-purple-dark rounded-full h-2 mt-2">
                  <div className="bg-cosmic-gold h-2 rounded-full" style={{ width: '84.7%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;