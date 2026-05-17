'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'
import { 
  LayoutDashboard, 
  Briefcase, 
  FileText, 
  Settings, 
  LogOut, 
  Mail
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard', href: '/super/dashboard', icon: LayoutDashboard },
  { label: 'Services', href: '/super/services', icon: Settings },
  { label: 'Portfolios', href: '/super/portfolios', icon: Briefcase },
  { label: 'Articles', href: '/super/articles', icon: FileText },
  { label: 'Leads', href: '/super/leads', icon: Mail },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const supabase = createClient()
  const router = useRouter()

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/super/login')
    router.refresh()
  }

  return (
    <aside className="w-64 border-r border-card-border flex flex-col">
      <div className="p-6 border-b border-card-border">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white text-xs">SD</div>
          <span>Solo Dev</span>
        </Link>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
                isActive 
                  ? "bg-brand/10 text-brand font-medium" 
                  : "text-muted hover:text-foreground hover:bg-card-hover"
              )}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
          )
        })}
      </nav>
      
      <div className="p-4 border-t border-card-border">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-4 py-2 w-full text-muted hover:text-red-500 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </aside>
  )
}
