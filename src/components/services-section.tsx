import { Globe, Smartphone, Sparkles, Server, Check } from 'lucide-react'

interface Service {
  id: string
  title: string
  description: string
  icon?: string
}

const friendlyServices = [
  {
    id: "web-dev",
    title: "Pembuatan Website Profesional",
    description: "Website perusahaan, landing page konversi tinggi, hingga web app custom dengan tampilan modern, loading cepat, dan rapi di semua ukuran layar ponsel/laptop.",
    icon: "web",
    features: ["Desain Custom & Eksklusif", "SEO Friendly & Cepat Diakses", "Integrasi CMS / Admin Mudah"]
  },
  {
    id: "mobile-dev",
    title: "Aplikasi Mobile (Android & iOS)",
    description: "Kembangkan aplikasi mobile dengan navigasi yang intuitif, antarmuka mulus, dan performa stabil agar pelanggan Anda betah menggunakannya.",
    icon: "mobile",
    features: ["Antarmuka Elegan & Ringan", "Notifikasi & Autentikasi Pengguna", "Siap Rilis di Play Store / App Store"]
  },
  {
    id: "ai-solutions",
    title: "Integrasi Fitur AI & Automasi",
    description: "Tingkatkan efisiensi bisnis dengan chatbot pintar, automasi alur kerja internal, dan analisis data cerdas yang terpasang langsung ke aplikasi Anda.",
    icon: "ai",
    features: ["Chatbot Customer Service 24/7", "Automasi Dokumen & Laporan", "Efisiensi Waktu Operasional"]
  },
  {
    id: "deploy-maintenance",
    title: "Deployment & Perawatan Sistem",
    description: "Pendampingan teknis menyeluruh mulai dari setup domain, server cloud, hingga pemeliharaan rutin dan perbaikan bug agar website Anda selalu online.",
    icon: "server",
    features: ["Bantuan Setup Server & Domain", "Backup & Keamanan Terjaga", "Dukungan Teknis Siap Bantu"]
  }
]

export function ServicesSection({ services }: { services?: Service[] }) {
  return (
    <section id="services" className="py-20 md:py-28 bg-white border-y border-zinc-200/80">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand font-semibold text-xs tracking-wider uppercase mb-2 block">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-4">
            Solusi digital lengkap untuk memajukan bisnis Anda.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
            Fokus kembangkan bisnis Anda, biar urusan desain antarmuka, pembuatan kode, dan kelancaran server kami yang tangani secara profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {friendlyServices.map((service) => (
            <div
              key={service.id}
              className="p-7 rounded-2xl bg-zinc-50/70 border border-zinc-200/90 hover:border-sky-300 hover:bg-white hover:shadow-lg hover:shadow-sky-100/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-5">
                  {service.icon === 'web' && <Globe className="w-6 h-6" />}
                  {service.icon === 'mobile' && <Smartphone className="w-6 h-6" />}
                  {service.icon === 'ai' && <Sparkles className="w-6 h-6" />}
                  {service.icon === 'server' && <Server className="w-6 h-6" />}
                </div>

                <h3 className="text-xl font-bold text-zinc-900 mb-2.5">
                  {service.title}
                </h3>

                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-5 border-t border-zinc-200/80 space-y-2">
                {service.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                    <Check className="w-4 h-4 text-brand shrink-0" />
                    <span>{feat}</span>
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
