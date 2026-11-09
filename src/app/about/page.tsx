import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Sparkles, HeartHandshake, ShieldCheck, Zap } from 'lucide-react'

export const metadata = {
  title: 'Tentang Kami | Melodytechlab',
  description: 'Mengenal Melodytechlab, studio pembuatan website dan aplikasi mobile terpercaya untuk bisnis dan startup.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-100 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Tentang Melodytechlab
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-6 leading-tight">
            Membantu bisnis melangkah ke ranah digital dengan percaya diri.
          </h1>
          
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-12">
            Melodytechlab hadir sebagai mitra digital bagi bisnis, UMKM, dan perorangan yang membutuhkan website serta aplikasi mobile berkualitas tanpa proses yang berbelit-belit. Kami percaya bahwa produk digital yang hebat berawal dari komunikasi yang jujur dan pemahaman mendalam tentang kebutuhan Anda.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-zinc-900 mb-1.5">Pendekatan Ramah</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Kami jelaskan setiap istilah teknis dengan bahasa yang sederhana agar Anda dapat mengambil keputusan bisnis terbaik.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-zinc-900 mb-1.5">Komitmen Kualitas</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Hasil pengerjaan selalu melalui pengecekan menyeluruh agar bebas error, cepat diakses, dan nyaman dipandang.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-zinc-900 mb-1.5">Proses Cepat</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Alur kerja efisien memastikan proyek Anda dapat segera online dan mulai melayani calon pelanggan.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
