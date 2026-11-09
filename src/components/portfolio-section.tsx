import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Button } from './ui/button'

export interface PortfolioItem {
  id: string
  title: string
  slug: string
  description: string
  category: string
  main_image_url: string
  client: string
  year?: string
  challenge?: string
  solution?: string
  tech_stack?: string[]
}

const detailedPortfolio: PortfolioItem[] = [
  {
    id: "p1",
    title: "Smart Work Order System",
    slug: "smart-wo",
    client: "Pertamina Retail Region VI",
    category: "Enterprise Operations",
    year: "2025",
    description: "Enterprise operational maintenance and dispatch engine built to automate field ticketing, SLA monitoring, and regional equipment audits.",
    main_image_url: "https://zhtgdtvayubhjlhaedti.supabase.co/storage/v1/object/public/images/portfolio/main/eo5l2k4m21.png",
    challenge: "Complex cross-regional maintenance reporting with low field connectivity and manual spreadsheet bottlenecks.",
    solution: "Centralized responsive dashboard with automated SLA routing, field photo verification, and status dispatch workflows.",
    tech_stack: ["Web Application", "PostgreSQL", "Role-Based Access", "Operational Analytics"]
  },
  {
    id: "p2",
    title: "KalaKita Event SaaS",
    slug: "kalakita",
    client: "KalaKita Digital",
    category: "Fullstack SaaS",
    year: "2025",
    description: "Comprehensive multi-tenant event management platform featuring dynamic budget allocation, automated RSVP sync, and interactive vendor pipelines.",
    main_image_url: "https://zhtgdtvayubhjlhaedti.supabase.co/storage/v1/object/public/images/portfolio/main/gpwznea4wtf.png",
    challenge: "Fragile communication between planners and clients leading to budget oversights and chaotic vendor tracking.",
    solution: "Structured SaaS architecture with real-time budget forecasting, exportable financial summaries, and client guest portal.",
    tech_stack: ["Next.js", "Supabase", "Tailwind CSS", "Financial Reporting"]
  },
  {
    id: "p3",
    title: "Paradigm UNPAD 2024",
    slug: "paradigm-unpad",
    client: "Universitas Padjadjaran",
    category: "Brand & Registrations",
    year: "2024",
    description: "High-traffic institutional portal and participant registration pipeline for UNPAD's premier annual academic forum.",
    main_image_url: "https://zhtgdtvayubhjlhaedti.supabase.co/storage/v1/object/public/images/portfolio/main/ajturz0g1o.png",
    challenge: "Handling concurrent traffic spikes during registration windows without latency degradation or form abandonment.",
    solution: "Edge-cached static pages with optimized asset delivery and instantaneous form feedback pipelines.",
    tech_stack: ["Edge Caching", "Responsive UI", "Form Validation", "Asset Optimization"]
  }
]

export function PortfolioSection({ portfolios }: { portfolios?: PortfolioItem[] }) {
  const displayItems = portfolios && portfolios.length > 0 ? portfolios : detailedPortfolio

  return (
    <section id="portfolio" className="py-24 border-t border-card-border/60 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-light font-mono text-xs tracking-wider uppercase mb-3 block">
              Case Studies &amp; Selected Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Proven digital systems built for measurable impact.
            </h2>
            <p className="text-muted text-base md:text-lg">
              Explore how we translate complex business workflows into robust, highly-reliable web and mobile software.
            </p>
          </div>
          <Link href="/portfolio">
            <Button variant="outline" className="rounded-xl border-card-border hover:bg-card gap-2">
              All Projects <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="space-y-16">
          {displayItems.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row gap-10 items-stretch rounded-3xl bg-card border border-card-border p-6 md:p-8 hover:border-brand/40 transition-all ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Preview Image */}
              <div className="flex-1 relative aspect-video rounded-2xl overflow-hidden bg-background border border-card-border group">
                {project.main_image_url ? (
                  <Image
                    src={project.main_image_url}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted font-mono text-xs">
                    Mockup Preview
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Link href={`/portfolio/${project.slug}`}>
                    <Button size="sm" className="bg-brand hover:bg-brand-dark text-white rounded-lg gap-2 text-xs">
                      View Case Study <ExternalLink className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex-1 flex flex-col justify-between py-2">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand-light text-xs font-mono font-medium">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-muted">{project.client}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    {project.title}
                  </h3>

                  <p className="text-muted text-sm md:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    <div className="p-3.5 rounded-xl bg-background/50 border border-card-border">
                      <span className="text-[10px] font-mono uppercase text-muted tracking-wider block mb-1">
                        Architecture Goal
                      </span>
                      <p className="text-xs text-foreground leading-relaxed">
                        {project.challenge || "Eliminate operational friction and guarantee system uptime."}
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-background/50 border border-card-border">
                      <span className="text-[10px] font-mono uppercase text-muted tracking-wider block mb-1">
                        Engineered Solution
                      </span>
                      <p className="text-xs text-brand-light leading-relaxed">
                        {project.solution || "Production-hardened code with verified data consistency."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-card-border/60">
                  <div className="flex flex-wrap gap-2">
                    {(project.tech_stack || ["Next.js", "Postgres", "Clean Code"]).map((t, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-md bg-card-hover border border-card-border text-[11px] font-mono text-muted">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link href={`/portfolio/${project.slug}`} className="text-xs font-semibold text-brand-light hover:underline flex items-center gap-1 shrink-0">
                    Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
