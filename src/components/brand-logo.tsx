import React from 'react'

export function BrandLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center rounded-xl bg-card border border-card-border overflow-hidden group-hover:border-brand/60 transition-colors ${className}`}>
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <path
          d="M10 28V12L20 22L30 12V28"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-foreground group-hover:text-brand-light transition-colors"
        />
        <circle cx="20" cy="28" r="2" className="fill-brand" />
      </svg>
    </div>
  )
}
