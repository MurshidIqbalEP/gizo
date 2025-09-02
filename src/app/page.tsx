"use client";
import {
  ArrowUpRight,
  Check,
  CheckCircle,
  ChevronsUp,
  Plus,
  Star,
} from "lucide-react";
import React, { useState } from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import BarChart from "@/components/batchart";

const FinoviaLandingPage = () => {
  const testimonials = [
    {
      name: "Aarav Nair",
      role: "Quiz Champion",
      feedback:
        "The real-time quiz rooms are incredible! Competing with friends feels seamless, and the live scoreboard keeps me pumped till the very end.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sneha Menon",
      role: "Educator",
      feedback:
        "This platform has transformed the way I host quizzes in my classroom. The private rooms and instant feedback keep my students engaged.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rohit Sharma",
      role: "Tech Enthusiast",
      feedback:
        "I love how interactive the experience is. The balanced design and smooth real-time features make it stand out from other quiz apps.",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative py-16 px-6 m-7 h-screen rounded-2xl bg-[#f3f3f2] flex items-center justify-center overflow-hidden">
        <BackgroundRippleEffect rows={20} cols={39} cellSize={40} />
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
      <section className=" px-6 h-[1000px] flex flex-col gap-4 mt-25  ">
        <div className="w-full h-[170px]  text-6xl font-extralight">
          <h1>
            Discover the Smart Features That Bring <br /> Your Quiz Experience
            to Life
          </h1>
        </div>
        <div className="flex gap-4 w-full h-[70%]">
          <div className="relative w-[25%] h-full bg-gray-200 rounded-2xl ">
            <img src="Vector 7777.png" alt="vector" className=" w-[90%] m-5" />

            <div className="m-5">
              <p className="text-left text-2xl font-semibold absolute top-8 left-9   -tracking-wide leading-relaxed">
                Challenge yourself <br /> through quiz <br />
                games....
              </p>

              <div className="flex w-full h-[100px] items-center  -space-x-3">
                {Array(6)
                  .fill(0)
                  .map((_, index) =>
                    index === 5 ? (
                      <div
                        key={index}
                        className="w-12 h-12 rounded-full bg-green-800 text-white flex items-center justify-center text-sm font-medium border-2 border-white shadow-sm z-0"
                      >
                        +8
                      </div>
                    ) : (
                      <img
                        key={index}
                        className="w-12 h-12 rounded-full border-2 object-cover border-white bg-amber-500 shadow-sm z-10"
                        src={`avatar${index + 1}.jpg`}
                        alt={`Avatar ${index + 1}`}
                      />
                    )
                  )}
              </div>
              <p className="text-xl font-medium ">
                Backed by <br /> professionals
              </p>
              <img
                src="book.png"
                alt="book"
                className="w-[110px] h-[110px] scale-x-[-1] absolute top-[60%] right-3"
              />
              <h1 className="font-bold text-7xl absolute bottom-9">100+</h1>
            </div>
          </div>
          <div className="w-[75%] h-full flex flex-col gap-4 rounded-2xl">
            <div className="h-[50%] w-full rounded-2xl flex gap-4">
              <div className="w-[60%] h-full bg-gray-200 rounded-2xl flex justify-between">
                <div className="p-6">
                  <h1 className="font-medium text-4xl">
                    Answer <br /> Visualization
                  </h1>
                  <p className="mt-4 text-left max-w-[400px]">
                    Displays a clear graphical representation of how users
                    responded to each quiz question, making it easy to analyze
                    performance and identify trends at a glance
                  </p>
                </div>

                <BarChart />
              </div>
              <div className="relative w-[40%] h-full bg-green-900 rounded-2xl text-white p-6">
                <img
                  src="brain.png"
                  alt="brain"
                  className="absolute top-0 right-0 w-[250px] h-[250px]"
                />
                <h1 className="text-6xl font-bold">100 K</h1>
                <p className="text-2xl font-light p-3">
                  Users around <br /> the world
                </p>
              </div>
            </div>
            <div className="h-[50%] w-full rounded-2xl flex gap-4 ">
              <div className="relative w-[30%] h-full bg-green-900 rounded-2xl">
                <div className="w-[200px] h-[90px] bg-white relative top-10 left-6 rounded-2xl">
                  <div className="flex p-3">
                    {Array(5)
                      .fill(0)
                      .map((_, i) =>
                        i === 4 ? (
                          <Star
                            key={i}
                            className="fill-gray-200 text-gray-400"
                          />
                        ) : (
                          <Star
                            key={i}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        )
                      )}
                  </div>
                  <div className="absolute w-[150px] h-[18px] bg-gray-300 top-10 left-3 rounded-2xl" />
                  <div className="absolute w-[80px] h-[18px] bg-gray-300  top-14 left-3 mt-1 rounded-2xl" />
                </div>
                <div className="absolute w-[70px] h-[70px] bg-white shadow-2xl top-3 right-19 rounded-2xl flex justify-center items-center rotate-6 ">
                  <img
                    className="w-12 h-12 rounded-full border-2 object-cover border-white   shadow-sm z-10"
                    src="avatar6.jpg"
                    alt="pic"
                  />
                </div>
                <div className="absolute w-[70px] h-[70px] bg-white shadow-2xl  right-7  bottom-14 rounded-2xl  flex justify-center items-center -rotate-6 ">
                  <img
                    className="w-12 h-12 object-cover z-10"
                    src="openbook.png"
                    alt="pic"
                  />
                </div>
                <p className="text-white text-3xl font-medium absolute bottom-9 left-5">
                  AI Quiz Room <br /> Options
                </p>
              </div>
              <div className="w-[70%] h-full bg-gray-200 rounded-2xl flex">
                <img src="cup.png" alt="cup" className="w-[290px] h-[270px]" />
                <div className=" flex flex-col justify-center items-center text-center m-2 gap-2">
                  <h1 className="text-4xl font-medium">
                    Real-Time Quiz with Live Scoreboard
                  </h1>
                  <p>
                    Compete in exciting real-time quiz battles where every
                    answer counts. Watch the live scoreboard update instantly
                    with scores and rankings, keeping the competition engaging
                    and fast-paced.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[20%] bg-gray-200 rounded-2xl p-6 flex items-center justify-around">
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span className="text-4xl font-bold">100</span>
              <Plus className="w-8 h-8" />
            </div>
            <p className="text-xl text-gray-600 text-center">Engaged Users</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span className="text-4xl font-bold">50</span>
              <Plus className="w-8 h-8" />
            </div>
            <p className="text-xl text-gray-600 text-center">
              Interactive Quiz Rooms
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span className="text-4xl font-bold">200</span>
              <Plus className="w-8 h-8" />
            </div>
            <p className="text-xl text-gray-600 text-center">Games Played</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <span className="text-4xl font-bold">50</span>
              <Plus className="w-8 h-8" />
            </div>
            <p className="text-xl text-gray-600 text-center">Quizzes Created</p>
          </div>
        </div>
      </section>

      <section className="mt-30 px-5">
  <div className="bg-[#bbe65b] p-8 flex gap-8 rounded-3xl items-center">
    {/* Left Section */}
    <div className="w-1/2 flex flex-col items-center text-center justify-center">
  <div className="flex justify-center items-center gap-2 mb-6">
    <CheckCircle className="text-blue-600" size={20} />
    <span className="text-blue-600 font-medium text-sm">
      Real-Time Learning
    </span>
  </div>

  <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
    Challenge Yourself with AI-Powered Quizzes
  </h1>

  <p className="text-gray-700 mb-8 leading-relaxed max-w-md">
    Experience the future of learning with our real-time, AI-driven quiz
    platform. Get instant feedback, personalized questions, and track your
    progress as you grow.
  </p>

  <button className="bg-gray-800 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-700 transition-colors">
    Start Quiz Now
    <span>→</span>
  </button>
</div>


    {/* Right Section - Testimonials */}
    <div className="w-1/2 space-y-4">
  {/* Testimonial 1 */}
  <div className="bg-white rounded-2xl p-6 shadow-sm">
    <div className="flex gap-1 mb-3">
      <Star className="fill-yellow-400 text-yellow-400" size={16} />
      <Star className="fill-yellow-400 text-yellow-400" size={16} />
      <Star className="fill-yellow-400 text-yellow-400" size={16} />
      <Star className="fill-yellow-400 text-yellow-400" size={16} />
      <Star className="fill-gray-200 text-gray-200" size={16} />
    </div>
    <p className="text-gray-700 mb-4 leading-relaxed">
      "The real-time quiz experience is so engaging! The AI-driven questions
      challenge me to think fast and stay sharp throughout the game."
    </p>
    <div className="flex items-center gap-3">
      <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
        alt="Michael Carter"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="font-semibold text-gray-900 text-sm">Michael Carter</p>
        <p className="text-gray-500 text-xs">Web Developer</p>
      </div>
    </div>
  </div>

  {/* Testimonial 2 */}
  <div className="bg-white rounded-2xl p-6 shadow-sm">
    <div className="flex gap-1 mb-3">
      <Star className="fill-yellow-400 text-yellow-400" size={16} />
      <Star className="fill-yellow-400 text-yellow-400" size={16} />
      <Star className="fill-yellow-400 text-yellow-400" size={16} />
      <Star className="fill-yellow-400 text-yellow-400" size={16} />
      <Star className="fill-yellow-400 text-yellow-400" size={16} />
    </div>
    <p className="text-gray-700 mb-4 leading-relaxed">
      "Competing with friends on the live scoreboard is addictive! It feels like
      a real-time tournament every single time."
    </p>
    <div className="flex items-center gap-3">
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
        alt="David Thompson"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="font-semibold text-gray-900 text-sm">David Thompson</p>
        <p className="text-gray-500 text-xs">Software Engineer</p>
      </div>
    </div>
  </div>

  {/* Testimonial 3 */}
  <div className="bg-white rounded-2xl p-6 shadow-sm">
    <div className="flex gap-1 mb-3">
      <Star className="fill-yellow-400 text-yellow-400" size={16} />
      <Star className="fill-yellow-400 text-yellow-400" size={16} />
      <Star className="fill-yellow-400 text-yellow-400" size={16} />
      <Star className="fill-yellow-400 text-yellow-400" size={16} />
      <Star className="fill-gray-200 text-gray-200" size={16} />
    </div>
    <p className="text-gray-700 mb-4 leading-relaxed">
      "The AI picks questions that match my skill level. It’s not just a quiz,
      it’s a personalized challenge every time I play!"
    </p>
    <div className="flex items-center gap-3">
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face"
        alt="Sophia Lee"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="font-semibold text-gray-900 text-sm">Sophia Lee</p>
        <p className="text-gray-500 text-xs">Data Analyst</p>
      </div>
    </div>
  </div>
</div>

  </div>
</section>


      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 px-6 mt-15">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Q</span>
                </div>
                <span className="text-xl font-semibold">Qizo</span>
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
