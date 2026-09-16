'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ZoomIn, ZoomOut } from 'lucide-react'

interface GalleryImage {
  id: string
  image_url: string
}

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [selected, setSelected] = useState<GalleryImage | null>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  function open(img: GalleryImage) {
    setSelected(img)
    setScale(1)
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {images.map((img) => (
          <button
            key={img.id}
            type="button"
            onClick={() => open(img)}
            className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-card-border cursor-zoom-in"
          >
            <Image
              src={img.image_url}
              alt="Gallery"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover object-top"
            />
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setScale((s) => Math.min(s * 1.5, 8)) }}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setScale((s) => Math.max(s / 1.5, 1)) }}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="max-w-full max-h-full overflow-auto" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selected.image_url}
              alt="Gallery preview"
              width={1600}
              height={900}
              className="w-auto h-auto max-w-[85vw] max-h-[85vh] object-contain transition-transform duration-200"
              style={{ transform: `scale(${scale})` }}
            />
          </div>
        </div>
      )}
    </>
  )
}