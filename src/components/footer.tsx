import Link from 'next/link'
import siteConfig from '@/config/site.json'
import { BrandLogo } from '@/components/brand-logo'

export function Footer() {
  return (
    <footer className="py-16 border-t border-card-border/60 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <BrandLogo className="w-8 h-8" />
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight">{siteConfig.name}</span>
              <span className="text-[11px] text-muted">Architected for scale. Built with precision.</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-[13px] text-muted">
            <Link href="/#services" className="hover:text-foreground transition-colors">Services</Link>
            <Link href="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link>
            <Link href="/articles" className="hover:text-foreground transition-colors">Articles</Link>
            <Link href="/about" className="hover:text-foreground transition-colors">About Studio</Link>
            <Link href="/#contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>

        <div className="pt-8 border-t border-card-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Melodytechlab. All rights reserved.</p>
          <p className="font-mono text-[11px]">Deployments: Verified High-Availability</p>
        </div>
      </div>
    </footer>
  )
}
