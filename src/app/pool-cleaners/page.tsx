"use client";
import React, { useRef } from "react";
import {
  Users,
  Calendar,
  DollarSign,
  Clock,
  CheckCircle,
  Star,
  Waves,
  Droplets,
  MapPin,
  Thermometer,
  TestTube,
  Zap,
  Shield,
  TrendingUp,
  Phone,
  Mail,
} from "lucide-react";
import Header from "@/Components/Sections/Header";
import Footer from "@/Components/Sections/Footer";

const Button: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}> = ({ children, onClick, className, variant = "primary" }) => {
  const baseClasses =
    "px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]";

  const variantClasses = {
    primary:
      "bg-[#0058FF] shadow hover:bg-blue-700 transition text-white shadow-lg hover:shadow-xl cursor-pointer",
    secondary:
      "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 cursor-pointer",
    outline:
      "border-2 border-blue-700  shadow hover:bg-blue-700 transition hover:text-white cursor-pointer",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className || ""}`}
    >
      {children}
    </button>
  );
};

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
}> = ({ icon, title, description, highlight = false }) => (
  <div
    className={`group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-3 cursor-pointer ${
      highlight
        ? "bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-400/30"
        : "bg-white/5 backdrop-blur-sm border border-white/10"
    } hover:bg-white/10 hover:border-white/20`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <div className="relative z-10">
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
          highlight
            ? "bg-gradient-to-br from-cyan-400 to-blue-500"
            : "bg-gradient-to-br from-slate-700 to-slate-800"
        }`}
      >
        <div className="text-white">{icon}</div>
      </div>

      <h3 className="font-bold text-2xl mb-4 text-white group-hover:text-cyan-300 transition-colors">
        {title}
      </h3>
      <p className="text-slate-300 leading-relaxed text-lg">{description}</p>
    </div>
  </div>
);

