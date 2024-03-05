import { MdBarChart } from 'react-icons/md'
import Card from '@/components/card/Card'

import { barChartDataBasePay, barChartOptionsBasePay } from '@/utils/Charts'
import BarChart from '@/components/charts/BarChart'

/* 기업별 급여를 보여주는 컴포넌트 */
const BasePay = () => {
  return (
    <Card extra="flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center">
      {/* 제목 및 차트 전환 버튼 */}
      <div className="mb-auto flex items-center justify-between px-6">
        <h2 className="text-lg font-bold text-navy-700 dark:text-white">기업별 급여</h2>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      {/* 차트 */}
      <div className="md:mt-16 lg:mt-0">
        <div className="h-[250px] w-full xl:h-[350px]">
          <BarChart chartData={barChartDataBasePay} chartOptions={barChartOptionsBasePay} />
        </div>
      </div>
    </Card>
  )
}

export default BasePay
