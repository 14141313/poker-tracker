import { Input as HeadlessInput } from '@headlessui/react'
import { clsx } from 'clsx'
import React from 'react'

type InputProps = React.ComponentPropsWithoutRef<'input'> & {
  invalid?: boolean
}

export function Input({ className, invalid, ...props }: InputProps) {
  return (
    <HeadlessInput
      {...(props as React.ComponentPropsWithoutRef<'input'>)}
      data-invalid={invalid || undefined}
      className={clsx(
        'block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm',
        'placeholder:text-gray-400',
        'focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50',
        'data-[invalid]:border-negative data-[invalid]:ring-negative/20',
        className
      )}
    />
  )
}

export function InputGroup({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={clsx('relative', className)}>
      {children}
    </div>
  )
}
