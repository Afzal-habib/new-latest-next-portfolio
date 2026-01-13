'use client'

import { usePathname } from 'next/navigation'
import { Header, Footer } from './index'

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isResume = pathname?.startsWith('/resume')

  return (
    <div className="relative flex min-h-screen flex-col">
      {!isResume && <Header />}
      <main className="flex-1">{children}</main>
      {!isResume && <Footer />}
    </div>
  )
}