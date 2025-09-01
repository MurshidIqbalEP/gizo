"use client";
import { ArrowUpRight, Check } from "lucide-react";
import React, { useState } from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

const FinoviaLandingPage = () => {
  const [activeTab, setActiveTab] = useState("Monthly");

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative py-16 px-6 m-7 h-screen rounded-2xl bg-[#f3f3f2] flex items-center justify-center overflow-hidden">
         <BackgroundRippleEffect  rows={20} cols={39} cellSize={40} />
        <div className="max-w-7xl mx-auto z-10">
          <div className="text-center">
            {/* Tagline */}
            <div className="inline-flex items-center text-gray-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <div className="w-[25px] h-[25px] bg-[#bbe65b] rounded-full mr-2 flex justify-center items-center">
                <Check className="w-4 h-4 text-gray-600" />
              </div>
              Live Quiz Showdowns
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Fueling Your Knowledge Journey
              <br />
              Through Real-Time Quiz Battles.
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg mb-8">
              Compete in live quizzes, test your skills, and climb the
              <br />
              leaderboard in real time.
            </p>

            {/* Button */}
            <div className="flex items-center justify-center space-x-4">
              <button className="text-gray-600 px-6 py-3 border border-green-900 rounded-3xl font-medium flex items-center hover:bg-green-900 hover:text-white transition">
                Get Started <ArrowUpRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard Section */}
      <section className=" px-6 h-screen flex flex-col gap-4 ">
        <div className="flex gap-4 w-full h-[70%]">
          <div className="w-[25%] h-full bg-amber-900 rounded-2xl"></div>
          <div className="w-[75%] h-full bg-fuchsia-900 rounded-2xl">
               <div className="h-[50%] w-full bg-amber-800"></div>
               <div className="h-[50%] bg-blue-950"></div>
          </div>
        </div>

        <div className="w-full h-[20%] bg-amber-400 rounded-2xl">

        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore our pricing plans
          </h2>
          <p className="text-gray-600 mb-8">
            We help to keep track of your expense and incomes. It shows the flow
            of records
            <br />
            over a specific period of time. Such as weekly, monthly or yearly.
          </p>

          <div className="flex justify-center space-x-2 mb-12">
            <button
              onClick={() => setActiveTab("Monthly")}
              className={`px-6 py-2 rounded-lg font-medium ${
                activeTab === "Monthly"
                  ? "bg-green-900 text-white"
                  : "text-gray-600"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setActiveTab("Yearly")}
              className={`px-6 py-2 rounded-lg font-medium relative ${
                activeTab === "Yearly"
                  ? "bg-green-900 text-white"
                  : "text-gray-600"
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-400 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-6 flex items-center justify-center text-2xl">
                ⚡
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                $9.99
                <span className="text-lg font-normal text-gray-500">
                  / per month
                </span>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-green-900 rounded-2xl p-8 text-white relative">
              <div className="absolute top-4 right-4 bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-6 flex items-center justify-center text-2xl">
                🚀
              </div>
              <div className="text-4xl font-bold mb-2">
                $19.99
                <span className="text-lg font-normal opacity-80">
                  / per month
                </span>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-6 flex items-center justify-center text-2xl">
                💎
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                $29.99
                <span className="text-lg font-normal text-gray-500">
                  / per month
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Basic Plan */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Get Started</h3>
                <p className="text-gray-500 text-sm">
                  Additional information can be added here
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">What's included:</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-sm">
                      Expense Tracking
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-sm">
                      Income Management
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-sm">
                      Basic Financial Reports
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-sm">
                      Budgeting Tools
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-green-900 rounded-2xl p-6 text-white shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Get Started</h3>
                <p className="text-green-100 text-sm">
                  Additional information can be added here
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium">What's included:</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm">Everything in Basic Plan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm">Cash Flow Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm">Advanced Financial Reports</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm">Tax Calculation & Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Standard Plan */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Get Started</h3>
                <p className="text-gray-500 text-sm">
                  Additional information can be added here
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900">What's included:</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-sm">
                      Everything in Standard Plan
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-sm">
                      Inventory Management
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-sm">
                      Payroll Management
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-sm">
                      Custom Financial Reports
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="bg-green-200 rounded-3xl p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  ✓ Client Testimonials
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  What Our Client Say's About Us
                </h2>
                <p className="text-gray-700 mb-8">
                  Our bank service is designed to empower your financial dreams
                  with innovative solutions and unwavering commitment.
                </p>
                <button className="bg-green-900 text-white px-6 py-3 rounded-lg font-medium flex items-center">
                  Explore Services
                  <span className="ml-2">→</span>
                </button>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <p className="text-gray-700 mb-4">
                    "pleasure.professional and trustworthy team, makes banking a
                    pleasure."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Michael Carter
                      </p>
                      <p className="text-sm text-gray-500">Web Developer</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">
                    "Personalized service, highly professional and trustworthy
                    team, makes banking a pleasure.professional and trustworthy
                    team, makes banking a pleasure."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900">
                        David Thompson
                      </p>
                      <p className="text-sm text-gray-500">Software Engineer</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex mb-2">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                    <span className="text-gray-300 text-lg">★</span>
                  </div>
                  <p className="text-gray-700">
                    "Personalized service, highly professional and trustworthy
                    team, makes banking a pleasure.professional and trustworthy
                    team,"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* News & Blogs Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  ✓ News & Blogs
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  Our Latest News & Blogs
                </h2>
              </div>
              <button className="bg-green-900 text-white px-6 py-3 rounded-lg font-medium flex items-center">
                See More Blogs
                <span className="ml-2">→</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>Vancouver</span>
                    <span className="mx-2">|</span>
                    <span>March 16, 2026</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    Eco-Friendly Investments: Exploring Sustainable Fina...
                  </h3>
                </div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>Toronto</span>
                    <span className="mx-2">|</span>
                    <span>July 4, 2027</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    Green Finance: The Rise of Sustainable Investment De...
                  </h3>
                </div>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>Montreal</span>
                    <span className="mx-2">|</span>
                    <span>November 30, 2028</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    Investing in Tomorrow: How Sustainable Practices Shap...
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="text-xl font-semibold">Finovia</span>
              </div>
              <p className="text-gray-400 text-sm">
                Perfect for fintech or consumer finance platforms aiming to
                simplify complex financial tasks for everyday users.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Finovia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FinoviaLandingPage;
