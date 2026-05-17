import { createClient } from '@/lib/supabase/server'
import { Briefcase, FileText, Mail, Settings } from 'lucide-react'

export default async function DashboardPage() {
  const supabase = await createClient()

  const { count: servicesCount } = await supabase.from('services').select('*', { count: 'exact', head: true })
  const { count: portfoliosCount } = await supabase.from('portfolios').select('*', { count: 'exact', head: true })
  const { count: articlesCount } = await supabase.from('articles').select('*', { count: 'exact', head: true })
  const { count: leadsCount } = await supabase.from('leads').select('*', { count: 'exact', head: true })

  const stats = [
    { label: 'Services', value: servicesCount || 0, icon: Settings },
    { label: 'Portfolios', value: portfoliosCount || 0, icon: Briefcase },
    { label: 'Articles', value: articlesCount || 0, icon: FileText },
    { label: 'Leads', value: leadsCount || 0, icon: Mail },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted mt-2">Welcome back to your agency management portal.</p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="p-6 rounded-2xl bg-card border border-card-border">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
              <p className="text-sm text-muted font-medium">{stat.label}</p>
            </div>
          )
        })}
      </div>
      
      {/* Recent Leads would go here */}
    </div>
  )
}
