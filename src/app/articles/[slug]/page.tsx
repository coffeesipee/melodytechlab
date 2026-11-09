import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
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

  // Simple clean formatting for markdown headings and paragraphs
  const renderParagraph = (text: string, i: number) => {
    const trimmed = text.trim()
    if (!trimmed) return null

    if (trimmed.startsWith('### ')) {
      return (
        <h3 key={i} className="text-xl sm:text-2xl font-bold text-zinc-900 mt-10 mb-4 tracking-tight">
          {trimmed.replace('### ', '')}
        </h3>
      )
    }

    if (trimmed.startsWith('## ')) {
      return (
        <h2 key={i} className="text-2xl sm:text-3xl font-bold text-zinc-900 mt-12 mb-5 tracking-tight">
          {trimmed.replace('## ', '')}
        </h2>
      )
    }

    if (trimmed === '---') {
      return <hr key={i} className="my-10 border-zinc-200" />
    }

    if (trimmed.startsWith('- ')) {
      return (
        <li key={i} className="ml-5 list-disc text-zinc-600 mb-2 leading-relaxed">
          {trimmed.replace('- ', '')}
        </li>
      )
    }

    return (
      <p key={i} className="mb-5 text-base sm:text-lg text-zinc-600 leading-relaxed">
        {trimmed}
      </p>
    )
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <article className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/articles" className="inline-flex items-center gap-2 text-xs font-semibold text-brand hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Artikel
          </Link>
          
          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6 leading-tight tracking-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-6 text-xs text-zinc-500 font-medium pb-6 border-b border-zinc-200">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-zinc-400" />
                {new Date(article.published_at!).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-zinc-400" />
                {Math.ceil(article.content.length / 900)} menit membaca
              </div>
            </div>
          </div>
          
          {article.featured_image_url && (
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 mb-12 shadow-sm">
              <Image
                src={article.featured_image_url}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          
          <div className="article-body">
            {article.content.split('\n').map((para: string, i: number) => renderParagraph(para, i))}
          </div>

          <div className="mt-14 p-6 rounded-2xl bg-sky-50 border border-sky-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-sm text-sky-950 mb-1">Tertarik Membangun Aplikasi Custom Seperti Porsi?</h4>
              <p className="text-xs text-sky-800 leading-relaxed">
                Kami siap bantu wujudkan SaaS atau sistem internal perusahaan Anda dari nol sampai rilis.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold bg-brand text-white hover:bg-brand-hover transition-all shrink-0"
            >
              Konsultasi Proyek
            </Link>
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  )
}
