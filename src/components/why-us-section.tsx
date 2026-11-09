import { ShieldCheck, Zap, GitCommit, Layers } from 'lucide-react'

export function WhyUsSection() {
  const pillars = [
    {
      icon: GitCommit,
      title: "Direct Senior Engineering",
      desc: "You collaborate directly with engineers who architect and write your software. No account managers playing telephone, no diluted technical requirements."
    },
    {
      icon: ShieldCheck,
      title: "Production-Grade Quality Gates",
      desc: "Every release undergoes strict verification: comprehensive unit/integration test coverage, security scans, and database query optimization."
    },
    {
      icon: Zap,
      title: "Rapid Iteration Velocity",
      desc: "We operate in short, autonomous build cycles. You get testable staging builds every few days, allowing for fast feedback loops and early pivots."
    },
    {
      icon: Layers,
      title: "Modular, Anti-Lock-in Code",
      desc: "We write clean, strictly typed code with modern open standards. You retain 100% intellectual property ownership and zero proprietary vendor lock-in."
    }
  ]

  return (
    <section className="py-24 border-t border-card-border/60 bg-card/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-brand-light font-mono text-xs tracking-wider uppercase mb-3 block">
              The Engineering Advantage
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
              A boutique model built for clarity, precision, and speed.
            </h2>
            <p className="text-muted text-base md:text-lg mb-8 leading-relaxed">
              Traditional agencies drown projects in account management layers, junior handoffs, and billing hours. Melodytechlab is built on a high-leverage studio model: senior engineering talent dedicated to solving real business problems.
            </p>

            <div className="p-6 rounded-2xl bg-card border border-card-border">
              <h3 className="font-bold text-base mb-2 text-foreground">
                Technical Discovery Session
              </h3>
              <p className="text-muted text-xs md:text-sm leading-relaxed mb-4">
                Schedule a 30-minute architecture discovery call. We review your existing stack, evaluate bottlenecks, and outline a concrete execution roadmap.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-xs font-mono font-semibold text-brand-light hover:underline"
              >
                Book Discovery Session →
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <div key={i} className="p-6 rounded-2xl bg-card border border-card-border hover:border-brand/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand-light mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-foreground">{pillar.title}</h3>
                  <p className="text-muted text-xs md:text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
