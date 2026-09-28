const leads = [
  {
    id: 1,
    customer: 'Sarah Johnson',
    service: 'Emergency Pipe Repair',
    value: '$420',
    stage: 'Qualified',
    status: 'Awaiting confirmation',
    source: 'Website',
  },
  {
    id: 2,
    customer: 'Marcus Green',
    service: 'HVAC Maintenance',
    value: '$180',
    stage: 'Follow-up',
    status: 'Sent quote',
    source: 'Google Ads',
  },
  {
    id: 3,
    customer: 'Alicia Lewis',
    service: 'Water Heater Installation',
    value: '$860',
    stage: 'Booked',
    status: 'Confirmed appointment',
    source: 'Referral',
  },
];

const stats = [
  { label: 'Leads this week', value: '84' },
  { label: 'Booked jobs', value: '19' },
  { label: 'Reply time', value: '58s' },
  { label: 'Revenue', value: '$12.4k' },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400">LeadPilot</p>
            <h1 className="mt-2 text-3xl font-bold">Business dashboard</h1>
          </div>
          <a href="/" className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
            Back to home
          </a>
        </header>

        <div className="mb-8 grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="mt-4 text-3xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent leads</h2>
            <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
              Export CSV
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-800 text-left">
              <thead className="text-sm text-slate-400">
                <tr>
                  <th className="py-3 pr-6">Customer</th>
                  <th className="py-3 pr-6">Service</th>
                  <th className="py-3 pr-6">Value</th>
                  <th className="py-3 pr-6">Stage</th>
                  <th className="py-3 pr-6">Status</th>
                  <th className="py-3 pr-6">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-sm text-slate-200">
                {leads.map((lead) => (
                  <tr key={lead.id}>
                    <td className="py-4 pr-6">{lead.customer}</td>
                    <td className="py-4 pr-6">{lead.service}</td>
                    <td className="py-4 pr-6">{lead.value}</td>
                    <td className="py-4 pr-6">
                      <span className="rounded-full bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-300">
                        {lead.stage}
                      </span>
                    </td>
                    <td className="py-4 pr-6">{lead.status}</td>
                    <td className="py-4 pr-6">{lead.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
