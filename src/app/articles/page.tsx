import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar } from 'lucide-react'

export default async function ArticlesPage() {
  const supabase = await createClient()

  const { data: articles } = await supabase
    .from('articles')
    .select('*')
    .not('published_at', 'is', null)
    .order('published_at', { ascending: false })

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <span className="text-brand font-medium text-sm tracking-wider uppercase mb-4 block">Articles</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Thoughts on code, design, and digital products.</h1>
            <p className="text-muted text-lg">
              Sharing my experiences and lessons learned from building and launching products for clients across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles && articles.length > 0 ? (
              articles.map((article) => (
                <Link key={article.id} href={`/articles/${article.slug}`} className="group">
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-card-border mb-6">
                    {article.featured_image_url ? (
                      <Image
                        src={article.featured_image_url}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted italic">
                        No image
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted mb-4">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(article.published_at).toLocaleDateString()}
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-muted text-sm line-clamp-3">
                    {article.content.replace(/[#*`]/g, '').slice(0, 150)}...
                  </p>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-muted">No articles published yet.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
