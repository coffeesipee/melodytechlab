import { Code2, Smartphone, Cpu, CloudCog } from 'lucide-react'

interface Service {
  id: string
  title: string
  description: string
  icon?: string
}

const fallbackServices = [
  {
    id: "svc-web",
    title: "High-Performance Web Platforms",
    description: "Production web applications, multi-tenant dashboards, and high-concurrency portals built with Next.js, React, and Go backends.",
    icon: "code",
    deliverables: ["Sub-second TTFB", "Clean Domain Architecture", "Dynamic ISR & Edge Routing"]
  },
  {
    id: "svc-mobile",
    title: "Mission-Critical Mobile Apps",
    description: "Cross-platform mobile applications optimized for offline operations, real-time synchronization, and native-grade fluid performance.",
    icon: "mobile",
    deliverables: ["Offline-first SQLite/Sync", "Biometric & Push Notifications", "Cross-Platform Reliability"]
  },
  {
    id: "svc-ai",
    title: "AI & Autonomous Agent Orchestration",
    description: "Embed autonomous LLM workflows, custom retrieval pipelines (RAG), and deterministic tool-use agents into your operational software.",
    icon: "ai",
    deliverables: ["Autonomous Sub-agent Workflows", "Vector & Semantic Search", "Deterministic Guardrails"]
  },
  {
    id: "svc-infra",
    title: "Cloud Infrastructure & CI/CD",
    description: "Hardened deployments with Docker, automated testing pipelines, PostgreSQL tuning, and observability monitoring built for zero downtime.",
    icon: "infra",
    deliverables: ["Automated GitHub Actions CI/CD", "Containerization & K8s/Docker", "Observability & Sentinel Audits"]
  }
]

export function ServicesSection({ services }: { services?: Service[] }) {
  const displayServices = fallbackServices

  return (
    <section id="services" className="py-24 border-t border-card-border/60 bg-card/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-3xl mb-16">
          <span className="text-brand-light font-mono text-xs tracking-wider uppercase mb-3 block">
            Capabilities &amp; Engineering Disciplines
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Focused technical execution for businesses that cannot afford software failure.
          </h2>
          <p className="text-muted text-base md:text-lg leading-relaxed">
            We don&apos;t just build surface-level landing pages. We design end-to-end software architectures that remain performant, maintainable, and battle-tested under real production traffic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {displayServices.map((service, idx) => (
            <div
              key={service.id || idx}
              className="p-8 rounded-2xl bg-card border border-card-border hover:border-brand/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand-light mb-6 group-hover:scale-105 transition-transform">
                  {service.icon === 'mobile' ? (
                    <Smartphone className="w-6 h-6" />
                  ) : service.icon === 'ai' ? (
                    <Cpu className="w-6 h-6" />
                  ) : service.icon === 'infra' ? (
                    <CloudCog className="w-6 h-6" />
                  ) : (
                    <Code2 className="w-6 h-6" />
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-brand-light transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-6 border-t border-card-border/60 space-y-2">
                {service.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
