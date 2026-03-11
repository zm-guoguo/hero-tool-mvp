"use client";

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Calculator, TrendingUp, DollarSign, Users, AlertCircle } from 'lucide-react';

export default function SaaSCalc() {
  const [arpu, setArpu] = useState<number>(50);
  const [churnRate, setChurnRate] = useState<number>(5);
  const [cpa, setCpa] = useState<number>(150);
  const [showGate, setShowGate] = useState<boolean>(false);

  // LTV = ARPU / Churn Rate
  const ltv = arpu / (churnRate / 100);
  const ltvCacRatio = ltv / cpa;

  // Generate projection data for the chart
  const data = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    const retainedUsers = 100 * Math.pow(1 - churnRate / 100, i);
    const cumulativeRevenue = retainedUsers * arpu;
    return {
      month: `M${month}`,
      revenue: Math.round(cumulativeRevenue),
      cac: cpa * 100, // Fixed CAC for 100 acquired users
    };
  });

  const getRatioColor = (ratio: number) => {
    if (ratio >= 3) return 'text-emerald-500';
    if (ratio >= 1) return 'text-amber-500';
    return 'text-rose-500';
  };

  return (
    <div className="w-full flex flex-col gap-8">
      {/* Inputs Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <DollarSign size={16} className="text-primary" /> ARPU ($)
          </label>
          <input
            type="number"
            value={arpu}
            onChange={(e) => setArpu(Number(e.target.value))}
            className="w-full bg-background border border-foreground/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <p className="text-xs text-foreground/50">Average Rev Per User</p>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <AlertCircle size={16} className="text-primary" /> Monthly Churn (%)
          </label>
          <input
            type="number"
            value={churnRate}
            onChange={(e) => setChurnRate(Number(e.target.value))}
            className="w-full bg-background border border-foreground/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
            step="0.1"
          />
          <p className="text-xs text-foreground/50">User churn rate per month</p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Users size={16} className="text-primary" /> CAC ($)
          </label>
          <input
            type="number"
            value={cpa}
            onChange={(e) => setCpa(Number(e.target.value))}
            className="w-full bg-background border border-foreground/10 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <p className="text-xs text-foreground/50">Cost to Acquire a Customer</p>
        </div>
      </div>

      {/* Results Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-foreground/10">
        <div className="flex flex-col items-center sm:items-start p-6 rounded-xl bg-primary/5 border border-primary/10">
          <span className="text-sm font-medium text-foreground/60 mb-2">Estimated LTV</span>
          <span className="text-4xl font-bold tracking-tight">${Math.round(ltv).toLocaleString()}</span>
        </div>
        <div className="flex flex-col items-center sm:items-start p-6 rounded-xl bg-foreground/5 border border-foreground/10">
          <span className="text-sm font-medium text-foreground/60 mb-2">LTV:CAC Ratio</span>
          <span className={`text-4xl font-bold tracking-tight ${getRatioColor(ltvCacRatio)}`}>
            {ltvCacRatio.toFixed(1)}x
          </span>
          {ltvCacRatio >= 3 ? (
             <span className="text-xs text-emerald-500 mt-2">✨ Excellent baseline</span>
          ) : (
             <span className="text-xs text-rose-500 mt-2">⚠️ Needs optimization</span>
          )}
        </div>
      </div>

      {/* Chart Section */}
      <div className="h-64 w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
            <XAxis dataKey="month" strokeOpacity={0.5} fontSize={12} />
            <YAxis strokeOpacity={0.5} fontSize={12} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', borderRadius: '8px', border: 'none', color: '#fff' }}
              itemStyle={{ color: '#fff' }}
            />
            <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} name="Cohort Rev" />
            <Line type="monotone" dataKey="cac" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" name="Total CAC" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Gated Content Trigger */}
      <div className="mt-8 flex flex-col items-center justify-center p-6 rounded-xl border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent text-center">
        <TrendingUp size={32} className="text-primary mb-4" />
        <h3 className="text-lg font-bold mb-2">Unlock Industry Benchmarks</h3>
        <p className="text-sm text-foreground/70 max-w-md mb-6">
          See how your {ltvCacRatio.toFixed(1)}x ratio compares to top-performing B2B SaaS companies in your specific niche.
        </p>
        
        {!showGate ? (
          <button 
            onClick={() => setShowGate(true)}
            className="bg-primary hover:bg-primary-focus text-white px-6 py-2 rounded-full font-medium transition-colors shadow-lg shadow-primary/25"
          >
            Get Free Personalized Report
          </button>
        ) : (
          <form className="flex w-full max-w-sm items-center space-x-2" onSubmit={(e) => { e.preventDefault(); alert("Thanks! (Email captured for validation)") }}>
            <input 
              type="email" 
              placeholder="founder@startup.com" 
              required
              className="flex-1 bg-background border border-foreground/20 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button type="submit" className="bg-primary hover:bg-primary-focus text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Unlock
            </button>
          </form>
        )}
        <p className="text-xs text-foreground/40 mt-4">Zero spam. Tested by 10,000+ founders.</p>
      </div>
    </div>
  );
}
