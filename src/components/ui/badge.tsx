import { clsx } from 'clsx'
import React from 'react'

type BadgeColor = 'brand' | 'positive' | 'negative' | 'zinc' | 'amber' | 'orange'

const colors: Record<BadgeColor, string> = {
  brand:    'bg-brand-light text-brand ring-1 ring-brand/20',
  positive: 'bg-green-50 text-positive ring-1 ring-green-200',
  negative: 'bg-red-50 text-negative ring-1 ring-red-200',
  zinc:     'bg-gray-100 text-gray-600 ring-1 ring-gray-200',
  amber:    'bg-amber-50 text-amber-700 ring-1 ring-amber-200',
  orange:   'bg-orange-50 text-orange-600 ring-1 ring-orange-200',
}

type BadgeProps = {
  color?: BadgeColor
  className?: string
  children: React.ReactNode
}

export function Badge({ color = 'zinc', className, children }: BadgeProps) {
  return (
    <span className={clsx(
      'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium',
      colors[color],
      className
    )}>
      {children}
    </span>
  )
}
