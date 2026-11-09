'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Send, CheckCircle2, ShieldAlert } from 'lucide-react'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  return (
    <section id="contact" className="py-24 border-t border-card-border/60 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="rounded-3xl bg-card border border-card-border overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            {/* Info Column */}
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-card-border flex flex-col justify-between">
              <div>
                <span className="text-brand-light font-mono text-xs tracking-wider uppercase mb-3 block">
                  Project Inquiry
                </span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Ready to engineer your next digital platform?
                </h2>
                <p className="text-muted text-sm md:text-base leading-relaxed mb-8">
                  Whether you require an enterprise web portal, mobile app development, or autonomous AI workflows — let&apos;s evaluate your technical requirements with clarity.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-background/50 border border-card-border">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs text-foreground">Direct discussion with lead engineers</span>
                  </div>
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-background/50 border border-card-border">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs text-foreground">Confidential NDA protected by default</span>
                  </div>
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-background/50 border border-card-border">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs text-foreground">Detailed technical roadmap &amp; quote in 48 hours</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-card-border/60 font-mono text-xs text-muted">
                <span>Inquiries: </span>
                <a href="mailto:hello@melodytech.my.id" className="text-brand-light hover:underline">
                  hello@melodytech.my.id
                </a>
              </div>
            </div>

            {/* Form Column */}
            <div className="p-8 md:p-12 bg-card-hover/20">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Inquiry Received</h3>
                  <p className="text-muted text-xs md:text-sm max-w-sm mb-6 leading-relaxed">
                    Thank you. We will review your project details and reach out within 24–48 hours to schedule a discovery call.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono uppercase text-muted mb-2">
                      Full Name *
                    </label>
                    <input
                      required
                      name="name"
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand-light outline-none text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-muted mb-2">
                      Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand-light outline-none text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-muted mb-2">
                      Scope / Focus Area *
                    </label>
                    <select
                      required
                      name="service_type"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand-light outline-none text-sm transition-colors text-foreground"
                    >
                      <option value="">Select scope</option>
                      <option value="web">Web Application / SaaS Engineering</option>
                      <option value="mobile">Mobile Application Development</option>
                      <option value="ai">AI &amp; Autonomous Agent Systems</option>
                      <option value="infra">Cloud Architecture &amp; DevOps</option>
                      <option value="consult">Technical Architecture Audit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-muted mb-2">
                      Project Goals &amp; Timeline *
                    </label>
                    <textarea
                      required
                      name="details"
                      rows={4}
                      placeholder="Describe your current system or what you are aiming to build..."
                      className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand-light outline-none text-sm transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand hover:bg-brand-dark text-white rounded-xl py-6 text-sm font-semibold shadow-md shadow-brand/20 gap-2"
                  >
                    {loading ? "Transmitting..." : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Project Inquiry
                      </>
                    )}
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
