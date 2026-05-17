import { createClient } from '@/lib/supabase/server'
import { PortfolioForm } from '../_components/portfolio-form'
import { notFound } from 'next/navigation'

export default async function EditPortfolioPage({ params }: { params: { id: string } }) {
  const { id } = await params
  const supabase = await createClient()
  
  const { data: portfolio } = await supabase
    .from('portfolios')
    .select('*')
    .eq('id', id)
    .single()

  if (!portfolio) {
    notFound()
  }

  const { data: images } = await supabase
    .from('portfolio_images')
    .select('*')
    .eq('portfolio_id', id)
    .order('display_order', { ascending: true })

  return <PortfolioForm initialData={portfolio} initialImages={images || []} />
}
