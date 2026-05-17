import { createClient } from '@/lib/supabase/server'
import { ArticleForm } from '../_components/article-form'
import { notFound } from 'next/navigation'

export default async function EditArticlePage({ params }: { params: { id: string } }) {
  const { id } = await params
  const supabase = await createClient()
  
  const { data: article } = await supabase
    .from('articles')
    .select('*')
    .eq('id', id)
    .single()

  if (!article) {
    notFound()
  }

  return <ArticleForm initialData={article} />
}
