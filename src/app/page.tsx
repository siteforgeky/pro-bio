import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { ArrowRight, Zap, ShieldCheck, Wrench, Quote } from 'lucide-react';
import { TypewriterSlogan } from '@/components/TypewriterSlogan';

const testimonials = [
  {
    name: "Dave Robertson",
    role: "Master Electrician",
    quote: "I used to lose jobs because my website looked like it was from 1999. Since switching to Rovult, I've booked three $10k+ commercial jobs. They said my site made me look like the most professional guy in town.",
    image: "https://images.unsplash.com/photo-1621905252507-846ce23f8b8a?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Sarah Jenkins",
    role: "HVAC Specialist",
    quote: "The emergency pulse feature paid for this thing ten times over in my first week. A property manager hit me up at 2 AM for a busted AC because my site showed I was available right then.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Marcus Thorne",
    role: "General Contractor",
    quote: "Building a website felt like a distraction from the actual work. With Rovult, I had a custom, beautiful profile up while sitting in my truck eating lunch. Best tool in my truck right now.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#09090b] text-slate-100 overflow-hidden">
      {/* Header */}
      <header className="px-6 py-5 flex items-center justify-between border-b border-zinc-800/80 bg-[#09090b]/90 backdrop-blur-xl sticky top-0 z-50">
        <Logo />
        <nav className="flex items-center gap-6">
          <Link href="/sign-in" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors hidden sm:block">Log In</Link>
          <form action="/onboarding" className="flex items-center bg-zinc-900 border border-zinc-700/60 rounded-lg p-1.5 focus-within:border-brand-amber/70 focus-within:ring-2 focus-within:ring-brand-amber/20 focus-within:shadow-[0_0_15px_rgba(245,158,11,0.1)] transition-all shadow-sm">
            <div className="flex items-center px-3">
              <span className="text-slate-500 text-sm font-semibold hidden sm:inline mr-1">rovult.com/</span>
              <input
                type="text"
                name="slug"
                placeholder="yourcompany"
                className="bg-transparent border-none outline-none text-slate-100 placeholder:text-zinc-600 font-bold text-sm w-[110px] sm:w-[140px]"
              />
            </div>
            <button type="submit" className="bg-gradient-to-br from-brand-amber to-amber-600 text-zinc-950 px-4 py-2 rounded-md font-bold text-sm hover:from-amber-400 hover:to-brand-amber hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all">
              Claim Link
            </button>
          </form>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section className="px-6 py-16 md:py-32 w-full max-w-[90rem] mx-auto flex flex-col xl:flex-row items-center justify-between gap-20">
          {/* Left Column (Content) */}
          <div className="flex-1 flex flex-col items-start text-left max-w-3xl relative z-10 w-full">

            {/* Premium Trust Badge */}
            <div className="inline-flex items-center gap-4 mb-10 bg-zinc-900/50 p-2 pr-6 rounded-full border border-zinc-800 backdrop-blur-md shadow-lg shadow-black">
              <div className="flex -space-x-3 rtl:space-x-reverse ml-1">
                <img className="w-8 h-8 rounded-full border-2 border-zinc-900" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100&h=100" alt="Pro 1" />
                <img className="w-8 h-8 rounded-full border-2 border-zinc-900" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100" alt="Pro 2" />
                <img className="w-8 h-8 rounded-full border-2 border-zinc-900" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=100&h=100" alt="Pro 3" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-slate-200 text-xs font-bold leading-tight flex items-center gap-1.5 cursor-default">
                  <span className="text-yellow-500 text-[10px]">★★★★★</span>
                  "Got my first leads in 24 hrs."
                </span>
                <span className="text-slate-500 text-[10px] font-semibold uppercase tracking-wider">Trusted by 2,500+ Top Tradesmen</span>
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-black text-slate-50 tracking-tighter leading-[1.05] mb-8 w-full max-w-4xl">
              The Website for <br className="hidden md:block" /> Pros who <br className="md:hidden" />
              <TypewriterSlogan />
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 mb-12 font-sans font-medium leading-relaxed max-w-2xl">
              Stop losing high-paying jobs to guys with better websites. Get a heavy-duty, mobile-first profile ready while sitting in your truck.
            </p>

            <form action="/onboarding" className="flex flex-col sm:flex-row items-stretch w-full max-w-2xl bg-zinc-900/80 border border-zinc-700/60 rounded-2xl p-2 focus-within:border-brand-amber/80 focus-within:ring-4 focus-within:ring-brand-amber/10 transition-all shadow-2xl shadow-black/50">
              <div className="flex items-center flex-1 px-5 h-16 sm:h-auto">
                <span className="text-slate-500 text-xl font-bold pr-1">rovult.com/</span>
                <input
                  type="text"
                  name="slug"
                  placeholder="yourcompany"
                  className="bg-transparent border-none outline-none text-slate-50 placeholder:text-zinc-600 font-extrabold text-xl w-full min-w-[150px]"
                />
              </div>
              <button type="submit" className="w-full sm:w-auto mt-3 sm:mt-0 flex items-center justify-center gap-3 bg-gradient-to-br from-brand-amber to-amber-600 text-zinc-950 px-10 h-16 rounded-xl font-black text-xl hover:from-amber-400 hover:to-brand-amber transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] transform hover:-translate-y-0.5">
                Build It <ArrowRight className="w-6 h-6 stroke-[3]" />
              </button>
            </form>

            {/* Feature Checkmarks */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm font-semibold text-slate-400">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" /> Free Forever Plan
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" /> No Coding Required
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" /> Optimized for SEO
              </span>
            </div>
          </div>

          {/* Right Column (Visual Mockup) */}
          <div className="flex-1 w-full max-w-lg xl:max-w-xl relative mt-20 xl:mt-0 xl:ml-12 pointer-events-none select-none drop-shadow-2xl flex justify-end">
            {/* Background glowing blob */}
            <div className="absolute top-1/2 right-0 lg:left-1/2 lg:-translate-x-1/2 -translate-y-1/2 w-[140%] h-[120%] bg-brand-amber/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

            <div className="relative w-full max-w-[360px] lg:max-w-[400px] z-10 mx-auto xl:mx-0 xl:mr-8 transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">

              {/* Heavy Phone Frame Mockup */}
              <div className="bg-[#0f0f11] border-[10px] border-zinc-800 rounded-[3.5rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] relative aspect-[9/19] ring-1 ring-zinc-700/50">
                {/* Dynamic Island fake */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-full z-20 shadow-inner"></div>

                {/* Phone screen content */}
                <div className="h-full w-full bg-[#0a0a0c] flex flex-col pt-20 px-6 pb-6 relative overflow-hidden">
                  {/* Subtle background gradient for depth */}
                  <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-zinc-800/20 to-transparent z-0"></div>

                  <div className="relative z-10 flex flex-col items-center flex-1">
                    <div className="w-20 h-20 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-[1.5rem] border border-zinc-700/50 shadow-xl flex items-center justify-center mb-5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-brand-amber/5"></div>
                      <Wrench className="w-10 h-10 text-brand-amber relative z-10" />
                    </div>

                    <h3 className="text-2xl font-heading font-black text-center text-slate-50 mb-1.5 leading-none">Apex Plumbing</h3>
                    <p className="text-[10px] uppercase tracking-widest text-brand-amber text-center font-bold mb-8 bg-brand-amber/10 px-3 py-1 rounded-full border border-brand-amber/20 w-fit mx-auto">
                      Master Plumber
                    </p>

                    <div className="flex justify-center gap-5 text-xs text-slate-400 mb-8 font-semibold w-full border-b border-zinc-800/80 pb-6">
                      <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-blue-400" /> Dallas, TX</span>
                      <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Lic #MP8472</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 w-full mb-8">
                      <div className="bg-zinc-900/80 rounded-2xl py-3.5 text-center text-sm font-bold text-slate-300 border border-zinc-700/50 shadow-md flex flex-col items-center gap-1 hover:bg-zinc-800 transition-colors cursor-pointer">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Email</span>
                        ✉️ Quote
                      </div>
                      <div className="bg-zinc-900/80 rounded-2xl py-3.5 text-center text-sm font-bold text-slate-300 border border-zinc-700/50 shadow-md flex flex-col items-center gap-1 text-emerald-400 hover:bg-zinc-800 transition-colors cursor-pointer">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Call Now</span>
                        📞 Connect
                      </div>
                    </div>

                    <div className="bg-zinc-900/40 rounded-2xl p-5 border border-zinc-800 w-full mb-6">
                      <h4 className="text-[11px] font-bold text-slate-400 mb-4 uppercase tracking-widest flex items-center gap-2">Featured Services</h4>
                      <div className="flex flex-col gap-2.5">
                        <div className="bg-zinc-900 border border-zinc-750 text-xs px-3.5 py-2.5 rounded-xl text-slate-200 font-semibold flex items-center gap-3 relative overflow-hidden shadow-sm">
                          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-amber"></div>
                          Water Heater Repair
                        </div>
                        <div className="bg-zinc-900 border border-zinc-750 text-xs px-3.5 py-2.5 rounded-xl text-slate-200 font-semibold flex items-center gap-3 relative overflow-hidden shadow-sm">
                          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-amber"></div>
                          Pipe Leak Detection
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto w-full bg-gradient-to-br from-brand-amber to-amber-600 shadow-[0_0_20px_rgba(245,158,11,0.2)] text-zinc-950 text-center py-4 rounded-[1rem] font-black text-sm uppercase tracking-wide">
                      Request Estimate
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transition Header */}
        <section className="w-full max-w-5xl mx-auto px-6 pt-32 pb-16 text-center border-t border-zinc-900">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-bold text-red-400 mb-8 font-mono tracking-wide uppercase">
            <span className="text-red-500 text-lg leading-none">⚠</span> Don't Look Like An Amateur
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-black text-slate-50 tracking-tighter leading-tight max-w-4xl mx-auto">
            Your website shouldn't cost $3,000. <br className="hidden lg:block" />
            <span className="text-brand-amber">And it shouldn't look cheap either.</span>
          </h2>
        </section>

        {/* Testimonials (Real Social Proof) */}
        <section className="w-full px-6 pb-40 border-b border-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 flex flex-col items-start text-left shadow-xl hover:border-zinc-700 transition-colors">
                  <Quote className="w-10 h-10 text-brand-amber/20 mb-6" />
                  <p className="text-lg text-slate-300 font-medium leading-relaxed mb-8 flex-1">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4 w-full pt-6 border-t border-zinc-800/60">
                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-zinc-800 object-cover" />
                    <div>
                      <h4 className="text-slate-100 font-bold font-heading text-lg">{t.name}</h4>
                      <p className="text-brand-amber font-semibold text-xs tracking-wider uppercase">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Logo Cloud - Trust Building (Refined) */}
        <section className="w-full bg-[#0a0a0c] py-16">
          <div className="max-w-5xl mx-auto px-6 text-center text-slate-500 font-bold uppercase tracking-widest text-sm flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-60">
            <span className="hidden md:inline mr-4">Trusted by Pros via:</span>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6" /> Licensed & Insured
            </div>
            <div className="flex items-center gap-3">
              <span className="font-heading text-2xl leading-none tracking-normal">BBB</span> A+ Rated
            </div>
            <div className="flex items-center gap-3">
              <span className="font-sans font-black text-2xl leading-none tracking-normal">OSHA</span> Compliant
            </div>
          </div>
        </section>

        {/* Heavy Features Section */}
        <section className="w-full bg-zinc-950/50">
          <div className="px-6 py-32 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-16">
              <div className="flex flex-col items-start text-left">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6 text-brand-amber border border-zinc-800 shadow-lg">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-black text-slate-100 mb-4 tracking-tight">Live in 3 Minutes</h3>
                <p className="text-slate-400 text-lg leading-relaxed">Forget dragging and dropping. Answer three questions, and your business card is live on the internet.</p>
              </div>
              <div className="flex flex-col items-start text-left">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6 text-brand-amber border border-zinc-800 shadow-lg">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-heading font-black text-slate-100 mb-4 tracking-tight">Build Trust Instantly</h3>
                <p className="text-slate-400 text-lg leading-relaxed">Showcase your license number and trade category front and center so customers know you are absolutely legit.</p>
              </div>
              <div className="flex flex-col items-start text-left group cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6 text-red-500 border border-zinc-800 shadow-lg group-hover:border-red-500/50 transition-colors">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-10 h-10 rounded-full bg-red-500/0 group-hover:bg-red-500/20 group-hover:animate-ping transition-all duration-500"></span>
                    <div className="w-5 h-5 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)] group-hover:scale-110 transition-transform"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-black text-slate-100 mb-4 tracking-tight">Emergency Pulse</h3>
                <p className="text-slate-400 text-lg leading-relaxed">Toggle emergency availability with one tap to intercept high-paying, after-hours jobs directly.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900 py-16 pb-32 md:pb-16 text-center text-slate-500 text-sm relative z-10 flex flex-col items-center gap-6 bg-[#09090b]">
        <div className="flex gap-8 font-semibold">
          <Link href="/tos" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
        </div>
        <p className="font-medium">&copy; {new Date().getFullYear()} Rovult. All rights reserved.</p>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 w-full p-6 pb-8 bg-gradient-to-t from-[#09090b] via-[#09090b]/95 to-transparent pt-16 z-50 md:hidden flex justify-center pointer-events-none">
        <div className="pointer-events-auto w-full max-w-sm">
          <Link href="/onboarding" className="w-full flex items-center justify-center gap-3 bg-gradient-to-br from-brand-amber to-amber-600 text-zinc-950 h-16 rounded-2xl font-black text-xl shadow-[0_10px_40px_rgba(245,158,11,0.4)] active:scale-95 transition-all">
            Build It Now <ArrowRight className="w-6 h-6 stroke-[3]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
