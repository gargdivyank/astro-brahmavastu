import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const faqs = [
  {
    question: "I already have a Kundli, why should I attend this webinar?",
    answer:
      "This webinar will help you decode your Kundli in a scientific, actionable way, regardless of whether you already have a Kundli. You’ll learn how to use your chart for practical life improvements."
  },
  {
    question: "Will I receive a Kundli in this webinar?",
    answer:
      "You will receive guidance on how to analyze your Kundli. If you do not have one, steps to create one online will also be shared."
  },
  {
    question: "I don’t know anything about astrology. Can I still attend?",
    answer:
      "Absolutely! The webinar is designed for all levels. No prior astrology knowledge is required."
  },
  {
    question: "I have fear due to my Kundli, dosha, shani, kaal sarp etc. Will this help?",
    answer:
      "Yes, this session aims to remove fear and confusion around such topics and empower you with clarity and peace of mind."
  },
  {
    question: "What language will the webinar be in?",
    answer:
      "The webinar will primarily be in Hindi, with key points explained in simple language for everyone to understand."
  },
  {
    question: "What if I miss the live webinar? Will there be a recording?",
    answer:
      "Yes, all registered participants will receive a recording after the session."
  },
  {
    question: "How long is the session? Will it be very technical?",
    answer:
      "The session will be about 90–120 minutes. It’s designed to be practical, simple and jargon-free."
  },
  {
    question: "Who is Dr. Gunjan Agrawal? Why should I trust her?",
    answer:
      "Dr. Gunjan Agrawal is India’s most trusted Life Coach, with 10+ years of legacy and over 5 lakh lives impacted."
  },
  {
    question: "I’ve taken reports from Dr. Gunjan Agrawal before. Is this still useful?",
    answer:
      "Yes! This session is about learning how to use your Kundli in daily life, not just reports or predictions."
  },
  {
    question: "How can I join?",
    answer:
      "Simply click on the registration link provided above and follow the steps to secure your spot."
  }
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      className="w-full min-h-[90vh] py-16 px-4 flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(to bottom, #2C2E4A 100%, #5E3A9D 0%)"
      }}
    >
      <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-10 font-serif">
        Frequently Asked Questions (FAQ)
      </h3>
      <div className="w-full max-w-2xl space-y-2">
        {faqs.map((faq, idx) => (
          <div
            key={faq.question}
            className="rounded-md bg-[#5E3A9D] hover:bg-[#5d2680] transition-all duration-200"
          >
            <button
              onClick={() => handleToggle(idx)}
              className="flex w-full items-center justify-between px-5 py-3 font-medium text-white text-left text-base focus:outline-none"
            >
              <span className="text-base">{faq.question}</span>
              <ChevronRight
                className={`w-5 h-5 transition-transform duration-200 ${openIndex === idx ? "rotate-90" : ""}`}
              />
            </button>
            <div
              className={`px-5 pb-3 text-base transition-all duration-200 ${
                openIndex === idx
                  ? "max-h-32 opacity-100 bg-white text-[#42195c]"
                  : "max-h-0 opacity-0 overflow-hidden"
              } ${idx === faqs.length - 1 ? "mb-24 md:mb-32" : ""}`}
              style={{
                borderBottomLeftRadius: openIndex === idx ? "0.375rem" : undefined,
                borderBottomRightRadius: openIndex === idx ? "0.375rem" : undefined,
              }}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
