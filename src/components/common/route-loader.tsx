'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { ProfessionalLoader } from '@/components/layout/professional-loader'

export function RouteLoader() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 100) // Adjust delay as needed
    return () => clearTimeout(timer)
  }, [pathname, searchParams])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <ProfessionalLoader size="md" />
    </div>
  )
}