'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Send, CheckCircle2, MessageSquare, Clock, ShieldCheck } from 'lucide-react'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 500)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#fbfbfd]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="rounded-3xl bg-white border border-zinc-200/90 overflow-hidden shadow-xl shadow-zinc-200/40">
          <div className="grid md:grid-cols-2">
            {/* Left Column */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-zinc-100 flex flex-col justify-between bg-zinc-50/50">
              <div>
                <span className="text-brand font-semibold text-xs tracking-wider uppercase mb-2 block">
                  Hubungi Kami
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight mb-4">
                  Ceritakan ide atau kendala sistem Anda.
                </h2>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  Tidak perlu sungkan bila detail proyek Anda belum matang. Kami bantu susun rencana teknis dan berikan rekomendasi yang paling hemat biaya.
                </p>

                <div className="space-y-3.5">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-zinc-200/80 shadow-2xs">
                    <MessageSquare className="w-4 h-4 text-brand shrink-0" />
                    <span className="text-xs text-zinc-700 font-medium">Konsultasi awal 100% gratis</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-zinc-200/80 shadow-2xs">
                    <Clock className="w-4 h-4 text-brand shrink-0" />
                    <span className="text-xs text-zinc-700 font-medium">Balasan cepat dalam 24 jam</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-zinc-200/80 shadow-2xs">
                    <ShieldCheck className="w-4 h-4 text-brand shrink-0" />
                    <span className="text-xs text-zinc-700 font-medium">Privasi data &amp; ide terjamin aman</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-200/80 text-xs text-zinc-500">
                Email langsung: <a href="mailto:hello@melodytech.my.id" className="font-semibold text-brand hover:underline">hello@melodytech.my.id</a>
              </div>
            </div>

            {/* Right Column Form */}
            <div className="p-8 md:p-10 bg-white">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-1.5">Pesan Berhasil Terkirim!</h3>
                  <p className="text-zinc-600 text-xs sm:text-sm max-w-xs mb-6 leading-relaxed">
                    Terima kasih. Kami akan mempelajari kebutuhan Anda dan segera menghubungi via email.
                  </p>
                  <Button variant="outline" size="sm" onClick={() => setSubmitted(false)} className="rounded-full">
                    Kirim Pesan Lain
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Nama Lengkap Anda *
                    </label>
                    <input
                      required
                      name="name"
                      placeholder="Contoh: Budi Santoso"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:border-brand focus:ring-1 focus:ring-brand outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Email Aktif *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="budi@perusahaan.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:border-brand focus:ring-1 focus:ring-brand outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Layanan yang Dibutuhkan *
                    </label>
                    <select
                      required
                      name="service_type"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 focus:border-brand focus:ring-1 focus:ring-brand outline-none text-sm transition-all"
                    >
                      <option value="">Pilih layanan</option>
                      <option value="web">Pembuatan Website Baru / Redesign</option>
                      <option value="mobile">Pembuatan Aplikasi Mobile (Android/iOS)</option>
                      <option value="ai">Integrasi AI / Chatbot / Automasi</option>
                      <option value="maintenance">Perawatan Server / Perbaikan Bug</option>
                      <option value="other">Konsultasi Kebutuhan Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                      Ceritakan Kebutuhan Proyek *
                    </label>
                    <textarea
                      required
                      name="details"
                      rows={3}
                      placeholder="Contoh: Saya butuh website katalog produk yang bisa menerima pesanan via WhatsApp..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 focus:border-brand focus:ring-1 focus:ring-brand outline-none text-sm transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand hover:bg-brand-hover text-white rounded-full py-5 text-sm font-semibold shadow-md shadow-brand/20 gap-2 mt-2"
                  >
                    {loading ? "Mengirim..." : (
                      <>
                        <Send className="w-4 h-4" />
                        Kirim Pertanyaan
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
