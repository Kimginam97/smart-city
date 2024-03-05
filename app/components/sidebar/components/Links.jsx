import Link from 'next/link' // Next.js의 Link 컴포넌트 가져오기
import { usePathname } from 'next/navigation' // Next.js의 usePathname 훅 가져오기

import DashIcon from '../../icons/DashIcon'

// 사이드바 링크 컴포넌트 정의
export function SidebarLinks(props) {
  const { routes } = props // 라우트 가져오기
  let location = usePathname() // 현재 경로 가져오

  // 활성 경로인지 확인하는 함수
  const activeRoute = (routeName) => {
    return location.includes(routeName)
  }

  // 링크 생성 함수
  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (route.layout === '/admin' || route.layout === '/auth') {
        return (
          <Link key={index} href={`${route.layout}/${route.path}`}>
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li className="my-[3px] flex cursor-pointer items-center px-8" key={index}>
                {/* 아이콘 */}
                <span
                  className={`${
                    activeRoute(route.path) === true
                      ? 'font-bold text-brand-500 dark:text-white'
                      : 'font-medium text-gray-600'
                  }`}
                >
                  {route.icon ? route.icon : <DashIcon />}
                </span>
                {/* 이름 */}
                <p
                  className={`leading-1 ml-4 flex ${
                    activeRoute(route.path) === true
                      ? 'font-bold text-navy-700 dark:text-white'
                      : 'font-medium text-gray-600'
                  }`}
                >
                  {route.name}
                </p>
              </li>
              {/* 활성화 선 */}
              {activeRoute(route.path) ? (
                <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
              ) : null}
            </div>
          </Link>
        )
      }
    })
  }
  // 링크 생성하여 반환
  return createLinks(routes)
}

export default SidebarLinks // 사이드바 링크 컴포넌트 내보내기
