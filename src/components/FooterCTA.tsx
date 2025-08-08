import React from "react";

const FooterCTA: React.FC = () => (
  <footer className="
    fixed bottom-0 left-0 w-full 
    z-50 bg-[#261B3A] 
    flex flex-col md:flex-row items-center 
    justify-between px-4 md:px-16 py-4
    shadow-[0_-2px_16px_0_rgba(0,0,0,0.08)]
  ">
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
      <div className="flex flex-col items-start ">
        <span className="text-2xl md:text-3xl font-bold text-white mr-2">
          Free
          <span className="text-sm md:text-base font-normal text-white/80 ml-2 align-middle">(Limited Seats)</span>
        </span>
        <span className="italic text-white/90 text-base md:text-lg mt-1">
          Join Brahmavastu.g1 webinar
        </span>
      </div>
      {/* <span className="text-white/70 md:ml-2">(Limited Seats)</span> */}
    </div>
    <button
      className="
        mt-4 md:mt-0
        bg-[#FFC82B] hover:bg-[#f1b800] 
        text-[#261B3A] text-lg md:text-xl font-bold 
        px-10 py-3 md:py-2 rounded-lg
        transition-all duration-200 shadow-lg
        focus:outline-none focus:ring-2 focus:ring-[#FFC82B]
      "
      onClick={() => {
        const target = document.getElementById('registration');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      Reserve My Free Spot Now
    </button>
  </footer>
);

export default FooterCTA;
