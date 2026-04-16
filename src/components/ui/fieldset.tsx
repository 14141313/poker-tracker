import {
  Field as HeadlessField,
  Label as HeadlessLabel,
  Description as HeadlessDescription,
} from '@headlessui/react'
import { clsx } from 'clsx'
import React from 'react'

export function Field({ className, children, ...props }: React.ComponentPropsWithoutRef<typeof HeadlessField>) {
  return (
    <HeadlessField {...props} className={clsx('space-y-1.5', className)}>
      {children}
    </HeadlessField>
  )
}

export function Label({ className, children, ...props }: React.ComponentPropsWithoutRef<typeof HeadlessLabel>) {
  return (
    <HeadlessLabel {...props} className={clsx('block text-sm font-medium text-gray-700', className)}>
      {children}
    </HeadlessLabel>
  )
}

export function Description({ className, children, ...props }: React.ComponentPropsWithoutRef<typeof HeadlessDescription>) {
  return (
    <HeadlessDescription {...props} className={clsx('text-sm text-gray-500', className)}>
      {children}
    </HeadlessDescription>
  )
}

export function ErrorMessage({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p className={clsx('text-xs text-negative bg-red-50 border border-red-200 rounded-lg px-3 py-2', className)}>
      {children}
    </p>
  )
}
