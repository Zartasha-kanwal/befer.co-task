"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import {
  Users,
  Calendar,
  DollarSign,
  Clock,
  CheckCircle,
  Star,
  Home,
  MapPin,
} from "lucide-react";
import Header from "@/Components/Sections/Header";
import Footer from "@/Components/Sections/Footer";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Button: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-[10px] text-[14px] font-[600] font-sans bg-[#0058ff] text-white
        hover:bg-white hover:text-[#0058ff] transition-colors rounded-[99px] cursor-pointer
        border border-[#0058ff] ${className || ""}`}
    >
      {children}
    </button>
  );
};

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div
    className={`rounded-2xl bg-white shadow-md border border-gray-200 p-6 ${
      className || ""
    }`}
  >
    {children}
  </div>
);

const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mb-4">{children}</div>
);
const CardTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <h3 className={`text-xl font-semibold ${className || ""}`}>{children}</h3>
);
const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>{children}</div>
);
const CardDescription: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <p className="text-gray-600 leading-relaxed">{children}</p>;

const Cleaners = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const ctx = gsap.context(() => {
      const left = sectionEl.querySelector<HTMLElement>(".hero-left");
      const right = sectionEl.querySelector<HTMLElement>(".hero-right");

      // debug: uncomment to ensure elements exist
      // console.log("hero left/right:", left, right);

      if (left) {
        gsap.fromTo(
          left,
          { x: -120, y: 120, opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionEl,
              start: "top 80%",
              toggleActions: "play none none none",
              // markers: true,
            },
          }
        );
      }

      if (right) {
        gsap.fromTo(
          right,
          { x: 120, y: 120, opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            delay: 0.08, // small stagger after left
            scrollTrigger: {
              trigger: sectionEl,
              start: "top 80%",
              toggleActions: "play none none none",
              // markers: true,
            },
          }
        );
      }
    }, sectionEl); // scope to the section element

    return () => ctx.revert();
  }, []);

  useGSAP(
    () => {
      // get all feature boxes inside container
      const boxes = gsap.utils.toArray<HTMLElement>(
        ".feature-box",
        containerRef.current!
      );

      // animate them
      gsap.fromTo(
        boxes,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            // markers: true, // uncomment for debugging
          },
        }
      );
    },
    { scope: containerRef } // scope ensures selectors only work inside container
  );

  const features = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Smart Scheduling",
      description:
        "Automatically schedule recurring cleanings and manage your calendar with ease.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer Management",
      description:
        "Keep detailed records of client preferences, special instructions, and service history.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Instant Invoicing",
      description:
        "Generate professional invoices and accept payments on the spot with mobile processing.",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Route Optimization",
      description:
        "Plan efficient routes between cleanings to save time and fuel costs.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Tracking",
      description:
        "Track time spent on each job to optimize pricing and improve efficiency.",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Review Management",
      description:
        "Collect and showcase customer reviews to build your reputation online.",
    },
  ];

  const benefits = [
    "Increase bookings by 40% with automated follow-ups",
    "Save 2+ hours daily with streamlined scheduling",
    "Boost customer retention with personalized service",
    "Get paid faster with mobile payment processing",
    "Track business growth with detailed analytics",
  ];

  return (
    <div className="min-h-screen bg-background ">
      <Header />

      {/* Hero Section */}
      <section className="relative  text-white overflow-hidden">
        {/* Background Abstract Shape */}
        <div className="absolute inset-0">
          <svg
            className="absolute  top-0 "
            width="1200"
            height="1200"
            viewBox="0 0 1200 1200"
            fill="none"
          >
            <path
              d="M0 400C200 200 600 100 800 300C1000 500 800 800 600 1000C400 1200 0 1000 0 800V400Z"
              fill="#2C3E50"
              opacity="0.3"
            />
          </svg>
        </div>

        <div className="relative container mx-auto px-6 lg:px-12 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div className=" space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
                <Home className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold text-sm">
                Premium Auto Detailing CRM
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-none tracking-tight ">
                Transform Your
                <span className="block bg-gradient-to-r from-purple-400  to-blue-400   bg-clip-text text-transparent">
                  Detailing Empire
                </span>
              </h1>
              <p className="text-xl  text-gray-300 leading-relaxed max-w-2xl">
                The complete business management platform designed exclusively
                for auto detailing professionals who demand excellence.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#2563eb] hover:from-[#2563eb] hover:to-[#0f172a] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm cursor-pointer">
                <span className="flex items-center justify-center space-x-2">
                  <span>Watch Demo</span>
                  <div className="w-0 h-0 border-l-4 border-l-white border-y-2 border-y-transparent ml-1 group-hover:ml-2 transition-all duration-300"></div>
                </span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2,500+</div>
                <div className="text-sm text-gray-400">Happy Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-400">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">$2M+</div>
                <div className="text-sm text-gray-400">Revenue Processed</div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative  bg-[#1D293C] p-10 rounded-2xl shadow-xl">
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
              <svg width="100%" height="100%" className="w-full h-full">
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="0.5"
                    ></path>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)"></rect>
              </svg>
            </div>
            <div className="max-w-lg">
              <span className="uppercase text-sm  tracking-wide text-gray-200">
                Premium Auto Detailing CRM
              </span>
              <h2 className="mt-4 text-2xl md:text-4xl font-bold leading-snug">
                Crafting <br /> Spaces That <br /> Inspire
              </h2>
              <p className="mt-4 text-gray-200 leading-relaxed">
                Empowering home cleaners with smarter scheduling, easy client
                tracking, and tools that turn busy days into smooth success.
              </p>
              <Button className="mt-6 bg-[#0A1A2F] text-white px-6 py-3 rounded-full">
                Start free trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 mx-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Intro */}
            <div className="lg:px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Everything You Need to Run Your Cleaning Business
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Befer helps you handle scheduling, invoicing, and customer
                management so you can focus on delivering spotless results.
              </p>
              <div className="">
                <Button className="btn-gradient text-white max-w-[50%] text-lg">
                  Get Started Today
                </Button>
              </div>
            </div>

            {/* Right Features Grid */}
            <div
              ref={containerRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 "
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-box relative p-6 rounded-xl bg-[#1D293C]  "
                >
                  <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                    <svg width="100%" height="100%" className="w-full h-full">
                      <defs>
                        <pattern
                          id="grid"
                          width="40"
                          height="40"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="0.5"
                          ></path>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)"></rect>
                    </svg>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-100 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 bg-[#1D293C] rounded-3xl mx-4">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <svg width="100%" height="100%" className="w-full h-full">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="0.5"
                ></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"></rect>
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-white">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground ">
                Join 5,000+ Cleaning Professionals
              </h2>
              <p className="text-xl text-muted-foreground">
                See why leading cleaning services choose Befer to manage their
                operations and grow their business.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button className="btn-gradient text-white text-lg px-8">
                Get Started Today
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-100 p-6 rounded-2xl service-card">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Today's Schedule
                </h4>
                <p className="text-sm text-gray-600 mb-4">8 cleanings booked</p>
                <div className="text-2xl font-bold text-green-600">$1,240</div>
              </div>
              <div className="bg-yellow-100 p-6 rounded-2xl service-card">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Customer Rating
                </h4>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="text-2xl font-bold text-yellow-600">4.9/5</div>
              </div>
              <div className="bg-purple-100 p-6 rounded-2xl service-card col-span-2">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Monthly Growth
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Revenue increase vs last month
                </p>
                <div className="text-3xl font-bold text-purple-600">+24%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-section text-white py-20 mx-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Cleaning Business?
            </h2>
            <p className="text-xl text-white/90">
              Join thousands of cleaning professionals who have streamlined
              their operations and increased revenue with Befer CRM.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 lg:max-w-[60%] mx-auto">
              <Button className="text-white hover:bg-white hover:text-primary text-lg px-8">
                Start Your Free Trial
              </Button>
              <Button className=" text-white hover:bg-white hover:text-primary text-lg px-8">
                Schedule a Demo
              </Button>
            </div>
            <p className="text-sm text-white/70">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      <div className="mx-4">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Cleaners;
