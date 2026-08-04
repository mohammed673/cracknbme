'use client';

import React, { useState } from 'react';
import MetaPixel, { trackLeadEvent } from '../components/MetaPixel';

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('');

  // Replace this link with your actual TidyCal or Calendly booking URL
  const BOOKING_URL = 'https://tidycal.com/your-booking-handle/15-min-strategy-call';

  const handleOpenBooking = (tierName: string) => {
    setSelectedTier(tierName);
    // Fires 'Lead' event to Meta Pixel with Pixel ID 1046644521104270
    trackLeadEvent(tierName);
    // Redirects or opens modal
    window.open(BOOKING_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      <MetaPixel />

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-extrabold text-xl tracking-tight text-white">
            USMLE<span className="text-indigo-400">Step1</span> Prep
          </div>
          <button
            onClick={() => handleOpenBooking('Header CTA')}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-4 py-2 rounded-lg text-sm transition"
          >
            Book Free Call
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-12 text-center">
        <span className="inline-block px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">
          Tailored for IMGs in Egypt & the GCC
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          Pass USMLE Step 1 On Your First Try <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400">
            Without Burning Out During Internship
          </span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Stop struggling with score plateaus in the 50s on UWorld blocks. Get a personalized NBME diagnostic roadmap, structured schedules, and 1-on-1 mentorship.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            onClick={() => handleOpenBooking('Hero CTA')}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg shadow-indigo-600/25 transition transform hover:-translate-y-0.5"
          >
            Book Free 15-Min Strategy Call
          </button>
          <a
            href="#tiers"
            className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-lg px-8 py-4 rounded-xl transition"
          >
            View Mentorship Tiers
          </a>
        </div>

        {/* Video / Graphic Placeholder */}
        <div className="relative max-w-3xl mx-auto aspect-video bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-600/20 text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-3 border border-indigo-500/30">
              ▶
            </div>
            <p className="text-slate-300 font-medium">[ Video Intro: "How I Mastered USMLE Step 1 While Balancing Clinicals" ]</p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-slate-900/50 border-y border-slate-800/80 py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-sm font-semibold tracking-wider text-slate-400 uppercase mb-8">
            Built by an ECFMG-Certified Mentor
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <div className="text-3xl font-extrabold text-indigo-400">65%+</div>
              <div className="text-xs text-slate-400 mt-1">Target NBME Threshold</div>
            </div>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <div className="text-3xl font-extrabold text-sky-400">1-on-1</div>
              <div className="text-xs text-slate-400 mt-1">Direct Weekly Calls</div>
            </div>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <div className="text-3xl font-extrabold text-emerald-400">100%</div>
              <div className="text-xs text-slate-400 mt-1">Tailored for IMGs</div>
            </div>
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
              <div className="text-3xl font-extrabold text-purple-400">24/7</div>
              <div className="text-xs text-slate-400 mt-1">WhatsApp Guidance</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2-Tier Pricing / Services Section */}
      <section id="tiers" className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Choose Your Path To Passing</h2>
          <p className="text-slate-400">Select the level of support that fits your current preparation stage.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* TIER 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-slate-700 transition">
            <div>
              <div className="inline-block text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                Tier 1
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Structured Roadmap & Group Support</h3>
              <p className="text-slate-400 text-sm mb-6">
                Ideal for students who need structured discipline, NBME diagnostics, and a clear daily timeline.
              </p>
              <ul className="space-y-3 text-slate-300 text-sm mb-8">
                <li className="flex items-center gap-2">✓ Personalized UWorld/First Aid Study Schedule</li>
                <li className="flex items-center gap-2">✓ Weekly NBME Score Diagnostic & Weak-Spot Review</li>
                <li className="flex items-center gap-2">✓ Access to Weekly Live Group Q&A Sessions</li>
                <li className="flex items-center gap-2">✓ Dedicated WhatsApp Student Community Access</li>
              </ul>
            </div>
            <button
              onClick={() => handleOpenBooking('Tier 1 - Group Mentorship')}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 rounded-xl border border-slate-700 transition"
            >
              Apply For Tier 1
            </button>
          </div>

          {/* TIER 2 - VIP */}
          <div className="bg-gradient-to-b from-indigo-950/40 to-slate-900 border-2 border-indigo-500/50 rounded-2xl p-8 flex flex-col justify-between relative shadow-xl shadow-indigo-950/50">
            <div className="absolute -top-3 right-6 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <div>
              <div className="inline-block text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                Tier 2 - VIP
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">1-on-1 VIP Mentorship</h3>
              <p className="text-slate-400 text-sm mb-6">
                Full-scale 1-on-1 coaching designed to guarantee high retention and overcome exam anxiety.
              </p>
              <ul className="space-y-3 text-slate-300 text-sm mb-8">
                <li className="flex items-center gap-2 font-medium text-indigo-300">★ Everything in Tier 1 PLUS:</li>
                <li className="flex items-center gap-2">✓ Private Weekly 1-on-1 Strategy & Question Breakdown Calls</li>
                <li className="flex items-center gap-2">✓ Direct 1-on-1 WhatsApp Access to Your Mentor</li>
                <li className="flex items-center gap-2">✓ Live NBME Test-Taking Strategy & Elimination Methods</li>
                <li className="flex items-center gap-2">✓ Custom Scheduling Around Hospital Shifts / Rotations</li>
              </ul>
            </div>
            <button
              onClick={() => handleOpenBooking('Tier 2 - VIP 1-on-1')}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-indigo-600/30"
            >
              Apply For VIP 1-on-1 Mentorship
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} USMLE Step 1 Mentorship. All rights reserved.</p>
      </footer>
    </div>
  );
}
