'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import Navbar from '@/components/navbar/Navbar' // Navbar 컴포넌트 불러오기
import Sidebar from '@/components/sidebar/Sidebar' // Sidebar 컴포넌트 불러오기
import Footer from '@/components/footer/Footer' // Footer 컴포넌트 불러오기

import routes from '@/routes/routes' // 라우트 가져오기

import '../../globals.css' // 글로벌 CSS 가져오기

export default function AdminLayout({ children }) {
  // 사이드바 열림 여부 상태 및 현재 경로 상태 설정
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [currentRoute, setCurrentRoute] = useState('Main Dashboard')
  // 현재 경로 가져오기
  const location = usePathname()

  // 창 크기 변화 감지하여 사이드바 상태 업데이트
  useEffect(() => {
    window.addEventListener('resize', () => setIsSidebarOpen(window.innerWidth >= 1200))
  }, [])

  // 현재 경로 변경 시 현재 경로 업데이트
  useEffect(() => {
    updateCurrentRoute(routes)
  }, [location])

  // 현재 경로에 해당하는 라우트 업데이트
  const updateCurrentRoute = (routes) => {
    const matchingRoute = routes.find((route) => `${route.layout}${route.path}` === location)
    if (matchingRoute) setCurrentRoute(matchingRoute.name)
  }

  // 현재 활성화된 네브바 가져오기
  const getActiveNavbar = (routes) => {
    const matchingRoute = routes.find((route) => `${route.layout}${route.path}` === location)
    return matchingRoute ? matchingRoute.secondary : false
  }

  return (
    <html lang="ko">
      <body suppressHydrationWarning={true}>
        <div className="flex h-full w-full">
          {/* 사이드바 */}
          <Sidebar open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
            <main className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}>
              {/* 네브바 */}
              <Navbar
                onOpenSidenav={() => setIsSidebarOpen(true)}
                logoText={'Smart City'}
                brandText={currentRoute}
                secondary={getActiveNavbar(routes)}
              />
              {/* 콘텐츠 */}
              <div className="pt-5 mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">{children}</div>
              {/* 푸터 */}
              <div className="p-3">
                <Footer />
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
