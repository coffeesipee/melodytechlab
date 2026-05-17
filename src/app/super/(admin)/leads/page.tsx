import { createClient } from '@/lib/supabase/server'
import { User, Clock, CheckCircle2, XCircle } from 'lucide-react'

export default async function LeadsAdminPage() {
  const supabase = await createClient()
  const { data: leads } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Leads</h1>
        <p className="text-muted mt-2">Manage inquiries and consultation requests.</p>
      </div>

      <div className="space-y-4">
        {leads?.map((lead) => (
          <div key={lead.id} className="p-6 rounded-2xl bg-card border border-card-border hover:border-brand/30 transition-colors">
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                      <User className="w-4 h-4" />
                   </div>
                   <div>
                      <h3 className="font-bold">{lead.name}</h3>
                      <p className="text-xs text-muted">{lead.email}</p>
                   </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                   <div>
                      <p className="text-[10px] text-muted uppercase tracking-widest mb-1">Service</p>
                      <p className="text-sm font-medium capitalize">{lead.service_type || 'N/A'}</p>
                   </div>
                   <div>
                      <p className="text-[10px] text-muted uppercase tracking-widest mb-1">Consultation</p>
                      <div className="flex items-center gap-1.5">
                         {lead.consultation_requested ? (
                            <>
                               <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                               <span className="text-xs text-emerald-500 font-medium">Requested</span>
                            </>
                         ) : (
                            <>
                               <XCircle className="w-3.5 h-3.5 text-muted" />
                               <span className="text-xs text-muted">Not requested</span>
                            </>
                         )}
                      </div>
                   </div>
                </div>
                
                <div>
                   <p className="text-[10px] text-muted uppercase tracking-widest mb-1">Details</p>
                   <p className="text-sm text-muted leading-relaxed italic">
                      &quot;{lead.details}&quot;
                   </p>
                </div>
              </div>
              
              <div className="md:text-right flex flex-col justify-between">
                 <div className="text-[10px] text-muted font-mono bg-background px-2 py-1 rounded border border-card-border inline-block md:ml-auto">
                    ID: {lead.id.slice(0, 8)}...
                 </div>
                 <div className="flex items-center md:justify-end gap-2 text-xs text-muted mt-4 md:mt-0">
                    <Clock className="w-3.5 h-3.5" />
                    {new Date(lead.created_at).toLocaleString()}
                 </div>
              </div>
            </div>
          </div>
        ))}
        {(!leads || leads.length === 0) && (
          <div className="py-20 text-center rounded-2xl border border-dashed border-card-border">
            <p className="text-muted">No leads found yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
