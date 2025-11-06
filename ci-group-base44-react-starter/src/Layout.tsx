import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { createPageUrl } from '@/utils'
import { Button } from '@/components/ui/button'

const nav = [
  { title: 'Accueil', url: createPageUrl('Accueil') },
  { title: 'Nos Services', url: createPageUrl('NosServices') },
  { title: 'Nos Packs', url: createPageUrl('NosPacks') },
  { title: 'Notre Approche', url: createPageUrl('NotreApproche') },
  { title: 'À Propos', url: createPageUrl('APropos') },
  { title: 'Contact', url: createPageUrl('Contact') },
]

export default function Layout({ children }: React.PropsWithChildren) {
  const loc = useLocation()
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 border-b bg-white/80 backdrop-blur z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-6">
          <Link to="/" className="font-bold">CI GROUP</Link>
          <nav className="flex-1 flex gap-4 text-sm">
            {nav.map(item => (
              <Link key={item.url} to={item.url} className={loc.pathname===item.url?'font-semibold':''}>{item.title}</Link>
            ))}
          </nav>
          <Button>Nous contacter</Button>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600">&copy; {new Date().getFullYear()} CI GROUP</div>
      </footer>
    </div>
  )
}
