import SaaSCalc from '@/components/SaaSCalc';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-8 pb-20 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 md:gap-12 w-full max-w-5xl">
        <header className="flex justify-between items-center w-full py-4 border-b border-foreground/10">
          <div className="text-2xl font-bold tracking-tighter">SaaSCalc</div>
          <nav>
            <ul className="flex gap-6 text-sm font-medium">
              <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </nav>
        </header>

        <div className="flex flex-col items-center justify-center text-center py-16 md:py-24 space-y-8">
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
            🚀 New: AI-Powered Benchmarks
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl">
            Calculate your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">SaaS LTV & CAC</span> in seconds.
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">
            Stop guessing your unit economics. Plug in your metrics and instantly uncover actionable insights for your B2B SaaS.
          </p>
          
          <div className="w-full max-w-3xl mt-8 rounded-2xl border border-foreground/10 bg-surface dark:bg-surface-dark backdrop-blur-xl p-8 shadow-2xl">
            <SaaSCalc />
          </div>
        </div>

      </main>
      
      <footer className="w-full border-t border-foreground/10 mt-auto py-8 text-center text-sm text-foreground/50">
        © 2026 SaaSCalc Inc. All rights reserved.
      </footer>
    </div>
  );
}
