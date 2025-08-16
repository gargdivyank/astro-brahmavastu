import React from "react";
import astro from "@/assets/astro_image.png";

const AboutSection: React.FC = () => {
  return (
    <section className="w-full  py-12 px-4 bg-[#2C2E4A]" >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left: Photo & Card */}
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
    <div className="mt-[-40px] bg-white rounded-xl shadow-lg px-8 py-6 w-[400px] text-center relative z-10">
      <h3 className="text-2xl font-bold text-neutral-800 mb-1">DR. GUNJAN AGRAWAL </h3>
      <p className="text-gray-700 text-lg font-medium">
        A LIFE COACH
      </p>
    </div>
  </div>
</div>

        {/* Right: About Content */}
        <div className="flex-1 mt-20 md:mt-0 md:w-1/2 flex flex-col justify-center">
          <h2 className="text-[#F6C945] text-3xl md:text-4xl font-bold mb-6">
            About Dr. Gunjan Agrawal
          </h2>
          <p className="text-white text-lg md:text-xl mb-10 leading-relaxed">
          Dr. Gunjan Agrawal is a renowned Life Coach and the visionary force behind Brahmavastu.g1, known for empowering thousands to transform their lives through the combined wisdom of Vastu, ancient sciences, and modern positive psychology.
          <br />
         
          With a passion for holistic well-being, Dr. Gunjan specializes in helping individuals realign their living and working spaces for greater harmony, success, and happiness. Her personalized guidance blends the principles of Vastu Shastra, scientific analysis, and actionable self-development strategies, making her approach both practical and spiritually enriching.
          </p>

          {/* Stats */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-[#2C2E4A] rounded-xl border border-[#CBB26A] px-6 py-6 text-center">
              <span className="block text-2xl md:text-3xl font-bold text-white mb-1">10+</span>
              <span className="text-[#F6C945] text-base md:text-lg font-medium">Countries Served</span>
            </div>
            <div className="flex-1 bg-[#2C2E4A] rounded-xl border border-[#CBB26A] px-6 py-6 text-center">
              <span className="block text-2xl md:text-3xl font-bold text-white mb-1">2 Lakh+</span>
              <span className="text-[#F6C945] text-base md:text-lg font-medium">Students</span>
            </div>
            <div className="flex-1 bg-[#2C2E4A] rounded-xl border border-[#CBB26A] px-6 py-6 text-center">
              <span className="block text-2xl md:text-3xl font-bold text-white mb-1">5 Lakh+</span>
              <span className="text-[#F6C945] text-base md:text-lg font-medium">Kundli’s Made</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
