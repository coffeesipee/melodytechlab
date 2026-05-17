import { createClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'
import { Plus, Edit } from 'lucide-react'
import Link from 'next/link'

export default async function ServicesAdminPage() {
  const supabase = await createClient()
  const { data: services } = await supabase
    .from('services')
    .select('*')
    .order('display_order', { ascending: true })

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Services</h1>
          <p className="text-muted mt-2">Manage the core services displayed on the landing page.</p>
        </div>
        <Link href="/super/services/new">
          <Button variant="brand" className="gap-2">
            <Plus className="w-4 h-4" /> Add Service
          </Button>
        </Link>
      </div>

      <div className="rounded-2xl border border-card-border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-card border-b border-card-border">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold">Title</th>
              <th className="px-6 py-4 text-sm font-semibold">Icon</th>
              <th className="px-6 py-4 text-sm font-semibold">Order</th>
              <th className="px-6 py-4 text-sm font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-card-border">
            {services?.map((service) => (
              <tr key={service.id} className="hover:bg-card-hover transition-colors">
                <td className="px-6 py-4 text-sm font-medium">{service.title}</td>
                <td className="px-6 py-4 text-sm text-muted capitalize">{service.icon}</td>
                <td className="px-6 py-4 text-sm text-muted">{service.display_order}</td>
                <td className="px-6 py-4 text-sm text-right space-x-2">
                  <Link href={`/super/services/${service.id}`}>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                  {/* Delete functionality would be here */}
                </td>
              </tr>
            ))}
            {(!services || services.length === 0) && (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-muted">
                  No services found. Add your first service to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
