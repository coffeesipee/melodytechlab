import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ExternalLink, ArrowLeft, Calendar, User } from 'lucide-react'
import Link from 'next/link'

export default async function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: project } = await supabase
    .from('portfolios')
    .select('*')
    .eq('slug', slug)
    .single()

  if (!project) {
    notFound()
  }

  const { data: images } = await supabase
    .from('portfolio_images')
    .select('*')
    .eq('portfolio_id', project.id)
    .order('display_order', { ascending: true })

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-muted hover:text-brand transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <span className="px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
                <p className="text-muted text-xl leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-card-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-card border border-card-border flex items-center justify-center text-muted">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted uppercase tracking-widest">Client</p>
                    <p className="font-medium">{project.client || 'N/A'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-card border border-card-border flex items-center justify-center text-muted">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted uppercase tracking-widest">Year</p>
                    <p className="font-medium">{project.year || 'N/A'}</p>
                  </div>
                </div>
              </div>
              
              {project.live_url && (
                <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="brand" className="gap-2">
                    Visit Live Site <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              )}
            </div>
            
            <div className="space-y-6">
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-card border border-card-border">
                <Image
                  src={project.main_image_url}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {images && images.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {images.map((img) => (
                    <div key={img.id} className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-card-border">
                      <Image
                        src={img.image_url}
                        alt="Gallery"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
