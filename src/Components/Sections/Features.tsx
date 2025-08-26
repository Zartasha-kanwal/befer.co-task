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


const Features = () => {
  return (
    <>
      <section className=" relative w-full flex flex-col items-center px-2 sm:px-4 lg:px-16">
        <div className=" cards-heading w-full flex flex-col items-center  top-0 z-20 pt-[130px]">
          <span className="mb-6 px-4 py-1 rounded-full bg-[#15B270] text-white text-sm font-semibold">
            Ad on Features
          </span>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold text-center max-w-[700px] mx-auto text-balance">
            Get all the features in one place. Be amazed!
          </h2>
        </div>

        <ul className=" cards-wrapper">
          <li className="card card-1">
            <div className="bg-[#FFDAFC] p-0 shadow-[0_4px_32px_0_rgba(0,0,0,0.10)] grid lg:grid-cols-2 grid-cols-1 mt-[128px] rounded-4xl ">
              <div className="flex flex-col justify-between h-full pt-10 px-6 py-6 md:py-16 md:px-14">
                <div className="mb-8 flex flex-row items-start gap-4 md:flex-col md:gap-0">
                  <div className="mb-0 md:mb-6 flex items-center justify-center w-16 h-16 rounded-xl flex-shrink-0 bg-[#EE3BDF]">
                    <Image
                      src={worker}
                      alt="manage-worker"
                      height={32}
                      width={32}
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>

                  <div className="flex-1 md:flex-none">
                    <h2 className="mb-1 text-xl md:text-3xl font-semibold text-[#181F2A]">
                      Manage Workers
                    </h2>
                    <h4 className="text-sm md:text-xl text-[#181F2A] opacity-80">
                      Workforce Management Made Simple.
                    </h4>
                  </div>
                </div>

                <div>
                  <ul className="text-base md:text-lg text-[#181F2A] opacity-80 space-y-1 font-normal">
                    <li>Assign and schedule orders instantly</li>
                    <li>Monitor job progress in real-time</li>
                    <li>View productivity insights and worker logs</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-center p-4 md:p-10">
                <Image
                  src={manage_worker}
                  alt="manage-worker"
                  className="object-contain md:!w-[420px] md:!h-[420px] md:!max-h-[420px]"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </li>

          <li className="card card-2 ">
            <div className="bg-[#C2D6FF] p-0 shadow-[0_4px_32px_0_rgba(0,0,0,0.10)] grid lg:grid-cols-2 grid-cols-1 rounded-4xl mt-4">
              <div className="flex flex-col justify-between h-full pt-10 px-6 py-6 md:py-16 md:px-14">
                <div className="mb-8 flex flex-row items-start gap-4 md:flex-col md:gap-0">
                  <div className="mb-0 md:mb-6 flex items-center justify-center w-16 h-16 rounded-xl flex-shrink-0 bg-[#3A63B5]">
                    <Image
                      src={msg_icon}
                      alt="manage-worker"
                      height={32}
                      width={32}
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>

                  <div className="flex-1 md:flex-none">
                    <h2 className="mb-1 text-xl md:text-3xl font-semibold text-[#181F2A]">
                      AI Powered SMS Marketing
                    </h2>
                    <h4 className="text-sm md:text-xl text-[#181F2A] opacity-80">
                      Reach more customers, close more jobs — automatically.
                    </h4>
                  </div>
                </div>

                <div>
                  <ul className="text-base md:text-lg text-[#181F2A] opacity-80 space-y-1 font-normal">
                    <li>Personalized follow-ups</li>
                    <li>Smart timing based on customer response</li>
                    <li>2x higher engagement than manual texting</li>
                    <li>Auto-reminders & promo blasts</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-center p-4 md:p-10">
                <Image
                  src={sms_marketing}
                  alt="manage-worker"
                  className="object-contain md:!w-[420px] md:!h-[420px] md:!max-h-[420px]"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </li>

          <li className="card card-3 ">
            <div className="mt-4 bg-[#CDFDD8] p-0 shadow-[0_4px_32px_0_rgba(0,0,0,0.10)] grid lg:grid-cols-2 grid-cols-1  rounded-4xl">
              <div className="flex flex-col justify-between h-full pt-10 px-6 py-6 md:py-16 md:px-14">
                <div className="mb-8 flex flex-row items-start gap-4 md:flex-col md:gap-0">
                  <div className="mb-0 md:mb-6 flex items-center justify-center w-16 h-16 rounded-xl flex-shrink-0 bg-[#2CA01C]">
                    <Image
                      src={quick_books}
                      alt="manage-worker"
                      height={32}
                      width={32}
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>

                  <div className="flex-1 md:flex-none">
                    <h2 className="mb-1 text-xl md:text-3xl font-semibold text-[#181F2A]">
                      Quick Books
                    </h2>
                    <h4 className="text-sm md:text-xl text-[#181F2A] opacity-80">
                      Seamless Finances. Smarter Decisions.
                    </h4>
                  </div>
                </div>

                <div>
                  <ul className="text-base md:text-lg text-[#181F2A] opacity-80 space-y-1 font-normal">
                    <li>Real-time syncing of financial data</li>
                    <li>Automatic invoice and expense tracking</li>
                    <li>Reduce errors, save time, and simplify taxes</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-center p-4 md:p-10">
                <Image
                  src={quickbook_img}
                  alt="manage-worker"
                  className="object-contain md:!w-[420px] md:!h-[420px] md:!max-h-[420px]"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </li>

          <li className="card card-4 ">
            <div className="mt-4 bg-[#FFE8C2] p-0 shadow-[0_4px_32px_0_rgba(0,0,0,0.10)] grid lg:grid-cols-2 grid-cols-1  rounded-4xl">
              <div className="flex flex-col justify-between h-full pt-10 px-6 py-6 md:py-16 md:px-14">
                <div className="mb-8 flex flex-row items-start gap-4 md:flex-col md:gap-0">
                  <div className="mb-0 md:mb-6 flex items-center justify-center w-16 h-16 rounded-xl flex-shrink-0 bg-[#FFD289]">
                    <Image
                      src={gmb_icon}
                      alt="manage-worker"
                      style={{ width: "auto", height: "auto" }}
                    />
                  </div>

                  <div className="flex-1 md:flex-none">
                    <h2 className="mb-1 text-xl md:text-3xl font-semibold text-[#181F2A]">
                      GMB Integration
                    </h2>
                    <h4 className="text-sm md:text-xl text-[#181F2A] opacity-80">
                      Boost your visibility — Gain more Customers.
                    </h4>
                  </div>
                </div>

                <div>
                  <ul className="text-base md:text-lg text-[#181F2A] opacity-80 space-y-1 font-normal">
                    <li>Improved local search rankings</li>
                    <li>Enhanced customer engagements</li>
                    <li>Increase website traffic</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-center p-4 md:p-10">
                <Image
                  src={gmb_img}
                  alt="manage-worker"
                  className="object-contain md:!w-[420px] md:!h-[420px] md:!max-h-[420px]"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </li>
        </ul>

        <Image
          src={downarrow}
          alt="downarrow"
          className="mx-auto mb-4 h-40  sm:mt-0 select-none pointer-events-none "
          style={{ width: "auto", height: "auto" }}
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
    </>
  );
};

export default Features;
