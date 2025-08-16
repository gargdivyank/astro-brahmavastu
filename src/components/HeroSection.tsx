import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video, MapPin, Star, Hourglass } from "lucide-react";
import logo from "@/assets/logo.jpeg";
import astro from "@/assets/astro_image.png";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-[#FFFFFF] overflow-hidden">
      {/* Animated background elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-cosmic-gold/20 rounded-full animate-cosmic-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cosmic-gold/30 rounded-full animate-cosmic-float delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-cosmic-gold/25 rounded-full animate-cosmic-float delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-cosmic-gold/15 rounded-full animate-cosmic-float delay-500"></div>
      </div> */}

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Brand Logo */}
            <div className="flex items-center justify-center lg:justify-start mb-8">
              <img
                src={logo}
                alt="Brahmavastu Logo"
                className="w-13 h-12 mr-2"
                style={{ objectFit: "contain" }}
              />
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-3 ">
                <h2 className="text-[#2C2E4A] font-bold text-lg">@BRAHMAVASTU.G1</h2>
              </div>
            </div>

            {/* Main Headlines */}
            <div className="mb-8">
              {/* <h3 className="text-cosmic-gold text-xl lg:text-2xl font-semibold mb-2 animate-cosmic-pulse">
                ONLINE MASTER CLASS
              </h3> */}
              <h1 className="text-[#2C2E4A] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Live Webinar:{" "}
                <span className="relative">
                  {/* <span className="text-cosmic-gold">🪐</span> */}
                  <br />
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                    Scientific Kundli Analysis for Life-Changing Results
                  </span>
                </span>
              </h1>
            </div>

            {/* Problem Statement */}
            <div className="mb-8 space-y-4">
              <div className="flex items-start gap-3">
                {/* <div className="w-3 h-3 bg-[#5E3A9D] rounded-full mt-2 flex-shrink-0"></div> */}
                <p className="text-[#5E3A9D] text-lg lg:text-2xl font-bold">
                  Join this 2-hour live session
                  {" "}and discover how{" "}
                  <span className="text-[#5E3A9D] font-bold">
                    Scientific Kundli decoding
                  </span>{" "}
                  can unlock success in your
                  <br />
                  <br />
                  <span className="text-green-700 font-bold">💰 Finances</span>{" "}
                  |{" "}
                  <span className="text-pink-600 font-bold">❤️ Relationships</span>{" "}
                  |{" "}
                  <span className="text-blue-700 font-bold">🧘‍♀️ Health</span>
                </p>

              </div>
              <div className="flex items-start gap-3">
                {/* <div className="w-3 h-3 bg-[#5E3A9D] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#5E3A9D] text-lg lg:text-xl">
                  Your manifestation starts at surrounding. Let's align it.
                </p> */}
              </div>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-5 mb-8">
              {/* Date Card */}
              <div className="min-w-0 bg-[#E4D9F5] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:gap-4 min-h-[84px]">
  {/* Icon */}
  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 bg-[#fff] rounded-full flex items-center justify-center shadow-sm mb-2 sm:mb-0 mx-auto sm:mx-0">
    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C2E4A]" />
  </div>

  {/* Text Content */}
  <div className="flex flex-col text-center sm:text-left">
    {/* Heading (hidden on mobile) */}
    <span className="hidden sm:block text-[#2C2E4A] text-base font-bold leading-tight">
      Date
    </span>

    {/* Value */}
    <span className="text-[#2C2E4A] text-sm sm:text-lg font-semibold">
      19th Aug, 2025
    </span>
  </div>
</div>




              {/* Time Card */}
              <div className="min-w-0 bg-[#E4D9F5] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:gap-4 min-h-[84px]">
  {/* Icon */}
  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 bg-[#fff] rounded-full flex items-center justify-center shadow-sm mb-2 sm:mb-0 mx-auto sm:mx-0">
    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#2C2E4A]" />
  </div>

  {/* Text Content */}
  <div className="flex flex-col text-center sm:text-left">
    {/* Heading (hidden on mobile) */}
    <span className="hidden sm:block text-[#2C2E4A] text-base font-bold leading-tight">
      Time
    </span>

    {/* Value */}
    <span className="text-[#2C2E4A] text-sm sm:text-lg font-semibold">
      6:00 - 8:00 PM
    </span>
  </div>
</div>



              {/* Platform Card - visible only on sm and above */}
              <div className="hidden sm:flex bg-[#E4D9F5] rounded-2xl p-5 items-center gap-4 min-h-[90px]">
                <div className="flex-shrink-0 w-11 h-11 bg-[#fff] rounded-full flex items-center justify-center shadow-sm">
                  <Hourglass className="w-6 h-6 text-[#2C2E4A]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#2C2E4A] text-base font-bold leading-tight">Platform</span>
                  <span className="text-[#2C2E4A] text-lg font-semibold mt-1">Zoom Meeting</span>
                </div>
              </div>

              {/* Price Card - visible only on sm and above */}
              <div className="hidden sm:flex bg-[#E4D9F5] rounded-2xl p-5 items-center gap-4 min-h-[90px]">
                <div className="flex-shrink-0 w-11 h-11 bg-[#fff] rounded-full flex items-center justify-center shadow-sm">
                  <Star className="w-6 h-6 text-[#2C2E4A]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[#2C2E4A] text-base font-bold leading-tight">Price</span>
                  <span className="text-[#2C2E4A] text-lg font-semibold mt-1 flex flex-row items-center gap-2">
                    <span className="text-green-500 text-base">₹1</span>
                  </span>
                </div>
              </div>
            </div>




            {/* CTA Button */}
            <div className="mb-6 hidden sm:block">
              <Button
                variant="default"
                size="xl"
                className="w-full lg:w-auto animate-cosmic-glow bg-[#5E3A9D] text-white"
                onClick={() => {
                  window.location.href = "/PaymentPage";
                }}
              >
                JOIN US <span className="ml-2 text-base font-semibold"> ₹1 /-</span>
              </Button>
            </div>


            {/* Registration Note
            <div className="flex items-center justify-center lg:justify-start gap-2 text-cosmic-gold">
              <MapPin className="w-4 h-4" />
              <p className="text-sm">Tap the link in bio to register!</p>
            </div> */}
          </div>

          {/* Right Content - Expert Photo */}
          {/* Right Content - Astro Arun Pandit Design */}
          <div className="flex-1 flex flex-col items-center justify-center">
            {/* Circular Image with Gold Border */}
            <div className="relative flex flex-col items-center">
              <div
                className="w-96 h-96 rounded-full border-8 border-[#CBB26A] bg-[#14192F] flex items-center justify-center overflow-hidden shadow-xl"
                style={{ boxShadow: "0 0 0 12px #14192F, 0 0 0 18px #CBB26A" }}
              >
                <img
                  src={astro}
                  alt="Astro Arun Pandit"
                  className="w-full h-full object-cover rounded-full"
                  style={{ objectPosition: "45% 5%" }}
                />
              </div>
              {/* Text Card Below the Image */}
              <div
                className="mt-[-40px] bg-white rounded-xl shadow-lg px-8 py-6 w-[400px] text-center relative z-10 border-2"
                style={{
                  borderColor: "#F6C945", // soft gold
                  boxShadow: "0 4px 32px 0 #F6C94522, 0 1.5px 16px 0 #2C2E4A11"
                }}
              >
                <h3 className="text-2xl font-bold text-[#2C2E4A] mb-1 tracking-wide">DR. GUNJAN AGRAWAL</h3>
                <p className="text-[#5E3A9D] text-lg font-medium">A LIFE COACH</p>
              </div>




            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;