"use client";

import {
  Users,
  Calendar,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Star,
  Wrench,
  Clock,
  Phone,
  MapPin,
  FileText,
  Settings,
} from "lucide-react";
import Header from "../../Components/Sections/Header";
import Footer from "../../Components/Sections/Footer";

const Button: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`w-full p-[10px] text-[14px] font-[600] font-sans bg-[#0058ff] text-white
      hover:bg-white hover:text-[#0058ff] transition-colors rounded-[99px] cursor-pointer
      border border-[#0058ff] ${className || ""}`}
  >
    {children}
  </button>
);


const Plumbers = () => {
  const features = [
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Emergency Dispatch",
      description:
        "24/7 emergency call management with GPS routing and real-time technician tracking.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Smart Scheduling",
      description:
        "Optimize routes, manage recurring maintenance, and handle urgent repairs efficiently.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer History",
      description:
        "Access complete service history, property details, and preferred appointment times.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Service Estimates",
      description:
        "Create detailed estimates on-site with parts pricing and labor calculations.",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Parts Inventory",
      description:
        "Track parts usage, set reorder points, and manage supplier relationships.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Digital Invoicing",
      description:
        "Generate invoices instantly with photos, work descriptions, and payment processing.",
    },
  ];

  const benefits = [
    "Reduce emergency response time by 40% with GPS dispatch",
    "Increase revenue by 45% with efficient scheduling",
    "Improve customer satisfaction with real-time updates",
    "Cut administrative time by 60% with digital workflows",
    "Track profitability by job type and technician performance",
  ];

  return (
    <div className="min-h-screen bg-background lg:mx-4">
      <Header />

      {/* Hero Section */}
      <section className="hero-section text-white py-20 lg:py-32 bg-[#111927]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-2 mb-4">
                <Wrench className="h-6 w-6 text-accent" />
                <span className="text-accent font-semibold">
                  For Plumbing Professionals
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Streamline Your
                <span className="text-accent block">Plumbing Business</span>
                Operations
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                From emergency dispatching to routine maintenance, manage your
                plumbing business with the CRM built for service professionals.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="btn-gradient text-white text-lg px-8">
                  Start 14-Day Free Trial
                </Button>
                <Button className="text-white hover:bg-white hover:text-primary text-lg px-8">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-white/80">
                <span className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>24/7 support included</span>
                </span>
                <span className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>Works offline</span>
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-green-100 p-8 rounded-3xl service-card">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="h-6 w-6 text-red-500" />
                    </div>
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                      URGENT
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Emergency Call
                  </h3>
                  <p className="text-gray-600">Burst pipe at 123 Main St</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span>2.3 miles away</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>ETA: 15 minutes</span>
                  </div>
                  <Button className="btn-gradient text-white w-full">
                    Accept Job
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden rounded-3xl bg-[#1D293C]">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text + Feature List */}
            <div className="space-y-8">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Complete Plumbing Business Management
                </h2>
                <p className="text-lg text-gray-300 max-w-xl">
                  Handle everything from emergency calls to scheduled
                  maintenance with tools designed specifically for plumbing
                  professionals.
                </p>
              </div>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 
                         transition-all duration-300 group cursor-pointer"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center 
                              text-accent group-hover:scale-110 transition-transform text-white"
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Feature Highlight Card */}
            <div className="relative">
              <div
                className="rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 p-8 shadow-[0_0_40px_rgba(0,88,255,0.25)]">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Your Control Center
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800">
                        Emergency Dispatch
                      </span>
                      <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-600">
                        New
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Job assigned to Mike • ETA 12min
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800">
                        Upcoming Jobs
                      </span>
                      <Calendar className="h-4 w-4 text-accent" />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      3 scheduled for tomorrow
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800">
                        Invoices
                      </span>
                      <DollarSign className="h-4 w-4 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      5 pending payments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/10 to-transparent blur-3xl opacity-30"></div>
      </section>

      {/* Emergency Response Feature */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-white">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Built for Emergency Response
              </h2>
              <p className="text-xl text-muted-foreground">
                When emergencies happen, every minute counts. Befer's dispatch
                system ensures you respond faster and serve more customers.
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
                Start Your Free Trial
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-100 p-6 rounded-2xl service-card">
                <div className="flex items-center space-x-2 mb-3">
                  <Phone className="h-5 w-5 text-red-500" />
                  <h4 className="font-semibold text-gray-800">
                    Emergency Calls
                  </h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">Today</p>
                <div className="text-2xl font-bold text-red-500">7</div>
              </div>
              <div className="bg-blue-100 p-6 rounded-2xl service-card">
                <div className="flex items-center space-x-2 mb-3">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <h4 className="font-semibold text-gray-800">Avg Response</h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">This week</p>
                <div className="text-2xl font-bold text-blue-500">18min</div>
              </div>
              <div className="bg-yellow-100 p-6 rounded-2xl service-card">
                <div className="flex items-center space-x-2 mb-3">
                  <DollarSign className="h-5 w-5 text-yellow-500" />
                  <h4 className="font-semibold text-gray-800">Revenue</h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">This month</p>
                <div className="text-2xl font-bold text-yellow-600">
                  $12,340
                </div>
              </div>
              <div className="bg-purple-100 p-6 rounded-2xl service-card">
                <div className="flex items-center space-x-2 mb-3">
                  <Star className="h-5 w-5 text-purple-500" />
                  <h4 className="font-semibold text-gray-800">Rating</h4>
                </div>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-purple-400 text-purple-400"
                    />
                  ))}
                </div>
                <div className="text-2xl font-bold text-purple-500">4.9/5</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Professional Plumbers
            </h2>
            <p className="text-xl text-muted-foreground">
              From solo contractors to large plumbing companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2 text-green-200">
                1,800+
              </div>
              <p className="text-muted-foreground">Active Plumbers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2 text-green-200">
                95K+
              </div>
              <p className="text-muted-foreground">Jobs Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2 text-green-200">
                12min
              </div>
              <p className="text-muted-foreground">Avg Response Time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2 text-green-200">
                98%
              </div>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-section text-white py-20 bg-[#111927]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Fix More, Stress Less?
            </h2>
            <p className="text-xl text-white/90">
              Join hundreds of plumbing professionals who have streamlined their
              operations and grown their business with Befer CRM.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="text-white hover:bg-white hover:text-primary text-lg px-8">
                Start Your Free Trial
              </Button>
              <Button className="text-white hover:bg-white hover:text-primary text-lg px-8">
                Schedule a Demo
              </Button>
            </div>
            <p className="text-sm text-white/70">
              14-day free trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Plumbers;
