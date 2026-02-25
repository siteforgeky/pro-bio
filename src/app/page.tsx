import Link from 'next/link';
import { ArrowRight, Wrench, ShieldCheck, Zap } from 'lucide-react';
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
          <Link href="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Log In</Link>
          <Link href="/onboarding" className="text-sm font-medium bg-brand-amber text-zinc-950 px-4 py-2 rounded-md hover:bg-amber-400 transition-colors font-bold">Get Started</Link>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section className="px-6 py-24 md:py-32 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-sm text-slate-300 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-brand-amber"></span>
            Built exclusively for trades businesses
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-slate-50 tracking-tight leading-tight mb-6">
            The Website for Pros <br className="hidden md:block" /> who <span className="bg-brand-amber text-zinc-950 px-4 py-1 mx-1 md:mx-3 rounded-lg font-mono tracking-tighter -rotate-3 inline-block shadow-[4px_4px_0px_#18181b] border-2 border-zinc-950 align-middle">HATE</span> Websites.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto mb-10 font-sans leading-relaxed">
            Plumbers, Electricians, Landscapers, and HVAC techs: stop losing customers to complicated website builders. Get a rugged, mobile-first profile ready in 3 minutes.
          </p>
          <form action="/onboarding" className="flex flex-col sm:flex-row items-center w-full max-w-lg mx-auto bg-zinc-900 border border-zinc-700/50 rounded-xl p-1.5 focus-within:border-brand-amber focus-within:ring-1 focus-within:ring-brand-amber transition-all shadow-xl">
            <div className="flex items-center flex-1 px-4 w-full sm:w-auto h-14 sm:h-auto">
              <span className="text-slate-400 text-lg font-medium pr-1">fixara.app/</span>
              <input
                type="text"
                name="slug"
                placeholder="your-name"
                className="bg-transparent border-none outline-none text-slate-100 placeholder:text-zinc-600 font-bold text-lg w-full min-w-[120px]"
              />
            </div>
            <button type="submit" className="w-full sm:w-auto mt-2 sm:mt-0 flex items-center justify-center gap-2 bg-brand-amber text-zinc-950 px-8 h-14 rounded-lg font-black text-lg hover:bg-amber-400 transition-all">
              Claim Now <ArrowRight className="w-5 h-5" />
            </button>
          </form>
          <p className="mt-4 text-sm text-slate-500">No credit card required. Free forever plan available.</p>
        </section>

        {/* The Proof Section */}
        <section className="w-full flex justify-center">
          <ResultsMarquee />
        </section>

        {/* Logo Cloud - Trust Building */}
        <section className="w-full bg-zinc-950 py-10 border-b border-zinc-900 border-t border-zinc-900/50 mt-[-1px]">
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
