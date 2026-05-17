'use client'

import { MessageSquare, Shield, Zap } from 'lucide-react'

export function WhyUsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-brand font-medium text-sm tracking-wider uppercase mb-4 block">Why work with me</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              A solo agency model means focused execution, direct communication, and fewer delays.
            </h2>
            <p className="text-muted text-lg mb-8 max-w-xl">
              I personally handle discovery, development, iteration, and support. That creates a more consistent result and a simpler process for you.
            </p>
            
            <div className="p-8 rounded-2xl bg-brand/5 border border-brand/20">
               <h3 className="text-xl font-bold mb-4">Free consultation</h3>
               <p className="text-muted text-sm leading-relaxed mb-6">
                 Before you commit, we can discuss your goals, identify the best approach, and outline a practical next step for free.
               </p>
            </div>
          </div>
          
          <div className="grid gap-6">
            <div className="p-8 rounded-2xl bg-card border border-card-border hover:border-brand/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center text-brand mb-6">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-4">Direct collaboration</h3>
              <p className="text-muted text-sm leading-relaxed">
                You talk to the person building the product. No handoff confusion, no diluted feedback, no unnecessary layers.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-card border border-card-border hover:border-brand/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center text-brand mb-6">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-4">Careful delivery</h3>
              <p className="text-muted text-sm leading-relaxed">
                I focus on polished interfaces, stable builds, and launch-ready output that feels reliable from the start.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-card border border-card-border hover:border-brand/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center text-brand mb-6">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold mb-4">Fast feedback loop</h3>
              <p className="text-muted text-sm leading-relaxed">
                You work directly with the builder, not through layers of management. This ensures your needs are met quickly and accurately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
