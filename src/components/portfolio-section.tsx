'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface Portfolio {
  id: string
  title: string
  slug: string
  description: string
  category: string
  main_image_url: string
  client: string
}

export function PortfolioSection({ portfolios }: { portfolios: Portfolio[] }) {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand font-medium text-sm tracking-wider uppercase mb-4 block">Selected Work</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              A portfolio of web and mobile products built with a strong eye for usability and launch-readiness.
            </h2>
            <p className="text-muted text-lg">
              Here are sample project types that reflect the kind of work I take on: product websites, dashboards, booking systems, internal tools, and mobile experiences.
            </p>
          </div>
          <Link href="/portfolio">
            <Button variant="outline" className="gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        
        <div className="space-y-12">
          {portfolios.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={cn(
                "flex flex-col lg:flex-row gap-8 items-stretch",
                index % 2 === 1 && "lg:flex-row-reverse"
              )}
            >
              <div className="flex-1 relative aspect-video rounded-3xl overflow-hidden bg-card border border-card-border group">
                {project.main_image_url ? (
                  <Image
                    src={project.main_image_url}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted italic">
                    Image Unavailable
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <Link href={`/portfolio/${project.slug}`}>
                    <Button variant="brand" size="sm" className="gap-2">
                      View Project <ExternalLink className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="flex-1 flex flex-col justify-center p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-sm text-muted">{project.client}</span>
                </div>
                <h3 className="text-3xl font-bold mb-6">{project.title}</h3>
                <p className="text-muted text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-auto">
                   <div className="p-4 rounded-xl bg-card border border-card-border">
                      <p className="text-[10px] text-muted uppercase tracking-widest mb-1">Impact</p>
                      <p className="text-sm font-medium">Clean, usable interface built for scale.</p>
                   </div>
                   <div className="p-4 rounded-xl bg-card border border-card-border">
                      <p className="text-[10px] text-muted uppercase tracking-widest mb-1">Delivery</p>
                      <p className="text-sm font-medium">Production-ready code & deployment.</p>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
