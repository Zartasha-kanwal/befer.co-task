"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import {
  Users,
  DollarSign,
  CheckCircle,
  Star,
  Zap,
  Shield,
  MapPin,
  AlertTriangle,
  Wrench,
  FileText,
} from "lucide-react";
import heroImage from "../../Components/Assets/Images/electrician-man.png";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/Components/Sections/Header";
import Footer from "@/Components/Sections/Footer";

gsap.registerPlugin(ScrollTrigger);

const Electricians = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const left = sectionEl.querySelector<HTMLElement>(".hero-left");
    const right = sectionEl.querySelector<HTMLElement>(".hero-right");

    if (left) {
      gsap.fromTo(
        left,
        { x: -120, y: 80, opacity: 0 },
        { x: 0, y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
    }
    if (right) {
      gsap.fromTo(
        right,
        { x: 120, y: 80, opacity: 0, scale: 0.9 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }
  }, []);

  useEffect(() => {
    const boxes = containerRef.current?.querySelectorAll(".feature-box");
    if (boxes) {
      gsap.fromTo(
        boxes,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    const statCards = statsRef.current?.querySelectorAll(".stat-card");
    if (statCards) {
      gsap.fromTo(
        statCards,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const features = [
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Emergency Call Management",
      description:
        "Handle urgent electrical issues with priority scheduling and instant notifications.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer History",
      description:
        "Track work history, circuit maps, and safety certifications for each property.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Digital Permits & Inspections",
      description:
        "Manage permits, schedule inspections, and maintain compliance records digitally.",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Smart Route Planning",
      description:
        "Optimize service calls with intelligent routing to maximize daily appointments.",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Parts Inventory Tracking",
      description:
        "Track components, cables, and tools with automated reorder alerts.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Electrical Estimating",
      description:
        "Generate accurate estimates with labor rates and material costs built-in.",
    },
  ];

  const benefits = [
    "Reduce emergency response time by 35% with automated dispatch",
    "Increase daily service calls by 25% with optimized routing",
    "Ensure 100% permit compliance with digital tracking",
    "Boost customer satisfaction with detailed work documentation",
    "Grow revenue 30% faster with professional estimates and invoicing",
  ];

  const services = [
    { name: "Residential Wiring", color: "bg-yellow-400" },
    { name: "Commercial Installations", color: "bg-blue-500" },
    { name: "Emergency Repairs", color: "bg-orange-500" },
    { name: "Panel Upgrades", color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground lg:mx-4">
      <Header />
      {/* Hero Section */}
      <section
        ref={sectionRef}
        className="relative py-20 lg:py-32 bg-background overflow-hidden "
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background"></div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 hero-left opacity-0 text-white">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-6 w-6 text-primary" />
                <span className="text-primary font-semibold">
                  For Professional Electricians
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Power Up Your
                <span className="text-primary block">Electrical Business</span>
                with Smart CRM
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Streamline services from emergency calls to major installations.
                Manage permits, track compliance, and grow your business with
                the CRM built for electrical pros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-white rounded-lg px-8 py-3 text-lg font-semibold hover:bg-white hover:text-[#111927] transition-colors duration-300 cursor-pointer">
                  Start 14-Day Free Trial
                </button>
                <button className="border border-primary text-primary rounded-lg px-8 py-3 text-lg font-semibold hover:bg-white hover:text-[#111927] cursor-pointer transition-colors duration-300">
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <span className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Safety compliance built-in</span>
                </span>
              </div>
            </div>

            <div className="hero-right relative opacity-0">
              <Image
                src={heroImage}
                alt="Professional electrician working"
                className="rounded-3xl shadow-2xl w-full h-64 sm:h-80 md:h-[400px] object-cover"
              />

              {/* Emergency Call Card */}
              <div className="absolute left-2 bottom-2 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-6 rounded-2xl border shadow-xl max-w-[80%] sm:max-w-none">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">
                      Emergency Call
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Power outage - dispatched
                    </p>
                  </div>
                </div>
              </div>

              {/* Rating Card */}
              <div className="absolute right-2 top-2 sm:-top-6 sm:-right-6 bg-white p-3 sm:p-4 rounded-2xl border shadow-xl text-center">
                <div className="text-lg sm:text-2xl font-bold text-primary">
                  4.9★
                </div>
                <p className="text-[10px] sm:text-xs text-muted-foreground">
                  Customer Rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center ">
            <div className="text-white ">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Complete Electrical Business Management
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From emergency calls to complex installs, manage every aspect of
                your business with tools designed for safety and efficiency.
              </p>
              <div className="space-y-4 mb-8">
                {services.map((service, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div
                      className={`w-3 h-3 rounded-full ${service.color}`}
                    ></div>
                    <span className="font-medium">{service.name}</span>
                  </div>
                ))}
              </div>
              <button className="border border-primary text-primary rounded-lg px-8 py-3 text-lg font-semibold hover:bg-white hover:text-[#111927] cursor-pointer transition-colors duration-300">
                Get Started Today
              </button>
            </div>

            <div
              ref={containerRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((f, i) => (
                <div
                  key={i}
                  className="feature-box bg-white border rounded-xl p-6  hover:border-primary/50 transition-all shadow-[0_0_40px_rgba(0,88,255,0.25)]"
                >
                  <div className="w-12 h-12 bg-primary/20 text-primary flex items-center justify-center rounded-lg mb-3">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits + Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-white">
              <h2 className="text-3xl md:text-4xl font-bold">
                Join 3,000+ Electrical Professionals
              </h2>
              <p className="text-xl text-muted-foreground">
                See why top contractors choose our platform to manage operations
                and stay compliant.
              </p>
              <div className="space-y-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold text-white cursor-pointer transition-colors duration-200">
                Start Growing Today
              </button>
            </div>

            <div ref={statsRef} className="grid grid-cols-2 gap-6">
              <div className="stat-card bg-blue-100 rounded-xl p-6 text-center shadow">
                <h4 className="font-semibold mb-2">Today's Jobs</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  12 scheduled
                </p>
                <div className="text-3xl font-bold text-blue-600">$2,840</div>
              </div>
              <div className="stat-card bg-yellow-100 rounded-xl p-6 text-center shadow">
                <h4 className="font-semibold mb-2">Safety Score</h4>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  <Shield className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm text-muted-foreground">
                    Compliant
                  </span>
                </div>
                <div className="text-3xl font-bold text-yellow-600">100%</div>
              </div>
              <div className="stat-card col-span-2 bg-purple-100 rounded-xl p-6 text-center shadow">
                <h4 className="font-semibold mb-2">Monthly Growth</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Revenue vs last month
                </p>
                <div className="text-4xl font-bold text-purple-600">+32%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary to-background text-center">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl text-white">
          <Zap className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Electrify Your Business Growth?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of electrical professionals who’ve streamlined
            operations, improved safety, and grown revenue with our CRM.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <button className="bg-primary text-white rounded-lg px-8 py-3 text-lg font-semibold hover:bg-white hover:text-[#111927] transition-colors duration-300 cursor-pointer">
              Start Free Trial
            </button>
            <button className="border border-primary text-primary rounded-lg px-8 py-3 text-lg font-semibold hover:bg-white hover:text-[#111927] cursor-pointer transition-colors duration-300">
              Schedule Demo
            </button>
          </div>
          <p className="text-sm text-muted-foreground">
            14-day free trial • No credit card required • Safety tools included
          </p>
        </div>
      </section>
        
        <div className="mx-4"><Footer /></div>
      
    </div>
  );
};

export default Electricians;
