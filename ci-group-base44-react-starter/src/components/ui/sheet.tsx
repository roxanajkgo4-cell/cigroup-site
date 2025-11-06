import React from 'react'
export function Sheet({ children }: React.PropsWithChildren) { return <>{children}</> }
export function SheetTrigger({ children }: React.PropsWithChildren) { return <>{children}</> }
export function SheetContent({ children }: React.PropsWithChildren<{ side?: 'left'|'right' }>) {
  return <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-4">{children}</div>
}
