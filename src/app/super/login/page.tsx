'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Loader2, Lock } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const supabase = createClient()
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setIsLoading(false)
    } else {
      router.push('/super/dashboard')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md p-8 rounded-3xl bg-card border border-card-border">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand mb-4">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold">Admin Portal</h1>
          <p className="text-muted text-sm mt-2">Solo Dev Agency Management</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-background border border-card-border focus:border-brand outline-none"
              required
            />
          </div>
          
          {error && <p className="text-red-500 text-xs">{error}</p>}
          
          <Button type="submit" disabled={isLoading} variant="brand" className="w-full py-6">
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : 'Sign In'}
          </Button>
        </form>
      </div>
    </div>
  )
}
