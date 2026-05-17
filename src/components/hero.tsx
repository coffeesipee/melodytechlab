'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Calendar } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative pt-44 pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Animated Background Mesh */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-700" />
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              One-person agency with free consultation
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              I build <span className="text-brand">websites</span> and <span className="text-brand">mobile apps</span> that feel premium, launch smoothly, and keep working.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted mb-8 max-w-2xl"
            >
              I run this agency by myself, so every project gets direct attention from strategy to shipping. From website development and mobile development to deployment and bug fixing, I help businesses move faster with clean, reliable digital products.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link href="#contact">
                <Button size="lg" variant="brand" className="gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Free Consultation
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="gap-2">
                  View Portfolio
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {['Custom websites', 'Mobile apps', 'Deployment support', 'Bug fixes & maintenance'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-lg bg-card border border-card-border text-xs text-muted">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full max-w-lg"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-brand rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-card border border-card-border rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand font-bold text-lg">
                    SD
                  </div>
                  <div>
                    <h3 className="font-bold">Solo-led digital delivery</h3>
                    <p className="text-xs text-muted">Planning, design thinking, development, launch</p>
                  </div>
                  <div className="ml-auto px-2 py-1 rounded bg-brand/20 text-brand text-[10px] font-bold uppercase tracking-wider">
                    Available for work
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-background/50 border border-card-border">
                    <p className="text-xs text-muted mb-1">Core services</p>
                    <p className="text-2xl font-bold">4</p>
                    <p className="text-[10px] text-muted mt-1">Web, Mobile, Deploy, Fix</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-card-border">
                    <p className="text-xs text-muted mb-1">Consultation</p>
                    <p className="text-2xl font-bold text-brand">Free</p>
                    <p className="text-[10px] text-muted mt-1">Get recommendations</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Beautiful, responsive websites built for speed",
                    "Mobile app development with smooth UX",
                    "Deployment, launch assistance, and support"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-background/30 border border-card-border/50 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background blobs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}
