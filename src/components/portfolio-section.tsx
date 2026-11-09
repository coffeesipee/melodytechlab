import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'

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
    category: "Sistem Manajemen Lapangan",
    year: "2025",
    description: "Aplikasi manajemen pemeliharaan fasilitas regional untuk memudahkan pelaporan kendala, pelacakan tiket perbaikan secara real-time, dan verifikasi kondisi peralatan SPBU.",
    main_image_url: "https://zhtgdtvayubhjlhaedti.supabase.co/storage/v1/object/public/images/portfolio/main/eo5l2k4m21.png",
    challenge: "Pelaporan manual via spreadsheet rawan tercecer dan menyulitkan pemantauan durasi perbaikan teknisi di puluhan lokasi.",
    solution: "Dashboard terpusat yang memotong waktu alur koordinasi tim operasional dan memberikan laporan transparan.",
    tech_stack: ["Web App", "Role Access Management", "Laporan Real-time"]
  },
  {
    id: "p2",
    title: "KalaKita Wedding Planner",
    slug: "kalakita",
    client: "KalaKita Event SaaS",
    category: "Platform Event Digital",
    year: "2025",
    description: "Platform digital untuk calon pengantin dan event organizer dalam mengelola anggaran pernikahan, konfirmasi kehadiran tamu (RSVP otomatis), dan koordinasi vendor.",
    main_image_url: "https://zhtgdtvayubhjlhaedti.supabase.co/storage/v1/object/public/images/portfolio/main/gpwznea4wtf.png",
    challenge: "Pengelolaan rundown dan anggaran yang sering membingungkan jika dilakukan secara manual lewat chat.",
    solution: "Antarmuka rapi dan interaktif yang memudahkan kolaborasi keluarga serta kalkulasi biaya real-time.",
    tech_stack: ["Next.js", "Desain Responsif", "Interaktif Dashboard"]
  },
  {
    id: "p3",
    title: "Paradigm UNPAD 2024",
    slug: "paradigm-unpad",
    client: "Universitas Padjadjaran",
    category: "Website Event & Registrasi",
    year: "2024",
    description: "Portal resmi acara nasional Paradigm UNPAD untuk publikasi informasi kegiatan dan pendaftaran peserta dengan pengalaman navigasi yang cepat dan informatif.",
    main_image_url: "https://zhtgdtvayubhjlhaedti.supabase.co/storage/v1/object/public/images/portfolio/main/ajturz0g1o.png",
    challenge: "Lonjakan pengunjung saat periode registrasi dibuka yang membutuhkan website stabil dan tanpa lemot.",
    solution: "Website ringan dengan visual menarik yang memudahkan calon peserta mendaftar langsung dari smartphone.",
    tech_stack: ["Modern Web", "Optimasi Kecepatan", "Mobile First"]
  }
]

export function PortfolioSection({ portfolios }: { portfolios?: PortfolioItem[] }) {
  const displayItems = portfolios && portfolios.length > 0 ? portfolios : detailedPortfolio

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#fbfbfd]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <span className="text-brand font-semibold text-xs tracking-wider uppercase mb-2 block">
              Portofolio Pilihan
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-3">
              Proyek nyata yang telah kami selesaikan.
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base max-w-xl">
              Lihat bagaimana kami membantu klien dari berbagai bidang membangun solusi digital yang fungsional dan berkesan.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-brand hover:text-brand-hover"
          >
            Lihat Semua Proyek <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-12">
          {displayItems.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row gap-8 items-center rounded-3xl bg-white border border-zinc-200/90 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-zinc-300 transition-all ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Box */}
              <div className="w-full lg:w-1/2 relative aspect-video rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 group shrink-0">
                {project.main_image_url ? (
                  <Image
                    src={project.main_image_url}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-400 text-xs font-medium">
                    Preview Proyek
                  </div>
                )}
                <div className="absolute inset-0 bg-zinc-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-zinc-900 text-xs font-semibold shadow-lg hover:bg-zinc-50"
                  >
                    Buka Detail <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Text Box */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-100 text-xs font-semibold">
                      {project.category}
                    </span>
                    <span className="text-xs text-zinc-400">•</span>
                    <span className="text-xs text-zinc-500 font-medium">{project.client}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 mb-6 text-xs text-zinc-600 leading-relaxed">
                    <span className="font-semibold text-zinc-900 block mb-1">Manfaat yang Dirasakan:</span>
                    {project.solution || "Membantu operasional berjalan lebih teratur dan mempermudah interaksi pengguna."}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                  <div className="flex flex-wrap gap-1.5">
                    {(project.tech_stack || ["Modern Web", "Desain Responsif"]).map((t, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-md bg-zinc-100 text-zinc-600 text-[11px] font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link href={`/portfolio/${project.slug}`} className="text-xs font-semibold text-brand hover:underline">
                    Selengkapnya →
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
