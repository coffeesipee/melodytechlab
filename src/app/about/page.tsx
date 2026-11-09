import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Terminal, Shield, Zap } from 'lucide-react'

export const metadata = {
  title: 'About Studio | Melodytechlab',
  description: 'Learn about Melodytechlab, a boutique software engineering studio crafting high-reliability web, mobile, and cloud software.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-36 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand-light text-xs font-mono mb-6">
            Studio Philosophy &amp; Standards
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Engineering software that survives the test of production.
          </h1>
          
          <p className="text-lg md:text-xl text-muted leading-relaxed mb-16">
            Melodytechlab was founded on a simple principle: high-stakes software should be engineered by senior practitioners who care about code quality, architectural durability, and business viability — not bloated agency teams with billable padding.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div className="p-6 rounded-2xl bg-card border border-card-border">
              <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand-light mb-4">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base mb-2">Pragmatic Tech Choices</h3>
              <p className="text-xs text-muted leading-relaxed">
                We select tools based on longevity and runtime performance — Go, Next.js, PostgreSQL, Docker — avoiding fleeting hype cycles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-card-border">
              <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand-light mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base mb-2">Zero Handoff Friction</h3>
              <p className="text-xs text-muted leading-relaxed">
                Direct client-to-engineer communication ensures technical realities guide strategic choices from day one.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-card-border">
              <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand-light mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base mb-2">High Leverage Delivery</h3>
              <p className="text-xs text-muted leading-relaxed">
                Automated CI/CD, modular scaffolding, and strict testing gates mean faster releases with fewer regression surprises.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center border-t border-card-border/60 pt-16 font-mono">
            <div>
              <p className="text-3xl font-bold text-foreground mb-1">99.9%</p>
              <p className="text-[11px] text-muted uppercase tracking-wider">Uptime Standards</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-light mb-1">Enterprise</p>
              <p className="text-[11px] text-muted uppercase tracking-wider">Clients Handled</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground mb-1">100%</p>
              <p className="text-[11px] text-muted uppercase tracking-wider">IP Ownership</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-light mb-1">Zero</p>
              <p className="text-[11px] text-muted uppercase tracking-wider">Agency Bloat</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
