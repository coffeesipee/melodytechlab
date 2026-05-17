import { createClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'
import { Plus, Edit, Eye, Clock } from 'lucide-react'
import Link from 'next/link'

export default async function ArticlesAdminPage() {
  const supabase = await createClient()
  const { data: articles } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Articles</h1>
          <p className="text-muted mt-2">Write and manage your blog posts.</p>
        </div>
        <Link href="/super/articles/new">
          <Button variant="brand" className="gap-2">
            <Plus className="w-4 h-4" /> New Article
          </Button>
        </Link>
      </div>

      <div className="rounded-2xl border border-card-border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-card border-b border-card-border">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold">Title</th>
              <th className="px-6 py-4 text-sm font-semibold">Status</th>
              <th className="px-6 py-4 text-sm font-semibold">Published Date</th>
              <th className="px-6 py-4 text-sm font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-card-border">
            {articles?.map((article) => (
              <tr key={article.id} className="hover:bg-card-hover transition-colors">
                <td className="px-6 py-4">
                   <div className="text-sm font-medium">{article.title}</div>
                   <div className="text-[10px] text-muted font-mono mt-1">/{article.slug}</div>
                </td>
                <td className="px-6 py-4">
                  {article.published_at ? (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-wider">
                      Published
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase tracking-wider">
                      Draft
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-sm text-muted">
                   <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" />
                      {article.published_at ? new Date(article.published_at).toLocaleDateString() : 'N/A'}
                   </div>
                </td>
                <td className="px-6 py-4 text-sm text-right space-x-2">
                  <Link href={`/super/articles/${article.id}`}>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Edit className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href={`/articles/${article.slug}`} target="_blank">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
            {(!articles || articles.length === 0) && (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-muted">
                  No articles yet. Start writing your first post!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
