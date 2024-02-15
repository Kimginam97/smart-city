import { useState } from 'react'

import Link from 'next/link'

import { FiSearch, FiAlignJustify } from 'react-icons/fi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiCctv } from 'react-icons/bi'
import { BsArrowBarUp } from 'react-icons/bs'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'

import cctv from '../../public/assets/img/layout/cctv.webp'

import Dropdown from '../dropdown/Dropdown'

// 네비게이션 바 컴포넌트 정의
const Navbar = (props) => {
  const { onOpenSidenav, brandText } = props // 프롭스로 받은 값 중 필요한 것들 추출
  const [darkmode, setDarkmode] = useState(false) // 다크 모드 상태 관리용 상태값

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      {/* 로고 및 페이지 링크 */}
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <a
            className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            href="#"
          >
            page
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white"> / </span>
          </a>
          <Link
            className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            href="#"
          >
            {brandText}
          </Link>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <Link href="#" className="font-bold capitalize hover:text-navy-700 dark:hover:text-white">
            {brandText}
          </Link>
        </p>
      </div>

      {/* 검색창 및 아이콘들 */}
      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
        {/* 검색창 */}
        <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
          </p>
          <input
            type="text"
            placeholder="검색..."
            className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
          />
        </div>
        {/* 모바일에서 사이드바 열기 아이콘 */}
        <span className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden" onClick={onOpenSidenav}>
          <FiAlignJustify className="h-5 w-5" />
        </span>

        {/* 알림 및 정보 아이콘 */}
        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdNotificationsOutline className="h-4 w-4 text-gray-600 dark:text-white" />
            </p>
          }
          animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          children={
            <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
              {/* 알림 목록 */}
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-navy-700 dark:text-white">알림</p>
                <p className="text-sm font-bold text-navy-700 dark:text-white">모두 읽음 표시</p>
              </div>
              {/* 알림 항목들 */}
              <button className="flex w-full items-center">
                {/* 알림 아이콘 및 내용 */}
                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                  <BsArrowBarUp />
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                    이상 감지: 교통 흐름이 비정상적으로 느림
                  </p>
                  <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                    장애물이나 사고로 인한 도로 차단 상황
                  </p>
                </div>
              </button>
              {/* 다른 알림 항목들도 유사하게 표시 */}
              <button className="flex w-full items-center">
                {/* 알림 아이콘 및 내용 */}
                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                  <BsArrowBarUp />
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                    예방 조치 및 안전 공지: 폭염 경보, 폭우 경보, 또는 고농도 미세먼지 경보
                  </p>
                  <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                    여름철 폭염 및 미세먼지 200 초과
                  </p>
                </div>
              </button>
            </div>
          }
          classNames={'py-2 top-4 -left-[230px] md:-left-[440px] w-max'}
        />

        {/* 정보 아이콘 */}
        <Dropdown
          button={
            <p className="cursor-pointer">
              <BiCctv className="h-4 w-4 text-gray-600 dark:text-white" />
            </p>
          }
          children={
            <div className="flex w-[350px] flex-col gap-2 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
              {/* CCTV 화면 */}
              <div
                style={{
                  backgroundImage: `url(${cctv.src})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                }}
                className="mb-2 aspect-video w-full rounded-lg"
              />
              {/* CCTV 화면 이동 링크 */}
              <a
                target="blank"
                href="https://horizon-ui.com/pro?ref=live-free-tailwind-react"
                className="px-full linear flex cursor-pointer items-center justify-center rounded-xl bg-brand-500 py-[11px] font-bold text-white transition duration-200 hover:bg-brand-600 hover:text-white active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:bg-brand-200"
              >
                CCTV 화면 이동
              </a>
              {/* 다른 링크들도 유사하게 표시 */}
            </div>
          }
          classNames={'py-2 top-6 -left-[250px] md:-left-[330px] w-max'}
          animation="origin-[75%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
        />

        {/* 다크 모드 전환 아이콘 */}
        <div
          className="cursor-pointer text-gray-600"
          onClick={() => {
            if (darkmode) {
              document.body.classList.remove('dark')
              setDarkmode(false)
            } else {
              document.body.classList.add('dark')
              setDarkmode(true)
            }
          }}
        >
          {darkmode ? (
            <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
          ) : (
            <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
          )}
        </div>

        {/* 사용자 드롭다운 */}
        <Dropdown
          button={<img className="h-10 w-10 rounded-full" src="/assets/img/avatars/avatar4.png" alt="Elon Musk" />}
          children={
            <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
              {/* 사용자 정보 */}
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-navy-700 dark:text-white">👋 Hey, Duduri</p>
                </div>
              </div>
              {/* 구분선 */}
              <div className="h-px w-full bg-gray-200 dark:bg-white/20 " />
              {/* 사용자 메뉴 */}
              <div className="flex flex-col p-4">
                <a href=" " className="text-sm text-gray-800 dark:text-white hover:dark:text-white">
                  프로필
                </a>
                <a
                  href=" "
                  className="mt-3 text-sm font-medium text-red-500 hover:text-red-500 transition duration-150 ease-out hover:ease-in"
                >
                  로그아웃
                </a>
              </div>
            </div>
          }
          classNames={'py-2 top-8 -left-[180px] w-max'}
        />
      </div>
    </nav>
  )
}

export default Navbar // 네비게이션 바 컴포넌트 내보내기
