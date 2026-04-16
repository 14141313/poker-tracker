import { Select as HeadlessSelect } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { clsx } from 'clsx'
import React from 'react'

type SelectProps = React.ComponentPropsWithoutRef<'select'> & {
  invalid?: boolean
}

export function Select({ className, invalid, children, ...props }: SelectProps) {
  return (
    <span className="relative block w-full">
      <HeadlessSelect
        {...(props as React.ComponentPropsWithoutRef<'select'>)}
        data-invalid={invalid || undefined}
        className={clsx(
          'block w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 pl-3 pr-8 text-sm text-gray-900 shadow-sm',
          'focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'data-[invalid]:border-negative',
          className
        )}
      >
        {children}
      </HeadlessSelect>
      <ChevronDownIcon className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 size-4 text-gray-500" />
    </span>
  )
}
