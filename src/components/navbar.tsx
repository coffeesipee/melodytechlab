import Link from 'next/link'
import siteConfig from '@/config/site.json'
import { BrandLogo } from '@/components/brand-logo'

export function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl">
      <nav className="bg-white/85 backdrop-blur-md border border-zinc-200/80 rounded-full px-5 py-2.5 flex items-center justify-between shadow-sm shadow-zinc-200/50">
        <Link href="/" className="flex items-center gap-2.5 group">
          <BrandLogo className="w-8 h-8 rounded-lg" />
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-zinc-900 group-hover:text-brand transition-colors">
              {siteConfig.name}
            </span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-zinc-600">
          <Link href="/#services" className="hover:text-zinc-900 transition-colors">
            Layanan
          </Link>
          <Link href="/portfolio" className="hover:text-zinc-900 transition-colors">
            Portofolio
          </Link>
          <Link href="/articles" className="hover:text-zinc-900 transition-colors">
            Artikel
          </Link>
          <Link href="/about" className="hover:text-zinc-900 transition-colors">
            Tentang Kami
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold bg-zinc-900 text-white hover:bg-zinc-800 transition-all shadow-sm"
          >
            Konsultasi Gratis
          </Link>
        </div>
      </nav>
    </header>
  )
}
