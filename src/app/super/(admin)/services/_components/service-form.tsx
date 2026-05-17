'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Loader2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface ServiceData {
  id: string
  title: string
  description: string
  icon: string
  display_order: number
}

interface ServiceFormProps {
  initialData?: ServiceData
}

export function ServiceForm({ initialData }: ServiceFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    icon: initialData?.icon || 'layout',
    display_order: initialData?.display_order || 0,
  })
  
  const router = useRouter()
  const supabase = createClient()
  const isEditing = !!initialData

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (isEditing) {
        const { error } = await supabase
          .from('services')
          .update(formData)
          .eq('id', initialData.id)
        if (error) throw error
      } else {
        const { error } = await supabase
          .from('services')
          .insert([formData])
        if (error) throw error
      }
      
      router.push('/super/services')
      router.refresh()
    } catch (error) {
      console.error('Error saving service:', error)
      alert('Error saving service')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <Link href="/super/services" className="text-muted hover:text-brand flex items-center gap-2 text-sm mb-4">
          <ArrowLeft className="w-4 h-4" /> Back to Services
        </Link>
        <h1 className="text-3xl font-bold">{isEditing ? 'Edit Service' : 'Add New Service'}</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-card border border-card-border">
        <div>
          <label className="block text-sm font-medium mb-2">Service Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand outline-none"
            placeholder="e.g. Website Development"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand outline-none resize-none"
            placeholder="Describe the service..."
            rows={4}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Icon (Lucide name)</label>
            <select
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand outline-none"
            >
              <option value="layout">Layout</option>
              <option value="smartphone">Smartphone</option>
              <option value="rocket">Rocket</option>
              <option value="shield">Shield</option>
              <option value="settings">Settings</option>
              <option value="code">Code</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Display Order</label>
            <input
              type="number"
              value={formData.display_order}
              onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) })}
              className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand outline-none"
              required
            />
          </div>
        </div>

        <div className="pt-4">
          <Button type="submit" disabled={isLoading} variant="brand" className="w-full py-6">
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : isEditing ? 'Update Service' : 'Create Service'}
          </Button>
        </div>
      </form>
    </div>
  )
}
