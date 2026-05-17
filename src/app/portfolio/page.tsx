import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PortfolioSection } from '@/components/portfolio-section'

export default async function PortfolioPage() {
  const supabase = await createClient()

  const { data: portfolios } = await supabase
    .from('portfolios')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-32">
        <PortfolioSection portfolios={portfolios || []} />
      </div>
      <Footer />
    </main>
  )
}
