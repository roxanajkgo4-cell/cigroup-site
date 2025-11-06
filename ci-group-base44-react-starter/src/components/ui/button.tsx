import React from 'react'
export function Button({ className='', children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={`px-4 py-2 rounded bg-black text-white ${className}`} {...props}>{children}</button>
}
export default Button
