'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Loader2, ArrowLeft, Upload, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface ArticleData {
  id: string
  title: string
  slug: string
  content: string
  featured_image_url: string
  published_at: string | null
}

interface ArticleFormProps {
  initialData?: ArticleData
}

export function ArticleForm({ initialData }: ArticleFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    content: initialData?.content || '',
    featured_image_url: initialData?.featured_image_url || '',
    published: !!initialData?.published_at,
  })
  
  const [uploading, setUploading] = useState(false)
  const router = useRouter()
  const supabase = createClient()
  const isEditing = !!initialData

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || e.target.files.length === 0) return
    
    setUploading(true)
    const file = e.target.files[0]
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`
    const filePath = `articles/${fileName}`

    try {
      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage
        .from('images')
        .getPublicUrl(filePath)

      setFormData({ ...formData, featured_image_url: publicUrl })
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('Error uploading image')
    } finally {
      setUploading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    const payload = {
      title: formData.title,
      slug: formData.slug,
      content: formData.content,
      featured_image_url: formData.featured_image_url,
      published_at: formData.published ? (initialData?.published_at || new Date().toISOString()) : null,
    }

    try {
      if (isEditing) {
        const { error } = await supabase
          .from('articles')
          .update(payload)
          .eq('id', initialData.id)
        if (error) throw error
      } else {
        const { error } = await supabase
          .from('articles')
          .insert([payload])
        if (error) throw error
      }
      
      router.push('/super/articles')
      router.refresh()
    } catch (error) {
      console.error('Error saving article:', error)
      alert('Error saving article')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/super/articles" className="text-muted hover:text-brand flex items-center gap-2 text-sm mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Articles
        </Link>
        <h1 className="text-3xl font-bold">{isEditing ? 'Edit Article' : 'New Article'}</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-8 rounded-2xl bg-card border border-card-border space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand outline-none"
                  placeholder="Article title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Slug</label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/ /g, '-') })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand outline-none font-mono text-sm"
                  placeholder="article-slug"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Content (Markdown)</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand outline-none resize-none font-mono text-sm"
                  placeholder="Write your article content here..."
                  rows={15}
                  required
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-card-border space-y-6">
              <div>
                <label className="block text-sm font-medium mb-4">Featured Image</label>
                {formData.featured_image_url ? (
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-card-border mb-4">
                    <Image
                      src={formData.featured_image_url}
                      alt="Featured"
                      fill
                      className="object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, featured_image_url: '' })}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center aspect-video rounded-xl border-2 border-dashed border-card-border hover:border-brand/50 hover:bg-brand/5 transition-all cursor-pointer mb-4">
                    {uploading ? (
                      <Loader2 className="w-8 h-8 animate-spin text-brand" />
                    ) : (
                      <>
                        <Upload className="w-8 h-8 text-muted mb-2" />
                        <span className="text-xs text-muted">Click to upload image</span>
                      </>
                    )}
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploading}
                    />
                  </label>
                )}
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-card-border">
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                  className="w-4 h-4 rounded border-card-border bg-background text-brand focus:ring-brand"
                />
                <label htmlFor="published" className="text-sm font-medium">Publish Article</label>
              </div>

              <Button type="submit" disabled={isLoading || uploading} variant="brand" className="w-full py-6">
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : isEditing ? 'Update Article' : 'Publish Article'}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
