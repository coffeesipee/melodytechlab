'use client'

import { Button } from './ui/button'
import { ArrowRight, CheckCircle2, Terminal, Code2, Cpu, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Column: Value Prop */}
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand-light text-xs font-mono font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-light animate-ping" />
              Boutique Software Engineering &amp; Architecture
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              We engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">high-reliability</span> digital products that scale.
            </h1>
            
            <p className="text-lg text-muted mb-10 max-w-xl leading-relaxed">
              From resilient backend systems to polished mobile and web interfaces. Work directly with seasoned engineers — no agency bureaucracy, no inflated timelines, shipped with production-grade rigor.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link href="#contact">
                <Button size="lg" className="bg-brand hover:bg-brand-dark text-white rounded-xl gap-2 font-medium shadow-lg shadow-brand/25 h-12 px-7">
                  Start a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="rounded-xl border-card-border hover:bg-card hover:text-foreground h-12 px-7">
                  View Selected Work
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-card-border/60">
              <div className="flex items-center gap-2 text-xs font-mono text-muted">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Handoff Waste</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-muted">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Strict Clean Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-muted">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Enterprise SLA Delivery</span>
              </div>
            </div>
          </div>
          
          {/* Right Column: Industrial Bento Showcase */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative rounded-2xl bg-card border border-card-border shadow-2xl overflow-hidden p-6">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-card-border/60">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-muted">
                  <Terminal className="w-3.5 h-3.5 text-brand-light" />
                  <span>melodytechlab-node-01.prod</span>
                </div>
              </div>

              <div className="space-y-4">
                {/* Metrics Box */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-background/60 border border-card-border">
                    <span className="text-[10px] font-mono uppercase text-muted tracking-wider block mb-1">Architecture</span>
                    <span className="text-xl font-bold font-mono text-foreground">Sub-second</span>
                    <span className="text-[10px] text-emerald-400 block mt-1">99.98% uptime SLA</span>
                  </div>
                  <div className="p-4 rounded-xl bg-background/60 border border-card-border">
                    <span className="text-[10px] font-mono uppercase text-muted tracking-wider block mb-1">Delivery Velocity</span>
                    <span className="text-xl font-bold font-mono text-brand-light">2-4 Weeks</span>
                    <span className="text-[10px] text-muted block mt-1">Sprint to production</span>
                  </div>
                </div>

                {/* Capability Matrix */}
                <div className="p-4 rounded-xl bg-background/60 border border-card-border space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-muted">
                      <Code2 className="w-4 h-4 text-brand-light" />
                      Core Stack
                    </span>
                    <span className="text-foreground">Next.js • Go • Postgres</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-muted">
                      <Cpu className="w-4 h-4 text-brand-light" />
                      AI Capabilities
                    </span>
                    <span className="text-foreground">Autonomous Agents • RAG</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-muted">
                      <ShieldCheck className="w-4 h-4 text-brand-light" />
                      Audits &amp; QA
                    </span>
                    <span className="text-emerald-400">TDD &amp; Security Hardened</span>
                  </div>
                </div>

                {/* Client Highlight */}
                <div className="p-3.5 rounded-xl bg-brand/5 border border-brand/20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-brand-light font-bold">Trusted Case Study</span>
                    <p className="text-xs font-semibold text-foreground mt-0.5">Pertamina Retail Region VI</p>
                  </div>
                  <Link href="/portfolio/smart-wo" className="text-xs text-brand-light hover:underline font-mono">
                    Inspect Architecture →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
