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
    <div className="w-full flex flex-col gap-8 bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
      {/* Inputs Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold flex items-center gap-2 text-slate-900">
            <DollarSign size={16} className="text-blue-600" /> ARPU ($)
          </label>
          <input
            type="number"
            value={arpu}
            onChange={(e) => setArpu(Number(e.target.value))}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-shadow"
          />
          <p className="text-xs text-slate-500 font-medium">Average Rev Per User</p>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-semibold flex items-center gap-2 text-slate-900">
            <AlertCircle size={16} className="text-blue-600" /> Monthly Churn (%)
          </label>
          <input
            type="number"
            value={churnRate}
            onChange={(e) => setChurnRate(Number(e.target.value))}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-shadow"
            step="0.1"
          />
          <p className="text-xs text-slate-500 font-medium">User churn rate per month</p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold flex items-center gap-2 text-slate-900">
            <Users size={16} className="text-blue-600" /> CAC ($)
          </label>
          <input
            type="number"
            value={cpa}
            onChange={(e) => setCpa(Number(e.target.value))}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-shadow"
          />
          <p className="text-xs text-slate-500 font-medium">Cost to Acquire Customer</p>
        </div>
      </div>

      {/* Results Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
        <div className="flex flex-col items-center sm:items-start p-6 rounded-xl bg-blue-50/50 border border-blue-100">
          <span className="text-sm font-semibold text-slate-500 mb-2">Estimated LTV</span>
          <span className="text-4xl font-bold tracking-tight text-slate-900">${Math.round(ltv).toLocaleString()}</span>
        </div>
        <div className="flex flex-col items-center sm:items-start p-6 rounded-xl bg-slate-50 border border-slate-100">
          <span className="text-sm font-semibold text-slate-500 mb-2">LTV:CAC Ratio</span>
          <div className="flex flex-col items-center sm:items-start">
            <span className={`text-4xl font-bold tracking-tight ${getRatioColor(ltvCacRatio)}`}>
              {ltvCacRatio.toFixed(1)}x
            </span>
            {ltvCacRatio >= 3 ? (
               <span className="text-xs font-semibold text-emerald-600 mt-2">✨ Excellent baseline</span>
            ) : (
               <span className="text-xs font-semibold text-rose-600 mt-2">⚠️ Needs optimization</span>
            )}
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="h-64 w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.4} stroke="#e2e8f0" vertical={false} />
            <XAxis dataKey="month" strokeOpacity={0.5} fontSize={12} stroke="#64748b" tickMargin={10} axisLine={false} tickLine={false} />
            <YAxis strokeOpacity={0.5} fontSize={12} stroke="#64748b" tickMargin={10} axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', color: '#0f172a', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
              itemStyle={{ color: '#0f172a', fontWeight: 500 }}
              labelStyle={{ color: '#64748b', marginBottom: '4px' }}
            />
            <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={3} dot={{ r: 4, strokeWidth: 2, fill: '#fff' }} activeDot={{ r: 6, strokeWidth: 0 }} name="Cohort Rev" />
            <Line type="monotone" dataKey="cac" stroke="#ef4444" strokeWidth={2} strokeDasharray="4 4" dot={false} name="Total CAC" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Gated Content Trigger */}
      <div className="mt-8 flex flex-col items-center justify-center p-8 rounded-xl border border-blue-100 bg-blue-50/30 text-center">
        <TrendingUp size={32} className="text-blue-600 mb-4" />
        <h3 className="text-xl font-bold mb-2 text-slate-900 tracking-tight">Unlock Industry Benchmarks</h3>
        <p className="text-sm font-medium text-slate-500 max-w-md mb-8">
          See how your {ltvCacRatio.toFixed(1)}x ratio compares to top-performing B2B SaaS companies in your specific niche.
        </p>
        
        {!showGate ? (
          <button 
            onClick={() => setShowGate(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-sm"
          >
            Get Free Personalized Report
          </button>
        ) : (
          <form className="flex w-full max-w-sm items-center space-x-2" onSubmit={(e) => { e.preventDefault(); alert("Thanks! (Email captured for validation)") }}>
            <input 
              type="email" 
              placeholder="founder@startup.com" 
              required
              className="flex-1 bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600/50 shadow-sm"
            />
            <button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
              Unlock
            </button>
          </form>
        )}
        <p className="text-xs text-slate-400 font-medium mt-4">Zero spam. Tested by 10,000+ founders.</p>
      </div>
    </div>
  );
}
