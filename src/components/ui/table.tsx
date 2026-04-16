import { clsx } from 'clsx'
import React from 'react'

export function Table({ className, children }: {
  className?: string
  dense?: boolean
  striped?: boolean
  grid?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="overflow-x-auto">
      <table className={clsx('min-w-full text-sm', className)}>
        {children}
      </table>
    </div>
  )
}

export function TableHead({ className, children }: { className?: string; children: React.ReactNode }) {
  return <thead className={clsx('border-b border-gray-100', className)}>{children}</thead>
}

export function TableBody({ className, children }: { className?: string; children: React.ReactNode }) {
  return <tbody className={clsx('divide-y divide-gray-50', className)}>{children}</tbody>
}

export function TableFoot({ className, children }: { className?: string; children: React.ReactNode }) {
  return <tfoot className={clsx('border-t border-gray-200', className)}>{children}</tfoot>
}

export function TableRow({ className, children, onClick }: {
  className?: string
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <tr
      onClick={onClick}
      className={clsx(
        'transition-colors',
        onClick && 'cursor-pointer hover:bg-gray-50',
        className
      )}
    >
      {children}
    </tr>
  )
}

export function TableHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <th className={clsx(
      'px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap',
      className
    )}>
      {children}
    </th>
  )
}

export function TableCell({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <td className={clsx('px-4 py-3 text-sm text-gray-700 whitespace-nowrap', className)}>
      {children}
    </td>
  )
}
