import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles, Laptop, Smartphone, Rocket, ChevronRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto">
          {/* Friendly pill badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-800 text-xs font-medium mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Jasa Pembuatan Website &amp; Aplikasi Mobile Terpercaya
          </div>

          {/* Punchy, clear headline (human & business-first) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[1.15] mb-6">
            Ubah ide produk digital Anda jadi website &amp; aplikasi yang <span className="text-brand">cepat, indah, dan siap pakai.</span>
          </h1>

          {/* Warm, professional subheadline */}
          <p className="text-base sm:text-lg text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Dari landing page promosi, web app perusahaan, hingga aplikasi mobile. Kami bantu bisnis dan startup Anda meluncur tanpa ribet, dengan hasil rapi dan performa maksimal.
          </p>

          {/* Action CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-brand text-white hover:bg-brand-hover transition-all shadow-md shadow-brand/20"
            >
              Mulai Konsultasi Gratis
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 transition-all shadow-xs"
            >
              Lihat Contoh Hasil Kerja
            </Link>
          </div>

          {/* Proof Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Komunikasi langsung tanpa perantara
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Desain modern &amp; ramah pengguna (UX)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Garansi maintenance &amp; deploy tuntas
            </span>
          </div>
        </div>

        {/* Clean, Non-Technical Product Showcase Card */}
        <div className="mt-14 relative max-w-4xl mx-auto rounded-2xl bg-white border border-zinc-200/90 shadow-xl shadow-zinc-200/60 p-4 sm:p-6 overflow-hidden">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
              <span className="ml-2 text-xs font-medium text-zinc-400">melodytech.my.id/preview</span>
            </div>
            <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full">
              Siap Dikembangkan
            </span>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-sky-200 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-sm text-zinc-900 mb-1">Web Development</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Website company profile, landing page marketing, hingga sistem dashboard internal.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-sky-200 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-sm text-zinc-900 mb-1">Mobile Apps</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Aplikasi iOS &amp; Android responsif, mulus digunakan, dan ramah pengguna.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-sky-200 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-sm text-zinc-900 mb-1">Peluncuran &amp; Support</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Bantu hosting, domain, setup server, dan perbaikan kendala teknis sampai beres.
              </p>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-sky-50/60 border border-sky-100/80 flex items-center justify-between text-xs text-sky-900">
            <span>Punya proyek baru yang butuh estimasi biaya &amp; waktu?</span>
            <Link href="#contact" className="font-semibold text-sky-700 hover:underline flex items-center gap-1">
              Tanya Estimasi <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
