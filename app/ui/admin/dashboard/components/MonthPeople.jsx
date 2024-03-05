import Card from '@/app/components/card/Card'
import LineChart from '@/app/components/charts/LineChart'
import { lineChartOptionsWeeklyPeople, lineChartDataWeeklyPeople } from '@/app/utils/Charts'
import { MdArrowDropUp, MdOutlineCalendarToday, MdBarChart } from 'react-icons/md'

/* 월간 이용자 컴포넌트 */
const MonthPeople = () => {
  return (
    <Card extra="!p-[20px] text-center">
      {/* 월별/일별 변경 버튼 */}
      <div className="flex justify-between">
        <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
          <MdOutlineCalendarToday />
          <span className="text-sm font-medium text-gray-600">This month</span>
        </button>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      {/* 차트 및 통계 */}
      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="flex flex-col">
          <p className="mt-[20px] text-3xl font-bold text-navy-700 dark:text-white">34,000K</p>
          <div className="flex flex-col items-start">
            <p className="mt-2 text-sm text-gray-600">인구변화</p>
            <div className="flex flex-row items-center justify-center">
              <MdArrowDropUp className="font-medium text-green-500" />
              <p className="text-sm font-bold text-green-500"> +2.45% </p>
            </div>
          </div>
        </div>
        <div className="h-[250px] w-full xl:h-[350px]">
          {/* 선 그래프 */}
          <LineChart options={lineChartOptionsWeeklyPeople} series={lineChartDataWeeklyPeople} />
        </div>
      </div>
    </Card>
  )
}

export default MonthPeople
