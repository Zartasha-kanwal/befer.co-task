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
  Clock,
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
          className="relative min-h-screen  text-white overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
            <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
              {/* LEFT SIDE */}
              <div className="lg:col-span-7 space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
                    <Car className="h-4 w-4 text-white" />
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
                  <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                    The complete business management platform designed
                    exclusively for auto detailing professionals who demand
                    excellence.
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { icon: Calendar, text: "Smart Scheduling" },
                    { icon: Star, text: "Customer Reviews" },
                    { icon: CheckCircle, text: "Payment Processing" },
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10"
                    >
                      <benefit.icon className="h-5 w-5 text-purple-400" />
                      <span className="text-sm font-medium">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
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
                    <div className="text-sm text-gray-400">
                      Happy Businesses
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">98%</div>
                    <div className="text-sm text-gray-400">
                      Satisfaction Rate
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">$2M+</div>
                    <div className="text-sm text-gray-400">
                      Revenue Processed
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - Interactive Dashboard Preview */}
              <div className="lg:col-span-5 space-y-6">
                {/* Main Dashboard Card */}
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-gray-900 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                        <Car className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Today's Schedule</h3>
                        <p className="text-gray-500 text-sm">March 15, 2025</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">
                        $1,247
                      </div>
                      <div className="text-xs text-gray-500">Daily Revenue</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        time: "9:00 AM",
                        service: "Premium Detail",
                        customer: "Sarah Johnson",
                        price: "$299",
                        status: "In Progress",
                      },
                      {
                        time: "1:00 PM",
                        service: "Interior Clean",
                        customer: "Mike Chen",
                        price: "$149",
                        status: "Scheduled",
                      },
                      {
                        time: "3:30 PM",
                        service: "Paint Correction",
                        customer: "Alex Rivera",
                        price: "$799",
                        status: "Scheduled",
                      },
                    ].map((appointment, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                          <div>
                            <div className="font-semibold text-sm">
                              {appointment.service}
                            </div>
                            <div className="text-xs text-gray-500">
                              {appointment.customer} • {appointment.time}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">
                            {appointment.price}
                          </div>
                          <div
                            className={`text-xs px-2 py-1 rounded-full ${
                              appointment.status === "In Progress"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {appointment.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secondary Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-gray-900 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center space-x-3 mb-3">
                      <Clock className="h-5 w-5 text-purple-500" />
                      <span className="font-semibold text-sm">
                        Avg. Service Time
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">2.5h</div>
                    <div className="text-xs text-green-600 font-medium">
                      ↗ 15% faster
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-gray-900 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center space-x-3 mb-3">
                      <Star className="h-5 w-5 text-yellow-500" />
                      <span className="font-semibold text-sm">
                        Customer Rating
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">4.9</div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