const MetricCard: React.FC<{
  label: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
}> = ({ label, value, change, icon, color }) => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
    <div className="flex items-center justify-between mb-4">
      <div
        className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center group-hover:scale-110 transition-transform`}
      >
        {icon}
      </div>
      <span className="text-emerald-400 text-sm font-semibold">{change}</span>
    </div>
    <div className="text-3xl font-bold text-white mb-2">{value}</div>
    <div className="text-slate-400 text-sm">{label}</div>
  </div>
);

const PoolCleaners = () => {
  const heroRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "Chemical Balance Pro",
      description:
        "Advanced water chemistry monitoring with AI-powered recommendations for perfect pH, chlorine, and alkalinity levels.",
      highlight: true,
    },
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Smart Pool Automation",
      description:
        "Automated cleaning schedules, equipment monitoring, and predictive maintenance alerts to keep pools pristine.",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Route Optimization",
      description:
        "Intelligent scheduling system that maximizes your daily pool visits while minimizing travel time and fuel costs.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Equipment Protection",
      description:
        "Real-time monitoring of pumps, filters, and heaters with instant alerts for potential issues before they become costly repairs.",
      highlight: true,
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Portal",
      description:
        "Give clients 24/7 access to service reports, chemical readings, photos, and maintenance schedules through our mobile app.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Business Analytics",
      description:
        "Comprehensive reporting on revenue, efficiency metrics, customer satisfaction, and growth opportunities.",
    },
  ];

  const achievements = [
    "Increase service efficiency by 60% with smart routing",
    "Reduce chemical costs by 35% through precise monitoring",
    "Boost customer retention to 95% with transparent reporting",
    "Scale operations to 1000+ pools with automated workflows",
    "Prevent 90% of equipment failures with predictive alerts",
    "Generate 40% more revenue with premium service packages",
  ];

  const metrics = [
    {
      label: "Pools Serviced Today",
      value: "47",
      change: "+12%",
      icon: <Droplets className="h-6 w-6 text-white" />,
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      label: "Daily Revenue",
      value: "$3,240",
      change: "+28%",
      icon: <DollarSign className="h-6 w-6 text-white" />,
      color: "bg-gradient-to-br from-emerald-500 to-teal-500",
    },
    {
      label: "Customer Rating",
      value: "4.97★",
      change: "+0.3",
      icon: <Star className="h-6 w-6 text-white" />,
      color: "bg-gradient-to-br from-amber-500 to-orange-500",
    },
    {
      label: "Time Efficiency",
      value: "89%",
      change: "+15%",
      icon: <Clock className="h-6 w-6 text-white" />,
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className=" bg-[#111927] text-white lg:mx-4">
      <Header />
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Waves className="h-6 w-6 text-white" />
                </div>
                <span className="text-cyan-400 font-bold text-xl tracking-wide">
                  AQUA CLEAN PRO
                </span>
              </div>

              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none">
                  <span className="text-white">Pool</span>
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400">
                    Perfection
                  </span>
                  <br />
                  <span className="text-white">Simplified</span>
                </h1>

                <p className="text-2xl text-slate-300 leading-relaxed max-w-2xl">
                  Revolutionary pool management platform that transforms how
                  professionals maintain crystal-clear pools with AI-powered
                  precision and automation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button variant="primary" className="text-xl">
                  Start Free Trial
                </Button>
                <Button variant="secondary" className="text-xl">
                  Watch Demo
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-8 text-slate-400">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

            {/* Right Visual Dashboard */}
            <div className="relative px-2">
              <div className="relative z-10 max-w-lg mx-auto">
                {/* Main Dashboard */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl md:p-8 p-4 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          Pool Dashboard
                        </h3>
                        <p className="text-slate-400">Live monitoring system</p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                        <Droplets className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:gap-4 gap-2">
                      <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-2xl p-4 text-center">
                        <div className="text-2xl font-bold text-emerald-400">
                          7.2
                        </div>
                        <div className="text-sm text-emerald-300">
                          pH Perfect
                        </div>
                      </div>
                      <div className="bg-blue-500/20 border border-blue-400/30 rounded-2xl p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400">
                          2.5
                        </div>
                        <div className="text-sm text-blue-300">
                          Chlorine ppm
                        </div>
                      </div>
                      <div className="bg-amber-500/20 border border-amber-400/30 rounded-2xl p-4 text-center">
                        <div className="text-2xl font-bold text-amber-400">
                          82°F
                        </div>
                        <div className="text-sm text-amber-300">
                          Temperature
                        </div>
                      </div>
                      <div className="bg-purple-500/20 border border-purple-400/30 rounded-2xl p-4 text-center">
                        <div className="text-2xl font-bold text-purple-400">
                          120
                        </div>
                        <div className="text-sm text-purple-300">
                          Alkalinity
                        </div>
                      </div>
                    </div>

                    <Button variant="primary" className="w-full whitespace-nowrap">
                      Complete Service Check
                    </Button>
                  </div>
                </div>

                {/* Floating Status Cards */}
                <div className="absolute -left-6 top-1/3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 shadow-xl">
                  <div className="text-center text-white">
                    <div className="text-xl font-bold">24</div>
                    <div className="text-xs opacity-90">Pools Today</div>
                  </div>
                </div>

                <div className="absolute -right-6 bottom-1/3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-4 shadow-xl">
                  <div className="text-center text-white">
                    <div className="text-xl font-bold">98%</div>
                    <div className="text-xs opacity-90">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent"></div>

        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="text-white">Complete Pool</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Management Suite
              </span>
            </h2>
            <p className="md:text-2xl  text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to run a successful pool service business,
              from chemical monitoring to customer relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                highlight={service.highlight}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0"></div>

        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left: Achievements */}
            <div className="space-y-10">
              <div>
                <h2 className="text-5xl font-bold text-white mb-6">
                  Trusted by 4,500+
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    {" "}
                    Pool Experts
                  </span>
                </h2>
                <p className="md:text-xl text-slate-300 leading-relaxed">
                  Join the leading pool service professionals who have
                  revolutionized their operations and maximized their profits
                  with our platform.
                </p>
              </div>

              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-slate-200 md:text-lg leading-relaxed">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>

              <Button variant="primary" className="text-xl">
                Join the Revolution
              </Button>
            </div>

            {/* Right: Metrics Grid */}
            <div className="grid grid-cols-2 md:gap-6 gap-3">
              {metrics.map((metric, index) => (
                <MetricCard
                  key={index}
                  label={metric.label}
                  value={metric.value}
                  change={metric.change}
                  icon={metric.icon}
                  color={metric.color}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=" relative pb-12">
        <div className="absolute inset-0"></div>
        <div className="absolute inset-0 backdrop-blur-3xl"></div>

        <div className="relative container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-7xl font-bold leading-tight">
              <span className="text-white">Ready to Dive Into</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400">
                Pool Excellence?
              </span>
            </h2>

            <p className="md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Transform your pool service business today with the most advanced
              management platform designed specifically for pool professionals.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-8 max-w-2xl mx-auto">
              <Button variant="primary" className="text-xl flex-1">
                Start Free 14-Day Trial
              </Button>
              <Button variant="outline" className="text-xl flex-1">
                Schedule Live Demo
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-slate-400">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span>Setup Assistance</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5" />
                <span>Money-Back Guarantee</span>
              </div>
            </div>

            <p className="text-sm text-slate-500 max-w-2xl mx-auto">
              No credit card required • Full access to all features • Personal
              onboarding session • Cancel anytime with one click
            </p>
          </div>
        </div>
      </section>
        

        <div className="mx-4"> <Footer /></div>
     
    </div>
  );
};

export default PoolCleaners;
