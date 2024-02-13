'use client'

import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import routes from '@/routes'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import '../globals.css'

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(true)
  let location = usePathname()
  const [currentRoute, setCurrentRoute] = useState('Main Dashboard')

  useEffect(() => {
    window.addEventListener('resize', () => (window.innerWidth < 1200 ? setOpen(false) : setOpen(true)))
  }, [])

  useEffect(() => {
    getActiveRoute(routes)
  }, [location])

  const getActiveRoute = (routes) => {
    let activeRoute = 'Main Dashboard'
    for (let i = 0; i < routes.length; i++) {
      const currentRoute = `${routes[i].layout}${routes[i].path}`
      if (location === currentRoute) {
        setCurrentRoute(routes[i].name)
      }
    }
    return activeRoute
  }

  const getActiveNavbar = (routes) => {
    let activeNavbar = false
    for (let i = 0; i < routes.length; i++) {
      const currentRoute = `${routes[i].layout}${routes[i].path}`
      if (location === currentRoute) {
        return routes[i].secondary
      }
    }
    return activeNavbar
  }

  return (
    <html lang="ko">
      <body suppressHydrationWarning={true}>
        <div className="flex h-full w-full">
          <Sidebar open={open} onClose={() => setOpen(false)} />
          {/* Navbar & Main Content */}
          <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
            {/* Main Content */}
            <main className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}>
              {/* Routes */}
              <div className="h-full">
                <Navbar
                  onOpenSidenav={() => setOpen(true)}
                  logoText={'Smart City'}
                  brandText={currentRoute}
                  secondary={getActiveNavbar(routes)}
                />
                <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">{children}</div>
                <div className="p-3">{/* <Footer /> */}</div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
