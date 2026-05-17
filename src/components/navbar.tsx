import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <div className="bg-card/40 backdrop-blur-xl border border-card-border/50 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-foreground font-bold text-sm transition-all group-hover:bg-brand group-hover:text-white group-hover:border-brand">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm leading-none">Solo Dev Agency</span>
            <span className="text-[10px] text-muted">Web, Mobile, Deployment & Support</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-muted mr-4">
          <Link href="/#services" className="hover:text-foreground transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="/#contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
