"use client";

import React from "react";

export default function QuizLanding() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white overflow-hidden font-sans">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 h-64 w-64 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-2xl" />
      </div>

      {/* Navbar */}
      <nav className="container mx-auto flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500">
            ⭐
          </div>
          <span className="text-lg font-semibold tracking-tight">Quiza Live</span>
        </div>
        <div className="hidden items-center gap-6 md:flex">
          <a className="text-sm text-white/80 hover:text-white" href="#features">Features</a>
          <a className="text-sm text-white/80 hover:text-white" href="#how">How it works</a>
          <a className="text-sm text-white/80 hover:text-white" href="#pricing">Pricing</a>
          <a className="text-sm text-white/80 hover:text-white" href="#faq">FAQ</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg text-white/90 hover:text-white">Log in</button>
          <button className="px-4 py-2 rounded-lg bg-white text-black hover:bg-white/90">Get Started</button>
        </div>
      </nav>

      {/* Hero */}
      <header className="container mx-auto grid items-center gap-10 px-6 pb-20 pt-8 md:grid-cols-2 md:gap-16">
        <div className="relative">
          <span className="inline-block mb-4 px-3 py-1 text-xs rounded-full bg-gradient-to-r from-violet-600 to-cyan-500">Realtime • Multiplayer • Secure</span>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            Host Lightning‑Fast <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Live Quizzes</span>
          </h1>
          <p className="mb-6 max-w-xl text-white/70">
            Create, host, and join real‑time quizzes with zero friction. Built for classrooms, teams, and live streams—scales from 5 to 50,000 players.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 text-white">
              Try a Live Demo →
            </button>
            <button className="px-6 py-3 rounded-lg border border-white/15 bg-transparent text-white hover:bg-white/10">
              View on GitHub
            </button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/60">
            <div>⚡ Sub‑100ms updates</div>
            <div>🔒 Proctor tools</div>
            <div>👥 Teams & solo</div>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-4 shadow-2xl backdrop-blur">
            <div className="rounded-xl border border-white/10 bg-black/40 p-3">
              {/* Faux app preview */}
              <div className="mb-3 flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="text-sm text-white/80">📱 Room #A7K9</div>
                <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs">Live</span>
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                {["What is the capital of France?","2 + 2 × 3 = ?","HTTP status for Not Found?","Who won the 2019 Cricket WC?"].map((q, i) => (
                  <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <h3 className="mb-2 text-base text-white/90">{q}</h3>
                    <div className="flex items-center justify-between text-sm text-white/70">
                      <div>⏱ 20s</div>
                      <button className="px-3 py-1 rounded bg-violet-600 hover:bg-violet-500 text-sm">Answer</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section id="features" className="container mx-auto px-6 pb-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Built for Speed, Fun, and Fair Play</h2>
          <p className="mt-3 text-white/70">Everything you need to run engaging, competitive quizzes—whether in the classroom or across the globe.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard icon="⚡" title="Realtime Sync" desc="WebSockets deliver instant updates under 100ms."/>
          <FeatureCard icon="🔒" title="Anti‑Cheat Tools" desc="Randomization and focus tracking ensure fairness."/>
          <FeatureCard icon="👥" title="Team Modes" desc="Collaborate or compete in squads and solo play."/>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500">
              ⭐
            </div>
            <span className="text-sm text-white/70">© {new Date().getFullYear()} Quiza Live</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-6">
      <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold">
        <span className="text-xl">{icon}</span> {title}
      </h3>
      <p className="text-white/70 text-sm">{desc}</p>
    </div>
  );
}
