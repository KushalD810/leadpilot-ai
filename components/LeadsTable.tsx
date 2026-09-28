'use client';

import { useEffect, useState } from 'react';

interface Lead {
  id: number;
  customer: string;
  service: string;
  value: string;
  stage: 'Qualified' | 'Follow-up' | 'Booked';
  status: string;
  source: string;
  responseTime?: string;
  responseQuality?: 'Great' | 'Good' | 'Needs work';
}

export default function LeadsTable() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filter, setFilter] = useState<'all' | 'qualified' | 'followup' | 'booked'>('all');

  useEffect(() => {
    // Mock data - replace with actual API call
    const allLeads: Lead[] = [
      {
        id: 1,
        customer: 'Sarah Johnson',
        service: 'Emergency Pipe Repair',
        value: '$420',
        stage: 'Qualified',
        status: 'Awaiting confirmation',
        source: 'Website',
        responseTime: '42s',
        responseQuality: 'Great',
      },
      {
        id: 2,
        customer: 'Marcus Green',
        service: 'HVAC Maintenance',
        value: '$180',
        stage: 'Follow-up',
        status: 'Sent quote',
        source: 'Google Ads',
        responseTime: '1m 15s',
        responseQuality: 'Good',
      },
      {
        id: 3,
        customer: 'Alicia Lewis',
        service: 'Water Heater Installation',
        value: '$860',
        stage: 'Booked',
        status: 'Confirmed appointment',
        source: 'Referral',
        responseTime: '38s',
        responseQuality: 'Great',
      },
      {
        id: 4,
        customer: 'David Chen',
        service: 'Electrical Repair',
        value: '$320',
        stage: 'Qualified',
        status: 'Awaiting callback',
        source: 'Website',
        responseTime: '55s',
        responseQuality: 'Great',
      },
      {
        id: 5,
        customer: 'Emma Rodriguez',
        service: 'Plumbing Installation',
        value: '$1,200',
        stage: 'Follow-up',
        status: 'Quote sent, waiting response',
        source: 'Facebook',
        responseTime: '1m 32s',
        responseQuality: 'Good',
      },
    ];

    if (filter === 'all') {
      setLeads(allLeads);
    } else if (filter === 'qualified') {
      setLeads(allLeads.filter((l) => l.stage === 'Qualified'));
    } else if (filter === 'followup') {
      setLeads(allLeads.filter((l) => l.stage === 'Follow-up'));
    } else if (filter === 'booked') {
      setLeads(allLeads.filter((l) => l.stage === 'Booked'));
    }
  }, [filter]);

  const stageColors = {
    Qualified: 'bg-blue-500/10 text-blue-300',
    'Follow-up': 'bg-yellow-500/10 text-yellow-300',
    Booked: 'bg-emerald-500/10 text-emerald-300',
  };

  const qualityColors = {
    Great: 'text-emerald-400',
    Good: 'text-blue-400',
    'Needs work': 'text-orange-400',
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {(['all', 'qualified', 'followup', 'booked'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === f
                ? 'bg-blue-600 text-white'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-800">
        <table className="min-w-full divide-y divide-slate-800 text-left">
          <thead className="bg-slate-900/50 text-sm text-slate-400">
            <tr>
              <th className="px-6 py-3 font-semibold">Customer</th>
              <th className="px-6 py-3 font-semibold">Service</th>
              <th className="px-6 py-3 font-semibold">Value</th>
              <th className="px-6 py-3 font-semibold">Stage</th>
              <th className="px-6 py-3 font-semibold">Status</th>
              <th className="px-6 py-3 font-semibold">Response</th>
              <th className="px-6 py-3 font-semibold">Quality</th>
              <th className="px-6 py-3 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-white">
                  {lead.customer}
                </td>
                <td className="px-6 py-4 text-sm text-slate-300">{lead.service}</td>
                <td className="px-6 py-4 text-sm font-semibold text-emerald-400">
                  {lead.value}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                      stageColors[lead.stage]
                    }`}
                  >
                    {lead.stage}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-400">{lead.status}</td>
                <td className="px-6 py-4 text-sm text-slate-300">
                  {lead.responseTime}
                </td>
                <td className={`px-6 py-4 text-sm font-medium ${
                  lead.responseQuality ? qualityColors[lead.responseQuality] : ''
                }`}>
                  {lead.responseQuality}
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-blue-400 hover:text-blue-300 font-medium">
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
