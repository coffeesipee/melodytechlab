import { createClient } from '@/lib/supabase/server'
import { ServiceForm } from '../_components/service-form'
import { notFound } from 'next/navigation'

export default async function EditServicePage({ params }: { params: { id: string } }) {
  const { id } = await params
  const supabase = await createClient()
  
  const { data: service } = await supabase
    .from('services')
    .select('*')
    .eq('id', id)
    .single()

  if (!service) {
    notFound()
  }

  return <ServiceForm initialData={service} />
}
