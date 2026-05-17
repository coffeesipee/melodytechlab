import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ServicesSection } from '@/components/services-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { WhyUsSection } from '@/components/why-us-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default async function Home() {
  const supabase = await createClient()

  const { data: services } = await supabase
    .from('services')
    .select('*')
    .order('display_order', { ascending: true })

  const { data: portfolios } = await supabase
    .from('portfolios')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(3)

  const defaultServices = [
    {
      id: '1',
      title: 'Website Development',
      description: 'Modern landing pages, business sites, dashboards, and custom web apps with responsive layouts, performance, and a refined visual finish.',
      icon: 'layout',
    },
    {
      id: '2',
      title: 'Mobile Development',
      description: 'User-friendly mobile apps designed to feel smooth, stable, and intuitive, with practical features and thoughtful interaction details.',
      icon: 'smartphone',
    },
    {
      id: '3',
      title: 'Deployment',
      description: 'From staging to production, I help configure hosting, releases, and launch workflows so your product goes live with fewer surprises.',
      icon: 'rocket',
    },
    {
      id: '4',
      title: 'Bug Fixing',
      description: 'I investigate broken layouts, unstable modules, and logic bugs to restore confidence and improve overall stability.',
      icon: 'shield',
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <ServicesSection services={services && services.length > 0 ? services : defaultServices} />
      <PortfolioSection portfolios={portfolios || []} />
      <WhyUsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
