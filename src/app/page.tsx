import SaaSCalc from '@/components/SaaSCalc';
import { Search, Compass, Zap, Link } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center pb-20 font-sans selection:bg-blue-100">
      
      {/* Header */}
      <header className="flex w-full justify-between items-center max-w-7xl px-6 py-4">
        <div className="flex items-center gap-8">
          <div className="text-xl font-bold tracking-tight text-slate-900">SaaSCalc</div>
          <div className="hidden md:flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-500 w-64 border border-transparent hover:border-slate-200 transition-colors cursor-text">
            <Search className="w-4 h-4 mr-2" />
            Search metrics...
          </div>
        </div>
        <nav className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <li><a href="#" className="hover:text-slate-900 transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-slate-900 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-slate-900 transition-colors">Docs</a></li>
          </ul>
          <button className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
            Sign In
          </button>
        </nav>
      </header>

      <main className="flex flex-col items-center w-full px-4 mt-20 md:mt-32">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center space-y-6 max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Empower Your Startup to Access <br className="hidden md:inline" />
            Real-World <span className="text-blue-600">Unit Economics</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl font-medium">
            Stop guessing your LTV and CAC. Plug in your metrics and instantly uncover actionable insights with our semantic SaaS calculator engine.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-sm">
              Start Calculating
            </button>
            <button className="bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-full font-medium hover:bg-slate-50 transition-colors shadow-sm">
              View Benchmarks
            </button>
          </div>
        </div>

        {/* Calculator Component */}
        <div className="w-full max-w-4xl mt-24 mb-32">
          <SaaSCalc />
        </div>

        {/* SEO Features Section (Qveris Style) */}
        <div className="w-full max-w-7xl px-4 flex flex-col items-center mb-32">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4 text-center">
            Why Choose SaaSCalc
          </h2>
          <p className="text-slate-500 text-center max-w-2xl mb-16">
            Built for SaaS founders and investors. Smart semantic routing, unified execution protocols, and live real-world data.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {/* Feature 1 */}
            <div className="flex flex-col border border-slate-200 rounded-2xl p-8 bg-white hover:border-blue-200 transition-colors hover:shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                 <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Semantic Tool Discovery</h3>
              <p className="text-sm text-slate-500 flex-grow mb-6">
                Understand what is a good LTV:CAC ratio by describing your SaaS vertical in natural language. We route you to the right benchmarks.
              </p>
              <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-700 mt-auto">Learn More</a>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col border border-slate-200 rounded-2xl p-8 bg-white hover:border-blue-200 transition-colors hover:shadow-sm">
               <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                 <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Unified Execution</h3>
              <p className="text-sm text-slate-500 flex-grow mb-6">
                Execute any discovered growth models with structured parameters and get machine-readable JSON responses for your dashboard.
              </p>
              <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-700 mt-auto">View Docs</a>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col border border-slate-200 rounded-2xl p-8 bg-white hover:border-blue-200 transition-colors hover:shadow-sm">
               <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                 <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Wide Coverage</h3>
              <p className="text-sm text-slate-500 flex-grow mb-6">
                Financial markets, B2B enterprise, PLG models, fintech, healthcare tech, developer tools, and thousands more verticals covered.
              </p>
              <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-700 mt-auto">10,000+ Metrics</a>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col border border-slate-200 rounded-2xl p-8 bg-white hover:border-blue-200 transition-colors hover:shadow-sm">
               <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                 <Link className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Zero Extra Dependencies</h3>
              <p className="text-sm text-slate-500 flex-grow mb-6">
                Calculate everything directly in your browser. No Python, no uv, no npm install required. Instant edge computing.
              </p>
              <a href="#" className="text-blue-600 text-sm font-medium hover:text-blue-700 mt-auto">Try it now</a>
            </div>
          </div>
        </div>

        {/* FAQ & Citability Block */}
        <div className="w-full max-w-4xl px-4 flex flex-col items-center mb-32 text-left">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What is a good LTV:CAC ratio?</h2>
            <p className="text-slate-600 leading-relaxed">
              A good LTV:CAC ratio for B2B SaaS companies is generally considered to be 3:1 or higher. This fundamental unit economics metric means that the Customer Lifetime Value (LTV) is exactly three times greater than the Customer Acquisition Cost (CAC). For example, if your startup spends $1,000 on marketing and sales to acquire a new customer, that specific customer account should generate a minimum of $3,000 in gross margin revenue throughout their entire business relationship. Recent industry research indicates that top-performing enterprise software businesses often achieve expansion ratios of 4:1 or even 5:1. This performance level signifies highly efficient, scalable growth engines. Conversely, any ratio falling below 1:1 means the company actively loses money on every single new customer acquired, leading to rapid cash burn. Maintaining a healthy 3:1 LTV:CAC ratio alongside a payback period of under 12 months ensures sustainable, long-term profitability in today's highly competitive SaaS and software environments.
            </p>
          </div>
        </div>

      </main>
      
      <footer className="w-full max-w-7xl px-6 border-t border-slate-200 mt-auto py-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
        <div className="mb-4 md:mb-0">© 2026 SaaSCalc LLC</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-900 transition-colors">X (Twitter)</a>
          <a href="#" className="hover:text-slate-900 transition-colors">GitHub</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
        </div>
      </footer>
    </div>
  );
}
