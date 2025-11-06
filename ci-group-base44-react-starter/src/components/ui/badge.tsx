import React from 'react'
export function Badge({ className='', children }: React.PropsWithChildren<{ className?: string }>) {
  return <span className={`inline-block text-xs px-2 py-1 rounded bg-gray-200 ${className}`}>{children}</span>
}
