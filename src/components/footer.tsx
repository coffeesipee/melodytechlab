import Link from 'next/link'
import siteConfig from '@/config/site.json'

export function Footer() {
  return (
    <footer className="py-10 border-t border-card-border/50 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. Built for clients who value direct, careful work.
          </p>
          
          <div className="flex items-center gap-8 text-[13px] text-muted">
            <Link href="/#services" className="hover:text-foreground transition-colors">Services</Link>
            <Link href="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link>
            <Link href="/#contact" className="hover:text-foreground transition-colors">Free Consultation</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
