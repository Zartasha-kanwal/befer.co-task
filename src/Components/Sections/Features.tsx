"use client";
import Image from "next/image";
import worker from "../Assets/Images/manage-worker.png";
import manage_worker from "../Assets/Images/manage-worker-optimized-1024w.png";
import msg_icon from "../Assets/Images/msg-icon.png";
import sms_marketing from "../Assets/Images/sms-marketing-optimized-1024w.png";
import quick_books from "../Assets/Images/quickbooks.png";
import quickbook_img from "../Assets/Images/Quick Books.png";
import gmb_icon from "../Assets/Images/gmbicon.svg";
import gmb_img from "../Assets/Images/GBB.png";
import downarrow from "../Assets/Images/downarrow.png";

const features = [
  {
    title: "Manage Workers",
    subtitle: "Workforce Management Made Simple.",
    desc: [
      "Assign and schedule orders instantly",
      "Monitor job progress in real-time",
      "View productivity insights and worker logs",
    ],
    illustration: manage_worker,
    bg: "#FFDAFC",
    iconBg: "#EE3BDF",
    iconSrc: worker,
  },
  {
    title: "AI Powered SMS Marketing",
    subtitle: "Reach more customers, close more jobs — automatically.",
    desc: [
      "Personalized follow-ups",
      "Smart timing based on customer response",
      "2x higher engagement than manual texting",
      "Auto-reminders & promo blasts",
    ],
    illustration: sms_marketing,
    bg: "#C2D6FF",
    iconBg: "#3A63B5",
    iconSrc: msg_icon,
  },
  {
    title: "Quick Books",
    subtitle: "Seamless Finances. Smarter Decisions.",
    desc: [
      "Real-time syncing of financial data",
      "Automatic invoice and expense tracking",
      "Reduce errors, save time, and simplify taxes",
    ],
    illustration: quickbook_img,
    bg: "#CDFDD8",
    iconBg: "#2CA01C",
    iconSrc: quick_books,
  },
  {
    title: "GMB Integration",
    subtitle: "Boost your visibility — Gain more Customers.",
    desc: [
      "Improved local search rankings",
      "Enhanced customer engagements",
      "Increase website traffic",
    ],
    illustration: gmb_img,
    bg: "#FFE8C2",
    iconBg: "#FFD289",
    iconSrc: gmb_icon,
  },
];
const Features = ({ id }: { id?: string }) => {

  const headingHeight = 96; 
  return (
    <section
      id="features"
      className="relative w-full flex flex-col items-center px-2 sm:px-4 md:px-0"
      style={{ minHeight: `calc(${features.length} * 520px)` }}
    >
      <div className="w-full flex flex-col items-center  top-0 z-20 pt-[130px]">
        <span className="mb-6 px-4 py-1 rounded-full bg-[#15B270] text-white text-sm font-semibold">
          Ad on Features
        </span>
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold text-center max-w-[700px] mx-auto text-balance">
          Get all the features in one place. Be amazed!
        </h2>
      </div>
      <ul
        className="cardsList"
        style={{ "--numcards": features.length } as React.CSSProperties}
      >
        {features.map((feature, i) => (
          <li
            key={feature.title}
            className="card"
            style={
              {
                ["--index" as any]: features.length + i,
                top: `${headingHeight + 32}px`,
              } as React.CSSProperties
            }
            >
            <div
              className="cardContent"
              style={{
                background: feature.bg,
                padding: 0,
                boxShadow: "0 4px 32px 0 rgba(0,0,0,0.10)",
              }}
            >
              <div
                className="flex flex-col justify-between h-full pt-10 px-6 py-6 md:py-16 md:px-14"
                style={{ minWidth: 0, flex: 1 }}
              >
                <div className="mb-8 flex flex-row items-start gap-4 md:flex-col md:gap-0">
                  {feature.iconSrc && (
                    <div
                      className="mb-0 md:mb-6 flex items-center justify-center w-16 h-16 rounded-xl flex-shrink-0"
                      style={{ background: feature.iconBg }}
                    >
                      <Image
                        src={feature.iconSrc}
                        alt={feature.title}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div className="flex-1 md:flex-none">
                    <div className="mb-1 text-xl md:text-3xl font-semibold text-[#181F2A]">
                      {feature.title}
                    </div>
                    <div className="text-sm md:text-xl text-[#181F2A] opacity-80">
                      {feature.subtitle}
                    </div>
                  </div>
                </div>
                <div>
                  <ul className="text-base md:text-lg text-[#181F2A] opacity-80 space-y-1 font-normal">
                    {feature.desc.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="flex items-center justify-center p-4 md:p-10"
                style={{ minWidth: 0 }}
              >
                <Image
                  src={feature.illustration}
                  alt={feature.title}
                  width={420}
                  height={420}
                  className="object-contain md:!w-[420px] md:!h-[420px] md:!max-h-[420px]"
                  style={{
                    width: "280px",
                    height: "280px",
                    maxWidth: "100%",
                    maxHeight: "280px",
                  }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Image
        src={downarrow}
        alt="Arrow"
        width={160}
        height={160}
        className="mx-auto mb-4 h-40 mt-[100px] sm:mt-0 select-none pointer-events-none"
      />
      <button className="inline-flex items-center bg-white text-blue-600 px-8 py-4 mb-[100px] rounded-full font-semibold text-lg shadow hover:bg-gray-100 transition mt-2 cursor-pointer">
        Start your Business
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
    </section>
  );
};

export default Features;
