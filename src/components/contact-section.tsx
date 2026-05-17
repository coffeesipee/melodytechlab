'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from './ui/button'
import { Loader2, Send } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  service_type: z.string().min(1, 'Please select a service'),
  details: z.string().min(10, 'Please provide more details about your project'),
  consultation_requested: z.boolean(),
})

type FormValues = z.infer<typeof formSchema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const supabase = createClient()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      consultation_requested: false,
    },
  })

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    try {
      const { error } = await supabase.from('leads').insert([data])
      if (error) throw error
      setIsSuccess(true)
      reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-3xl bg-card border border-card-border overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-card-border">
              <span className="text-brand font-medium text-sm tracking-wider uppercase mb-4 block">Start a project</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Need a website, mobile app, deployment help, or urgent bug fix?
              </h2>
              <p className="text-muted text-lg mb-12">
                Tell me what you are building, what is blocked, or what you want to improve. I offer a free consultation to help you define the next move clearly.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-card-border">
                  <div className="w-2 h-2 rounded-full bg-brand" />
                  <span className="text-sm">Available for website and app projects</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-card-border">
                  <div className="w-2 h-2 rounded-full bg-brand" />
                  <span className="text-sm">Also open to deployment support and fixing existing issues</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-background/50 border border-card-border">
                  <div className="w-2 h-2 rounded-full bg-brand" />
                  <span className="text-sm">Free consultation with direct recommendations</span>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12 bg-card-hover/30">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-6">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-muted mb-8">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setIsSuccess(false)}>Send another message</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your name</label>
                    <input
                      {...register('name')}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand outline-none transition-colors"
                      placeholder="Enter your name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email address</label>
                    <input
                      {...register('email')}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">What do you need?</label>
                    <select
                      {...register('service_type')}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand outline-none transition-colors appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="website">Website Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="deployment">Deployment Support</option>
                      <option value="bugfix">Bug Fixing & Maintenance</option>
                    </select>
                    {errors.service_type && <p className="text-red-500 text-xs mt-1">{errors.service_type.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Project details</label>
                    <textarea
                      {...register('details')}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand outline-none transition-colors resize-none"
                      placeholder="Tell me more about your project..."
                    />
                    {errors.details && <p className="text-red-500 text-xs mt-1">{errors.details.message}</p>}
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex items-center h-5">
                      <input
                        {...register('consultation_requested')}
                        type="checkbox"
                        className="w-4 h-4 rounded border-card-border bg-background text-brand focus:ring-brand"
                      />
                    </div>
                    <label className="text-sm text-muted">
                      I am interested in a free consultation before starting.
                    </label>
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} variant="brand" className="w-full py-6 text-lg">
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    Request Consultation
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
