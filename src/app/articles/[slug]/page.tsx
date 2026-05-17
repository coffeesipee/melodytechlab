import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: article } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single()

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <article className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/articles" className="inline-flex items-center gap-2 text-muted hover:text-brand transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Articles
          </Link>
          
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">{article.title}</h1>
            
            <div className="flex items-center gap-6 text-sm text-muted">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(article.published_at!).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {Math.ceil(article.content.length / 1000)} min read
              </div>
            </div>
          </div>
          
          {article.featured_image_url && (
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-card border border-card-border mb-16">
              <Image
                src={article.featured_image_url}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <div className="prose prose-invert prose-purple max-w-none">
            {article.content.split('\n').map((para: string, i: number) => (
              <p key={i} className="mb-6 text-lg text-muted leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  )
}
