'use client'

import { motion } from 'framer-motion'
import { Layout, Rocket, Smartphone, ShieldCheck, LucideIcon } from 'lucide-react'

interface Service {
  id: string
  title: string
  description: string
  icon: string
}

const iconMap: Record<string, LucideIcon> = {
  layout: Layout,
  rocket: Rocket,
  smartphone: Smartphone,
  shield: ShieldCheck,
}

export function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <span className="text-brand font-medium text-sm tracking-wider uppercase mb-4 block">Services</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-2xl">
            Focused development services for businesses that need quality and speed.
          </h2>
          <p className="text-muted text-lg max-w-3xl">
            Whether you need a polished website, a production-ready mobile app, reliable deployment, or help resolving issues in an existing product, I can step in and get it done with clarity and care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon.toLowerCase()] || Layout
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-card border border-card-border hover:border-brand/50 hover:bg-card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
