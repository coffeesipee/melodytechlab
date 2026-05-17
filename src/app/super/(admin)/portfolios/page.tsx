import { createClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'
import { Plus, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default async function PortfoliosAdminPage() {
  const supabase = await createClient()
  const { data: portfolios } = await supabase
    .from('portfolios')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Portfolios</h1>
          <p className="text-muted mt-2">Manage your project showcase.</p>
        </div>
        <Link href="/super/portfolios/new">
          <Button variant="brand" className="gap-2">
            <Plus className="w-4 h-4" /> Add Project
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios?.map((project) => (
          <div key={project.id} className="group rounded-2xl border border-card-border bg-card overflow-hidden flex flex-col">
            <div className="relative aspect-video bg-background/50 border-b border-card-border">
              {project.main_image_url ? (
                <Image
                  src={project.main_image_url}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted italic text-xs">
                  No Preview
                </div>
              )}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Link href={`/super/portfolios/${project.id}`}>
                  <Button size="sm" variant="secondary">Edit</Button>
                </Link>
                <Link href={`/portfolio/${project.slug}`} target="_blank">
                  <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="p-4 flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand">{project.category}</span>
                <span className="text-[10px] text-muted">{project.year}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-muted text-xs line-clamp-2 mb-4">{project.description}</p>
            </div>
          </div>
        ))}
        {(!portfolios || portfolios.length === 0) && (
          <div className="col-span-full py-20 rounded-2xl border border-dashed border-card-border flex flex-col items-center justify-center text-center">
            <Briefcase className="w-12 h-12 text-muted mb-4 opacity-20" />
            <h3 className="text-xl font-bold mb-2">No projects yet</h3>
            <p className="text-muted text-sm mb-6">Start by adding your first portfolio item.</p>
            <Link href="/super/portfolios/new">
              <Button variant="outline" size="sm">Create Project</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

function Briefcase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}
