'use client'

import Image from 'next/image'
import { cn } from '@/lib/cn'

interface ThemedLogoProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

/**
 * ThemedLogo Component
 * 
 * Renders a logo image that adapts its color to match the current theme's primary color.
 * Uses CSS filters to colorize the logo dynamically.
 */
export function ThemedLogo({ src, alt, width, height, className }: ThemedLogoProps) {
  return (
    <div className={cn('relative', className)} style={{ width, height }}>
      {/* Base logo - hidden but maintains layout */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="opacity-0"
        priority
      />
      
      {/* Themed overlay using CSS mask */}
      <div 
        className="absolute inset-0 bg-primary transition-colors duration-300"
        style={{
          maskImage: `url(${src})`,
          WebkitMaskImage: `url(${src})`,
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
      />
    </div>
  )
}
