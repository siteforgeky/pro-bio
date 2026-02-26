import Link from 'next/link';
import { ArrowRight, Wrench, ShieldCheck, Zap, Star } from 'lucide-react';
import { ResultsMarquee } from '@/components/ResultsMarquee';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Wrench className="w-6 h-6 text-brand-amber" />
          <span className="text-xl font-heading font-bold text-slate-100 tracking-wider">
            FIX<span className="text-brand-amber">ARA</span>
          </span>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors hidden sm:block">Log In</Link>
          <form action="/onboarding" className="flex items-center bg-zinc-900 border border-zinc-700/50 rounded-lg p-1 focus-within:border-brand-amber focus-within:ring-1 focus-within:ring-brand-amber transition-all shadow-sm">
            <div className="flex items-center px-2">
              <span className="text-slate-400 text-sm font-medium hidden sm:inline">fixara.app/</span>
              <input
                type="text"
                name="slug"
                placeholder="yourcompany"
                className="bg-transparent border-none outline-none text-slate-100 placeholder:text-zinc-600 font-bold text-sm w-[100px] sm:w-[130px]"
              />
            </div>
            <button type="submit" className="bg-brand-amber text-zinc-950 px-3 py-1.5 rounded-md font-bold text-sm hover:bg-amber-400 transition-colors">
              Claim
            </button>
          </form>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section className="px-6 py-12 md:py-24 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Column (Content) */}
          <div className="flex-1 flex flex-col items-start text-left max-w-2xl relative z-10">
            {/* Trust Badge */}
            <div className="flex items-center gap-3 mb-8 bg-zinc-900/80 p-2 pr-4 rounded-full border border-zinc-800 shadow-sm backdrop-blur-sm shadow-brand-amber/5">
              <div className="flex bg-zinc-950 p-1.5 rounded-full border border-zinc-800">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-brand-amber text-brand-amber" />)}
              </div>
              <span className="text-slate-300 text-xs font-bold uppercase tracking-wider">Trusted by 1,000+ Contractors</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-slate-50 tracking-tight leading-tight mb-6">
              The Website for Pros <br className="hidden md:block" /> who
              <span className="bg-brand-amber text-zinc-950 px-4 py-1 mx-1 md:mx-3 rounded-lg font-mono tracking-tighter -rotate-3 inline-block shadow-[4px_4px_0px_#18181b] border-2 border-zinc-950 align-middle">HATE</span> Websites.
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-10 font-sans leading-relaxed max-w-xl">
              Plumbers, Electricians, Landscapers, and HVAC techs: stop losing customers to complicated website builders. Get a rugged, mobile-first profile ready in 3 minutes.
            </p>

            <form action="/onboarding" className="flex flex-col sm:flex-row items-center w-full max-w-lg bg-zinc-900 border border-zinc-700/50 rounded-xl p-1.5 focus-within:border-brand-amber focus-within:ring-1 focus-within:ring-brand-amber transition-all shadow-xl">
              <div className="flex items-center flex-1 px-4 w-full sm:w-auto h-14 sm:h-auto">
                <span className="text-slate-400 text-lg font-medium pr-1">fixara.app/</span>
                <input
                  type="text"
                  name="slug"
                  placeholder="yourcompany"
                  className="bg-transparent border-none outline-none text-slate-100 placeholder:text-zinc-600 font-bold text-lg w-full min-w-[120px]"
                />
              </div>
              <button type="submit" className="w-full sm:w-auto mt-2 sm:mt-0 flex items-center justify-center gap-2 bg-brand-amber text-zinc-950 px-8 h-14 rounded-lg font-black text-lg hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                Claim My Page <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            {/* Feature Pills */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1.5 text-xs font-bold text-slate-300 bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800 shadow-inner">
                <Zap className="w-3.5 h-3.5 text-blue-400" /> Forever Free Plan
              </span>
              <span className="flex items-center gap-1.5 text-xs font-bold text-slate-300 bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800 shadow-inner">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Live in 3 Minutes
              </span>
              <span className="flex items-center gap-1.5 text-xs font-bold text-slate-300 bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800 shadow-inner">
                <ArrowRight className="w-3.5 h-3.5 text-brand-amber" /> Share Anywhere
              </span>
            </div>
          </div>

          {/* Right Column (Visual Mockup) */}
          <div className="flex-1 w-full max-w-md relative mt-16 lg:mt-0 lg:ml-8 pointer-events-none select-none">
            {/* Background glowing blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-brand-amber/10 blur-[100px] rounded-full z-0"></div>

            <div className="relative w-full max-w-[320px] mx-auto z-10">

              {/* Phone Frame Mockup */}
              <div className="bg-zinc-950 border-[8px] border-zinc-800 rounded-[3rem] overflow-hidden shadow-2xl relative aspect-[9/19] ring-1 ring-zinc-700">
                {/* Dynamic Island fake */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-zinc-900 rounded-full z-20 border border-zinc-800/50 shadow-inner"></div>

                {/* Phone screen content */}
                <div className="h-full w-full bg-zinc-950 flex flex-col pt-16 px-5 pb-5 relative overflow-hidden">
                  {/* Subtle background gradient for depth */}
                  <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-zinc-900/50 to-transparent z-0"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-zinc-900 rounded-2xl border border-zinc-800 shadow-inner flex items-center justify-center mb-4">
                      <Wrench className="w-8 h-8 text-brand-amber" />
                    </div>
                    <h3 className="text-xl font-heading font-black text-center text-slate-100 mb-1 leading-none">Mike's Construction</h3>
                    <p className="text-[9px] uppercase tracking-widest text-brand-amber text-center font-bold mb-6 bg-brand-amber/10 px-2.5 py-1 rounded-full border border-brand-amber/20">
                      General Contractor
                    </p>

                    <div className="flex justify-center gap-4 text-[10px] text-slate-400 mb-6 font-medium w-full border-b border-zinc-800 pb-5">
                      <span className="flex items-center gap-1.5"><Zap className="w-3 h-3 text-yellow-500" /> Austin, TX</span>
                      <span className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3 text-emerald-500" /> Lic #84729</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 w-full mb-6">
                      <div className="bg-zinc-900 rounded-xl py-3 text-center text-xs font-bold text-slate-300 border border-zinc-800 shadow-sm flex flex-col items-center gap-1">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Email</span>
                        ✉️ Message
                      </div>
                      <div className="bg-zinc-900 rounded-xl py-3 text-center text-xs font-bold text-slate-300 border border-zinc-800 shadow-sm flex flex-col items-center gap-1 text-emerald-400 border-zinc-800 hover:bg-zinc-800 transition-colors">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Call Now</span>
                        📞 Connect
                      </div>
                    </div>

                    <div className="bg-zinc-900/50 rounded-2xl p-4 border border-zinc-800/50 w-full mb-6">
                      <h4 className="text-[10px] font-bold text-slate-500 mb-3 uppercase tracking-wider flex items-center gap-2">Our Services</h4>
                      <div className="flex flex-col gap-2">
                        <div className="bg-zinc-900 border border-zinc-800 text-xs px-3 py-2 rounded-lg text-slate-300 font-medium flex items-center gap-2 relative overflow-hidden">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-amber rounded-l-lg"></div>
                          Kitchen Remodeling
                        </div>
                        <div className="bg-zinc-900 border border-zinc-800 text-xs px-3 py-2 rounded-lg text-slate-300 font-medium flex items-center gap-2 relative overflow-hidden">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-amber rounded-l-lg"></div>
                          Bathroom Renovation
                        </div>
                        <div className="bg-zinc-900 border border-zinc-800 text-xs px-3 py-2 rounded-lg text-slate-300 font-medium opacity-50">
                          + 4 more services...
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto w-full bg-brand-amber shadow-[0_0_20px_rgba(245,158,11,0.2)] text-zinc-950 text-center py-3.5 rounded-xl font-black text-sm">
                      Request Estimate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Proof Section */}
        <section className="w-full flex justify-center">
          <ResultsMarquee />
        </section>

        {/* Transition Header */}
        <section className="w-full max-w-4xl mx-auto px-6 pt-24 pb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-bold text-red-400 mb-6 font-mono tracking-wide uppercase">
            <span className="text-red-500 text-base leading-none">⚠</span> Don't Look Like An Amateur
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-50 tracking-tight leading-tight">
            Stop Losing High-Paying Jobs to <br className="hidden md:block" />
            <span className="text-brand-amber">Guys With Better Websites</span>
          </h2>
        </section>

        {/* Logo Cloud - Trust Building */}
        <section className="w-full bg-zinc-950 py-10 border-b border-zinc-900 border-t border-zinc-900/50">
          <div className="max-w-4xl mx-auto px-6 text-center text-slate-500 font-bold uppercase tracking-widest text-xs flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 opacity-60">
            <span className="hidden md:inline mr-4">Trusted by Pros via:</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-lg leading-none tracking-normal">BBB</span> A+ Rated
            </div>
            <div className="flex items-center gap-2">
              <span className="font-sans font-black text-lg leading-none tracking-normal">OSHA</span> Compliant
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full border-t border-zinc-900 bg-zinc-900/50">
          <div className="px-6 py-24 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 text-brand-amber border border-zinc-700">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-100 mb-3">Live in 3 Minutes</h3>
                <p className="text-slate-400">Forget dragging and dropping. Answer three questions, and your business card is live on the internet.</p>
                <div className="mt-4 flex items-center gap-2 text-[10px] font-mono font-bold text-brand-amber bg-brand-amber/10 px-3 py-1.5 rounded-full border border-brand-amber/20">
                  <span>1. CLAIM</span> <ArrowRight className="w-3 h-3 text-zinc-500" /> <span>2. DETAILS</span> <ArrowRight className="w-3 h-3 text-zinc-500" /> <span>3. LIVE</span>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 text-brand-amber border border-zinc-700">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-100 mb-3">Build Trust Instantly</h3>
                <p className="text-slate-400">Showcase your license number and trade category front and center so customers know you are legit.</p>
              </div>
              <div className="flex flex-col items-center text-center group cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 text-red-500 border border-zinc-700 group-hover:border-red-500/50 transition-colors">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-8 h-8 rounded-full bg-red-500/0 group-hover:bg-red-500/30 group-hover:animate-ping transition-all duration-300"></span>
                    <div className="w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)] group-hover:scale-110 transition-transform"></div>
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-100 mb-3">Emergency Pulse</h3>
                <p className="text-slate-400">Toggle emergency availability with one tap to get high-paying, after-hours jobs directly.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900 py-12 pb-32 md:pb-12 text-center text-slate-500 text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} Fixara. All rights reserved.</p>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 pb-6 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-transparent pt-12 z-50 md:hidden flex justify-center pointer-events-none">
        <div className="pointer-events-auto w-full max-w-sm">
          <Link href="/onboarding" className="w-full flex items-center justify-center gap-2 bg-brand-amber text-zinc-950 h-16 rounded-2xl font-black text-xl shadow-[0_4px_30px_rgba(245,158,11,0.3)] active:scale-95 transition-all">
            Claim Profile <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
