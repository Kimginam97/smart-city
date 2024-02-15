import Links from './components/Links' // 링크 컴포넌트 가져오기
import { HiX } from 'react-icons/hi' // HiX 아이콘 가져오기
import routes from '@/routes' // 라우트 가져오기

// 사이드바 컴포넌트 정의
const Sidebar = ({ open, onClose }) => {
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? 'translate-x-0' : '-translate-x-96'
      }`}
    >
      {/* 닫기 버튼 */}
      <span className="absolute top-4 right-4 block cursor-pointer xl:hidden" onClick={onClose}>
        <HiX />
      </span>

      {/* 로고 */}
      <div className={`mx-[56px] mt-[50px] flex items-center`}>
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-black uppercase text-navy-700 dark:text-white">
          SMART <span className="font-medium">CITY</span>
        </div>
      </div>

      {/* 구분선 */}
      <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />

      {/* 내비게이션 아이템 */}
      <ul className="mb-auto pt-1">
        <Links routes={routes} /> {/* 라우트를 이용한 내비게이션 아이템 */}
      </ul>
      {/* 내비게이션 아이템 종료 */}
    </div>
  )
}

export default Sidebar // 사이드바 컴포넌트 내보내기
