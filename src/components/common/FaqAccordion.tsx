'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/cn'

export interface FaqItem {
  q: string
  a: string
}

interface FaqAccordionProps {
  items: readonly FaqItem[] | FaqItem[]
  className?: string
  /** Index of the item open on first render; set to `null` for all closed. */
  defaultOpenIndex?: number | null
}

export function FaqAccordion({ items, className, defaultOpenIndex = 0 }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex)

  return (
    <div
      className={cn(
        'w-full overflow-hidden rounded-xl',
        className
      )}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const contentId = `faq-panel-${index}`

        return (
          <div
            key={index}
            className="border-b border-border/80 last:border-b-0"
          >
            <button
              type="button"
              onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
              className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors md:py-5"
              aria-expanded={isOpen}
              aria-controls={contentId}
            >
              <span
                className={cn(
                  'text-sm font-medium leading-snug tracking-tight md:text-base',
                  isOpen ? 'text-primary' : 'text-foreground/90'
                )}
              >
                {item.q}
              </span>
              <span className="shrink-0" aria-hidden>
                {isOpen ? (
                  <Minus className="h-4 w-4 text-primary" strokeWidth={2} />
                ) : (
                  <Plus className="h-4 w-4 text-foreground/55 dark:text-foreground/50" strokeWidth={2} />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={contentId}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-4 text-sm leading-relaxed text-muted-foreground md:pb-5">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
