'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Loader2, ArrowLeft, Upload, X, Plus } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface PortfolioData {
  id: string
  title: string
  slug: string
  description: string
  category: string
  main_image_url: string
  client: string
  year: string
  live_url: string
}

interface PortfolioImage {
  id: string
  portfolio_id: string
  image_url: string
  display_order: number
}

interface PortfolioFormProps {
  initialData?: PortfolioData
  initialImages?: PortfolioImage[]
}

export function PortfolioForm({ initialData, initialImages = [] }: PortfolioFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    description: initialData?.description || '',
    category: initialData?.category || 'Web Development',
    main_image_url: initialData?.main_image_url || '',
    client: initialData?.client || '',
    year: initialData?.year || new Date().getFullYear().toString(),
    live_url: initialData?.live_url || '',
  })
  
  const [galleryImages, setGalleryImages] = useState<Partial<PortfolioImage>[]>(initialImages)
  const [uploadingMain, setUploadingMain] = useState(false)
  const [uploadingGallery, setUploadingGallery] = useState(false)
  
  const router = useRouter()
  const supabase = createClient()
  const isEditing = !!initialData

  async function uploadFile(file: File, path: string) {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`
    const filePath = `${path}/${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('images')
      .upload(filePath, file)

    if (uploadError) throw uploadError

    const { data: { publicUrl } } = supabase.storage
      .from('images')
      .getPublicUrl(filePath)

    return publicUrl
  }

  async function handleMainImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || e.target.files.length === 0) return
    setUploadingMain(true)
    try {
      const url = await uploadFile(e.target.files[0], 'portfolio/main')
      setFormData({ ...formData, main_image_url: url })
    } catch (error) {
      console.error(error)
      alert('Upload failed')
    } finally {
      setUploadingMain(false)
    }
  }

  async function handleGalleryUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || e.target.files.length === 0) return
    setUploadingGallery(true)
    try {
      const files = Array.from(e.target.files)
      const newImages: Omit<PortfolioImage, 'id' | 'portfolio_id'>[] = []
      for (const file of files) {
        const url = await uploadFile(file, 'portfolio/gallery')
        newImages.push({ image_url: url, display_order: galleryImages.length + newImages.length })
      }
      setGalleryImages([...galleryImages, ...newImages])
    } catch (error) {
      console.error(error)
      alert('Upload failed')
    } finally {
      setUploadingGallery(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    try {
      let portfolioId = initialData?.id

      if (isEditing) {
        const { error } = await supabase
          .from('portfolios')
          .update(formData)
          .eq('id', portfolioId)
        if (error) throw error
      } else {
        const { data, error } = await supabase
          .from('portfolios')
          .insert([formData])
          .select()
          .single()
        if (error) throw error
        portfolioId = data.id
      }

      // Sync gallery images
      if (isEditing) {
        await supabase.from('portfolio_images').delete().eq('portfolio_id', portfolioId)
      }
      
      if (galleryImages.length > 0) {
        const imagesToInsert = galleryImages.map((img, i) => ({
          portfolio_id: portfolioId,
          image_url: img.image_url,
          display_order: i
        }))
        const { error: imgError } = await supabase.from('portfolio_images').insert(imagesToInsert)
        if (imgError) throw imgError
      }
      
      router.push('/super/portfolios')
      router.refresh()
    } catch (error) {
      console.error(error)
      alert('Save failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <Link href="/super/portfolios" className="text-muted hover:text-brand flex items-center gap-2 text-sm mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolios
        </Link>
        <h1 className="text-3xl font-bold">{isEditing ? 'Edit Project' : 'Add New Project'}</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-8 rounded-2xl bg-card border border-card-border space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand outline-none"
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
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand outline-none resize-none"
                  rows={4}
                  required
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                 <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand outline-none"
                  >
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>UI/UX Design</option>
                    <option>Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Client</label>
                  <input
                    type="text"
                    value={formData.client}
                    onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand outline-none"
                    placeholder="e.g. Acme Corp"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Year</label>
                  <input
                    type="text"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Live URL</label>
                <input
                  type="url"
                  value={formData.live_url}
                  onChange={(e) => setFormData({ ...formData, live_url: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand outline-none font-mono text-sm"
                  placeholder="https://example.com"
                />
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-card-border">
               <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold">Gallery Images</h3>
                  <label className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand/10 text-brand text-sm font-medium hover:bg-brand/20 transition-colors cursor-pointer">
                     <Plus className="w-4 h-4" /> Add Images
                     <input type="file" multiple className="hidden" accept="image/*" onChange={handleGalleryUpload} />
                  </label>
               </div>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {galleryImages.map((img, i) => (
                    img.image_url && (
                      <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-card-border">
                        <Image src={img.image_url} alt="Gallery" fill className="object-cover" />
                        <button
                          type="button"
                          onClick={() => setGalleryImages(galleryImages.filter((_, idx) => idx !== i))}
                          className="absolute top-1 right-1 p-1 rounded-full bg-red-500/80 text-white"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    )
                  ))}
                  {uploadingGallery && (
                    <div className="aspect-square rounded-xl border border-dashed border-card-border flex items-center justify-center">
                       <Loader2 className="w-6 h-6 animate-spin text-brand" />
                    </div>
                  )}
               </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-card-border space-y-6">
               <div>
                <label className="block text-sm font-medium mb-4">Main Preview Image</label>
                {formData.main_image_url ? (
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-card-border mb-4">
                    <Image src={formData.main_image_url} alt="Main" fill className="object-cover" />
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, main_image_url: '' })}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-red-500 text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center aspect-video rounded-xl border-2 border-dashed border-card-border hover:border-brand/50 hover:bg-brand/5 transition-all cursor-pointer mb-4">
                    {uploadingMain ? <Loader2 className="w-8 h-8 animate-spin text-brand" /> : <Upload className="w-8 h-8 text-muted" />}
                    <input type="file" className="hidden" accept="image/*" onChange={handleMainImageUpload} />
                  </label>
                )}
              </div>

              <Button type="submit" disabled={isLoading || uploadingMain || uploadingGallery} variant="brand" className="w-full py-6">
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : isEditing ? 'Update Project' : 'Create Project'}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
