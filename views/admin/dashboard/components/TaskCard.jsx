import Card from '@/components/card/Card'
import CardMenu from '@/components/card/CardMenu'
import Checkbox from '@/components/checkbox/Checkbox'
import { MdDragIndicator, MdCheckCircle } from 'react-icons/md'

const TaskCard = () => {
  return (
    <Card extra="pb-7 p-[20px]">
      {/* 할일 제목 */}
      <div className="relative flex flex-row justify-between">
        <div className="flex items-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-100 dark:bg-white/5">
            <MdCheckCircle className="h-6 w-6 text-brand-500 dark:text-white" />
          </div>
          <h4 className="ml-4 text-xl font-bold text-navy-700 dark:text-white">할일</h4>
        </div>
        <CardMenu />
      </div>

      {/* 할일 내용 */}
      <div className="h-full w-full">
        <div className="mt-5 flex items-center justify-between p-2">
          <div className="flex items-center justify-center gap-2">
            <Checkbox />
            <p className="text-base font-bold text-navy-700 dark:text-white">상태 모니터링 및 진단</p>
          </div>
          <div>
            <MdDragIndicator className="h-6 w-6 text-navy-700 dark:text-white" />
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between p-2">
          <div className="flex items-center justify-center gap-2">
            <Checkbox />
            <p className="text-base font-bold text-navy-700 dark:text-white">예측 분석 및 유지 보수</p>
          </div>
          <div>
            <MdDragIndicator className="h-6 w-6 text-navy-700 dark:text-white" />
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between p-2">
          <div className="flex items-center justify-center gap-2">
            <Checkbox />
            <p className="text-base font-bold text-navy-700 dark:text-white">시뮬레이션 및 시나리오 테스트</p>
          </div>
          <div>
            <MdDragIndicator className="h-6 w-6 text-navy-700 dark:text-white" />
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between p-2">
          <div className="flex items-center justify-center gap-2">
            <Checkbox />
            <p className="text-base font-bold text-navy-700 dark:text-white">최적화 및 효율화</p>
          </div>
          <div>
            <MdDragIndicator className="h-6 w-6 text-navy-700 dark:text-white" />
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between p-2">
          <div className="flex items-center justify-center gap-2">
            <Checkbox />
            <p className="text-base font-bold text-navy-700 dark:text-white">협업 및 의사 결정 지원</p>
          </div>
          <div>
            <MdDragIndicator className="h-6 w-6 text-navy-700 dark:text-white" />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default TaskCard
