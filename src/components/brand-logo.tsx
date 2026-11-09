import React from 'react'

export function BrandLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center rounded-xl bg-brand text-white shadow-sm shadow-brand/30 group-hover:bg-brand-hover transition-colors ${className}`}>
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
        <path
          d="M10 28V12L20 22L30 12V28"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="28" r="2.2" fill="white" />
      </svg>
    </div>
  )
}
