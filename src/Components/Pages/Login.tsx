"use client";
import { useEffect, useRef, useState } from "react";
import logo from "../Assets/Images/Logo.png";
import Google from "../Assets/Images/Google.svg";
import US_flag from "../Assets/Images/united-states-flag-icon.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Button from "../Button";

const carousel = [
  {
    heading: "Manage Orders, Invoices, and Services Effortlessly.",
    paragraph:
      "Streamline your entire workflow in one place. Track orders, manage invoices, and keep services organized without the busywork.",
  },
  {
    heading: "Grow Faster with Automation and Smart Tools.",
    paragraph:
      "Automate bookings, payments, and customer communication so you can focus on delivering great service and scaling your business.",
  },
  {
    heading: "Befer: Boost Your Service Business Online.",
    paragraph:
      "The fastest way to get up-and-running with Befer, our self-service cloud dashboard allows you to easily create and manage all of your services, orders and invoices.",
  },
];

const Login = () => {
  const [activeTab, setActiveTab] = useState<"email" | "phone">("email");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current && scrollRef.current) {
        const container = containerRef.current;
        const scrollable = scrollRef.current;

        const containerHeight = container.clientHeight;
        const scrollTopOffset = scrollable.offsetTop;
        const footerHeight = 60;
        const availableHeight =
          containerHeight - scrollTopOffset - footerHeight;

        setScrollHeight(availableHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const handleClick = () => {
    router.push("/#home"); // navigate to home
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); 
    if (value.length > 10) value = value.slice(0, 10); 
    setPhone(value);
  };

  const handleSendVerification = () => {
    console.log("Phone number submitted:", phone);
    setPhone(""); // clear input
  };

  const handleSignIn = () => {
    // Email validation
    if (!email.includes("@")) {
      setEmailError("Email must contain '@'");
    } else {
      setEmailError("");

      // Clear
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <section
        ref={containerRef}
        className="flex flex-row p-7 h-screen justify-center lg:justify-normal gap-[70px]"
      >
        <div className="relative bg-[#FFF] py-[24px] px-[28px] w-full rounded-3xl flex items-start justify-center overflow-hidden">
          <div className="pt-[40px] flex flex-col items-center justify-center max-w-[550px] w-full ">
            <div className="flex flex-row items-center justify-between pb-[8px]  w-full">
              <div
                className="py-[8px]  px-[12px] cursor-pointer rounded-3xl border border-[#e5e8eb]"
                onClick={handleClick}
              >
                ← Back to home
              </div>

              <div>
                <Image src={logo} alt="logo" height={28} />
              </div>
            </div>

            <div className="mt-[12px] mb-[16px]  w-full">
              <h2 className="mb-[4px] text-[30px] font-[700] text-start font-sans">
                Sign In
              </h2>

              <span className="text-[#6B7280] font-[16px] font-sans">
                Welcome back! Sign in to manage your services, orders, and
                invoices.
              </span>
            </div>

            <div
              ref={scrollRef}
              className="w-full flex flex-col gap-[16px] mt-[12px] pr-[4px] overflow-y-auto"
              style={{ maxHeight: scrollHeight }}
            >
              <div className="mb-[20px] p-[4px] bg-[#0058FF] rounded-[30px] flex w-full">
                <button
                  onClick={() => setActiveTab("email")}
                  className={`py-[8px] px-[26px] rounded-[20px] transition-colors cursor-pointer text-[14px] w-full ${
                    activeTab === "email"
                      ? "bg-white text-[#0058FF]"
                      : "bg-[#0058FF] text-white"
                  }`}
                >
                  via email
                </button>
                <button
                  onClick={() => setActiveTab("phone")}
                  className={`py-[8px] px-[26px] rounded-[20px] transition-colors cursor-pointer text-[14px] w-full ${
                    activeTab === "phone"
                      ? "bg-white text-[#0058FF]"
                      : "bg-[#0058FF] text-white"
                  }`}
                >
                  via phone
                </button>
              </div>

              {activeTab === "email" ? (
                <div className="flex flex-col gap-[16px] ">
                  {" "}
                  <p className="text-[14px] text-[#1F1F1F] font-sans ">
                    The fastest way to get up-and-running with Befer, our
                    self-service cloud dashboard allows you to easily create and
                    manage all your services, orders, and invoices.
                  </p>
                  <div>
                    <div className="pb-[8px]">
                      <label className="text-[14px] font-bold">Email</label>
                    </div>
                    <div className="py-[4px] pl-[11px] pr-[40px] border border-[#e5e8eb] rounded-[6px] h-[40px]">
                      <input
                        type="email"
                        placeholder="olivia@befer.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-[14px] placeholder:text-[#cbd1d7] text-ellipsis outline-none w-full"
                      />
                    </div>

                    {emailError && (
                      <p className="text-red-500 text-[12px] mt-[4px]">
                        {emailError}
                      </p>
                    )}

                    <div className="pb-[8px]">
                      <label className="text-[14px] font-bold">Password</label>
                    </div>

                    <div className="py-[4px] px-[11px] flex gap-2 items-center justify-between border border-[#e5e8eb] rounded-[6px] h-[40px]">
                      <input
                        placeholder="Enter Your password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="text-[14px] text-ellipsis outline-none w-full placeholder:text-[#cbd1d7]"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="cursor-pointer text-gray-500"
                      >
                        {showPassword ? (
                          //  Eye-off SVG
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
                            className="lucide lucide-eye-off"
                          >
                            <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path>
                            <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path>
                            <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path>
                            <path d="m2 2 20 20"></path>
                          </svg>
                        ) : (
                          //  Eye SVG
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
                            className="lucide lucide-eye"
                          >
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        )}
                      </button>
                    </div>

                    <h5 className="mb-[32px] mt-[10px] text-[14px] text-end text-[#0066FF] font-[600] cursor-pointer font-sans">
                      Forgot Password?
                    </h5>

                    <div className="flex flex-col gap-[20px]">
                      <Button text="Sign in" onClick={handleSignIn} />
                      <div className="flex items-center ">
                        <span className="flex-grow border-t border-gray-300"></span>
                        <span className="mx-4 text-black font-medium text-[12px] font-sans">
                          OR
                        </span>
                        <span className="flex-grow border-t border-gray-300"></span>
                      </div>

                      <button className="w-full p-[8px] text-[16px] font-[600] font-sans rounded-[99px] flex items-center justify-center gap-2 border  border-[#ccc] hover:border-[#0058FF] hover:text-[#0058FF] cursor-pointer">
                        <Image
                          src={Google}
                          alt="Google-icon"
                          className="h-[24px] w-[24px]"
                        />
                        Continue with Google
                      </button>

                      <p className="text-[12px] text-[#74808B] mt-4 mb-12 text-center">
                        By logging in, you are agreeing to our{" "}
                        <span className="underline">Terms & Conditions.</span>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-[16px] max-h-full">
                  <p className="text-[14px] font-sans">
                    Enter your phone number to receive a verification code and
                    sign in to your Befer account.
                  </p>
                  <div>
                    <label className="mb-[8px] text-[14px] font-[700] font-sans text-[#333333]">
                      Phone Number
                    </label>

                    <div className="flex gap-4 border border-[#e5e8eb] h-[40px] rounded-[6px]">
                      <div className="flex items-center justify-center px-[8px] border-r border-[#e5e8eb]">
                        <Image
                          src={US_flag}
                          alt="US flag"
                          className="w-[18px] h-[14px]"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="+1"
                        value={phone}
                        onChange={handlePhoneChange}
                        className="outline-none w-full  rounded px-2 py-1"
                      />
                    </div>

                    <div className="mt-[32px]">
                      <Button
                        text="Send Verification Code"
                        onClick={handleSendVerification}
                      />
                    </div>
                  </div>

                  <p className="text-[12px] text-[#74808B] mt-4 mb-12 text-center">
                    By logging in, you are agreeing to our{" "}
                    <span className="underline">Terms & Conditions.</span>
                  </p>
                </div>
              )}
            </div>

            <p className="absolute bottom-0 pb-[20px] pt-[10px] text-[14px] font-sans text-[#374151] text-center bg-white w-full rounded-b-3xl">
              New to Befer?{" "}
              <span className="text-[#0058FF] cursor-pointer">
                Create account
              </span>
            </p>
          </div>
        </div>

        {/*Carousel*/}
        <div className="w-[50%] lg:flex hidden flex-col gap-[16px] items-end justify-end pr-[80px] py-[40px]">
          {/* pagination */}
          <div className="login-pagination mb-4 flex"></div>

          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ el: ".login-pagination", clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={600}
            loop={true}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            className="w-full pr-[30px]"
          >
            {carousel.map((slide, index) => (
              <SwiperSlide key={index}>
                <div>
                  <h1 className="text-[38px] font-[600] mb-[19px] text-white">
                    {slide.heading}
                  </h1>
                  <p className="text-[14px] text-[#FFFF]">{slide.paragraph}</p>
                  <button className="px-[16px] py-[8px] rounded-3xl border border-[#d9d9d9] text-white mt-4 hover:border-[#0058FF] cursor-pointer">
                    See Our Success Stories
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Login;
