import React from 'react'
export function Select({ children }: React.PropsWithChildren) { return <div>{children}</div> }
export function SelectTrigger({ children }: React.PropsWithChildren) { return <button className="border rounded px-3 py-2 w-full text-left">{children}</button> }
export function SelectValue({ placeholder }: { placeholder?: string }) { return <span>{placeholder}</span> }
export function SelectContent({ children }: React.PropsWithChildren) { return <div className="border rounded p-2 mt-2">{children}</div> }
export function SelectItem({ value, children }: React.PropsWithChildren<{ value: string }>) { return <div data-value={value} className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">{children}</div> }
