import Link from 'next/link'
import siteConfig from '@/config/site.json'
import { BrandLogo } from '@/components/brand-logo'

export function Navbar() {
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl">
      <nav className="bg-card/70 backdrop-blur-xl border border-card-border/80 rounded-2xl px-5 py-3 flex items-center justify-between shadow-2xl shadow-black/50">
        <Link href="/" className="flex items-center gap-3 group">
          <BrandLogo className="w-10 h-10" />
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-foreground group-hover:text-brand-light transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-[10px] text-muted tracking-wide font-mono uppercase">
              Engineering Studio
            </span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-7 text-[13px] font-medium text-muted">
          <Link href="/#services" className="hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-foreground transition-colors">
            Portfolio
          </Link>
          <Link href="/articles" className="hover:text-foreground transition-colors">
            Articles
          </Link>
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold bg-brand text-white hover:bg-brand-dark transition-all shadow-md shadow-brand/20"
          >
            Start a Project
          </Link>
        </div>
      </nav>
    </header>
  )
}
