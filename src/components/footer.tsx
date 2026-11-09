import Link from 'next/link'
import siteConfig from '@/config/site.json'
import { BrandLogo } from '@/components/brand-logo'

export function Footer() {
  return (
    <footer className="py-14 bg-zinc-900 text-zinc-400 border-t border-zinc-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          <div className="flex items-center gap-3">
            <BrandLogo className="w-8 h-8 rounded-lg" />
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-white">{siteConfig.name}</span>
              <span className="text-xs text-zinc-400">Jasa Pembuatan Website &amp; Aplikasi Mobile</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-[13px]">
            <Link href="/#services" className="hover:text-white transition-colors">Layanan</Link>
            <Link href="/portfolio" className="hover:text-white transition-colors">Portofolio</Link>
            <Link href="/articles" className="hover:text-white transition-colors">Artikel</Link>
            <Link href="/about" className="hover:text-white transition-colors">Tentang Kami</Link>
            <Link href="/#contact" className="hover:text-white transition-colors">Kontak</Link>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Melodytechlab. Seluruh hak cipta dilindungi.</p>
          <p>Dibuat untuk bisnis yang mengutamakan kualitas &amp; kepraktisan.</p>
        </div>
      </div>
    </footer>
  )
}
