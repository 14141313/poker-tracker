import { Button as HeadlessButton } from '@headlessui/react'
import { clsx } from 'clsx'
import React from 'react'

type ButtonProps = {
  variant?: 'solid' | 'outline' | 'plain'
  className?: string
  children?: React.ReactNode
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function Button({
  variant = 'solid',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <HeadlessButton
      {...props}
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
        variant === 'solid' && 'bg-brand text-white shadow-sm hover:bg-brand-dark px-4 py-2',
        variant === 'outline' && 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 px-4 py-2',
        variant === 'plain' && 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-1.5',
        className
      )}
    >
      {children}
    </HeadlessButton>
  )
}
