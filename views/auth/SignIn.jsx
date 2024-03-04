import Checkbox from '@/components/checkbox/Checkbox'
import InputField from '@/components/fields/InputField'
import { FcGoogle } from 'react-icons/fc'

export default function SignIn() {
  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* 로그인 섹션 */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">로그인</h4>
        <p className="mb-9 ml-1 text-base text-gray-600">이메일과 비밀번호를 입력하여 로그인하세요!</p>
        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">구글</h5>
        </div>
        <div className="mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div>
        {/* 이메일 */}
        <InputField variant="auth" extra="mb-3" label="이메일" placeholder="mail@simmmple.com" id="email" type="text" />

        {/* 비밀번호 */}
        <InputField variant="auth" extra="mb-3" label="비밀번호" placeholder="password" id="password" type="password" />
        {/* 체크박스 */}
        <div className="mb-4 flex items-center justify-between px-2">
          <div className="flex items-center">
            <Checkbox />
            <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">로그인 유지</p>
          </div>
          <a className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white" href=" ">
            비밀번호 찾기?
          </a>
        </div>
        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          로그인
        </button>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">이직 등록하지 않으셨나요?</span>
          <a href=" " className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white">
            회원가입
          </a>
        </div>
      </div>
    </div>
  )
}
