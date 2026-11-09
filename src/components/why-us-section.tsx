import { MessageCircle, ShieldCheck, Clock, HeartHandshake } from 'lucide-react'

export function WhyUsSection() {
  const reasons = [
    {
      icon: MessageCircle,
      title: "Komunikasi Lancar & Jelas",
      desc: "Anda berdiskusi langsung dengan tim pembuat produk tanpa perantara sales yang berbelit-belit, sehingga setiap kebutuhan dipahami tepat sasaran."
    },
    {
      icon: Clock,
      title: "Pengerjaan Tepat Waktu",
      desc: "Kami menghargai waktu Anda. Target pengerjaan disepakati di awal dan progres dilaporkan secara berkala agar tidak ada kejutan jadwal."
    },
    {
      icon: ShieldCheck,
      title: "Kualitas Rapi & Teruji",
      desc: "Tidak asal jadi. Setiap tombol, form, dan tampilan kami uji di berbagai ukuran layar ponsel dan browser agar tidak mengecewakan pelanggan Anda."
    },
    {
      icon: HeartHandshake,
      title: "Pendampingan Pasca Rilis",
      desc: "Setelah website atau aplikasi online, kami siap membantu penyesuaian awal dan memastikan Anda mengerti cara mengelolanya dengan tenang."
    }
  ]

  return (
    <section className="py-20 md:py-28 bg-white border-t border-zinc-200/80">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-brand font-semibold text-xs tracking-wider uppercase mb-2 block">
              Mengapa Melodytechlab
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight mb-6 leading-tight">
              Kerja sama yang transparan, hasil akhir yang membanggakan.
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mb-8 leading-relaxed">
              Membangun produk digital seringkali terasa membingungkan bagi pemilik bisnis. Di Melodytechlab, kami mempermudah prosesnya: bahasa yang mudah dipahami, solusi yang masuk akal, dan komitmen pada hasil nyata.
            </p>

            <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-100">
              <h3 className="font-semibold text-sm text-sky-900 mb-1.5">
                Konsultasi Kebutuhan Gratis
              </h3>
              <p className="text-xs text-sky-800 leading-relaxed mb-3">
                Punya rencana atau ingin memperbaiki sistem yang sudah ada? Ngobrol santai 20-30 menit untuk bahas solusi terbaik dan estimasi biaya.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-xs font-semibold text-brand hover:underline"
              >
                Jadwalkan Ngobrol Santai →
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:bg-white hover:border-sky-200 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 mb-1.5">{item.title}</h3>
                  <p className="text-zinc-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
