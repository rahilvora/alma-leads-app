'use client'

import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import Button from '@/app/components/shared/button'

export default function LoginPage() {
  const { login } = useAuth()
  const router = useRouter()

  const handleLogin = () => {
    login()
    router.push('/dashboard')
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <p>This is a mock login page. It will be replaced with a real login page in the future.</p>
      <Button
        onClick={handleLogin}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Login
      </Button>
    </div>
  )
} 