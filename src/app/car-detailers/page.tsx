"use client";
import {
  Users,
  Calendar,
  DollarSign,
  Camera,
  CheckCircle,
  Star,
  Car,
  Wrench,
  FileText,
} from "lucide-react";
import Header from "@/Components/Sections/Header";
import Footer from "@/Components/Sections/Footer";
import { useLayoutEffect, useRef } from "react";
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

const CarDetailers = () => {
  const autoRef = useRef<HTMLElement | null>(null);

  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray<HTMLElement>(".feature-box", sectionEl);

      if (boxes.length === 0) return;

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
            trigger: sectionEl,
            start: "top 80%",
            toggleActions: "play none none none",
            // markers: true, // debug
          },
        }
      );
    }, sectionEl);

    return () => ctx.revert();
  }, [".features"]);

  useLayoutEffect(() => {
    const sectionEl = autoRef.current;
    if (!sectionEl) return;

    const ctx = gsap.context(() => {
      const left = sectionEl.querySelector<HTMLElement>(".hero-left");
      const right = sectionEl.querySelector<HTMLElement>(".hero-right");

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
            delay: 0.08,
            scrollTrigger: {
              trigger: sectionEl,
              start: "top 80%",
              toggleActions: "play none none none",
              // markers: true,
            },
          }
        );
      }
    }, sectionEl);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Appointment Booking",
      description:
        "Online booking system with service packages and time slot management for detailing services.",
    },
    {
      icon: <Camera className="h-6 w-6" />,
      title: "Before/After Photos",
      description:
        "Document your work with integrated photo capture and automatically share results with customers.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Vehicle Database",
      description:
        "Track vehicle history, service records, and customer preferences for each car you detail.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Package Pricing",
      description:
        "Set up tiered service packages with add-ons and seasonal pricing adjustments.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Service Reports",
      description:
        "Generate detailed service reports with photos and recommendations for future work.",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Inventory Management",
      description:
        "Track detailing supplies, set reorder alerts, and manage product costs.",
    },
  ];

  const benefits = [
    "Increase average job value by 35% with package upsells",
    "Book 60% more appointments with online scheduling",
    "Reduce no-shows by 50% with automated reminders",
    "Build customer loyalty with service history tracking",
    "Showcase quality work with before/after galleries",
  ];

  return (
    <>
      <div className="min-h-screen bg-[#111927] lg:mx-4">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section
          ref={autoRef}
          className="hero-section text-white py-20 lg:py-32"
        >
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center overflow-hidden">
            {/* LEFT SIDE */}
            <div className="space-y-8 hero-left opacity-0 text-white">
              <div className="flex items-center space-x-2">
                <Car className="h-6 w-6 " />
                <span className=" font-semibold">
                  For Auto Detailing Services
                </span>
              </div>
              <h2 className="text-5xl font-bold leading-tight">
                Drive Your{" "}
                <span className=" block">
                  Detailing Business
                </span>{" "}
                to Success
              </h2>
              <p className="text-lg text-white/80">
                Manage bookings, showcase your work, and grow your auto
                detailing business with the CRM designed for car care
                professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-gradient text-white text-lg px-8">
                  Start 14-Day Free Trial
                </Button>
                <Button className=" text-white hover:bg-white hover:text-primary text-lg px-8">
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="hero-right bg-white rounded-2xl shadow-lg p-8 text-gray-900 opacity-0">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Car className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-center">
                Premium Detail
              </h3>
              <p className="text-center text-gray-600 mb-4">
                2023 BMW X5 - Full interior & exterior
              </p>
              <div className="flex justify-between text-sm text-gray-700 mb-6">
                <span>Duration: 4 hours</span>
                <span className="font-semibold text-green-600">$299</span>
              </div>
              <Button className="btn-gradient text-white w-full">
                View Details
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          ref={sectionRef}
          className="features relative py-20 text-white bg-[#1D293C] rounded-3xl"
        >
          {/* background grid */}
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
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* content */}
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Built for Auto Detailing Professionals
              </h2>
              <p className="text-lg text-white max-w-2xl mx-auto">
                From scheduling appointments to showcasing your work, Befer
                provides everything you need to run a successful detailing
                business.
              </p>
            </div>

            {/* feature grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="feature-box bg-white rounded-xl shadow-md p-6 opacity-0"
                >
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 text-yellow-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section id="showcase" className="py-20 text-white ">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <span>{benefit}</span>
                </div>
              ))}
              <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold text-white cursor-pointer transition-colors duration-200">
                Start Growing Today
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-xl text-center">
                <h4 className="font-semibold mb-1">This Week</h4>
                <p className="text-sm text-gray-600">Cars detailed</p>
                <div className="text-2xl font-bold text-red-500">23</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl text-center">
                <h4 className="font-semibold mb-1">Avg Rating</h4>
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-blue-400 text-blue-400"
                    />
                  ))}
                </div>
                <div className="text-2xl font-bold text-blue-500">4.8/5</div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <h4 className="font-semibold mb-1">Revenue</h4>
                <p className="text-sm text-gray-600">This month</p>
                <div className="text-2xl font-bold text-green-500">$8,450</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl text-center">
                <h4 className="font-semibold mb-1">Bookings</h4>
                <p className="text-sm text-gray-600">Next 7 days</p>
                <div className="text-2xl font-bold text-purple-500">18</div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="py-20 text-white ">
          <div className="container mx-auto px-6 text-center  ">
            <h2 className="text-4xl font-bold mb-4 ">
              Trusted by Leading Detailing Shops
            </h2>
            <p className="text-lg  mb-12  ">
              Join the professionals who've transformed their business with
              Befer
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-yellow-500">2,500+</div>
                <p>Active Detailers</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-500">50K+</div>
                <p>Cars Detailed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-500">$2M+</div>
                <p>Revenue Processed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-500">4.9★</div>
                <p>Customer Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="bg-[#111927] text-white py-20 text-center">
          <div className="container mx-auto px-6 max-w-2xl">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Detail Your Way to Success?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Transform your auto detailing business with tools designed
              specifically for car care professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold cursor-pointer">
                Start Your Free Trial
              </button>
              <button className="border border-[#0058ff] px-6 py-3 rounded-lg hbg-[#0058ff] bg-[#0058ff] text-white hover:bg-white hover:text-[#0058ff] transition-colors font-semibold cursor-pointer">
                Schedule a Demo
              </button>
            </div>
            <p className="text-sm text-white/70 mt-4">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default CarDetailers;
