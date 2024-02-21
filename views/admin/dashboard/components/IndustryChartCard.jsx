import Card from '@/components/card/Card' // Card 컴포넌트 불러오기
import PieChart from '@/components/charts/PieChart' // PieChart 컴포넌트 불러오기
import { pieChartData, pieChartOptions } from '@/variables/charts' // 차트 데이터 및 옵션 불러오기

const IndustryChartCard = () => {
  return (
    <Card extra="rounded-[20px] p-3">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">산업 종사자</h4>
        </div>

        <div className="mb-6 flex items-center justify-center">
          {/* 시간대 선택 셀렉트 박스 */}
          <select className="mb-3 mr-2 flex items-center justify-center text-sm font-bold text-gray-600 hover:cursor-pointer dark:!bg-navy-800 dark:text-white">
            <option value="monthly">월별</option>
            <option value="yearly">연간</option>
            <option value="weekly">주간</option>
          </select>
        </div>
      </div>

      <div className="mb-auto flex h-[220px] w-full items-center justify-center">
        {/* 파이 차트 */}
        <PieChart options={pieChartOptions} series={pieChartData} />
      </div>

      <div className="flex flex-row !justify-between rounded-2xl px-6 py-3 shadow-2xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        {/* 파일 및 시스템 비율 */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-brand-500" />
            <p className="ml-1 text-sm font-normal text-gray-600">IT업</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700  dark:text-white">30%</p>
        </div>

        <div className="h-11 w-px bg-gray-300 dark:bg-white/10" />

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#6AD2FF]" />
            <p className="ml-1 text-sm font-normal text-gray-600">관광업</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700 dark:text-white">10%</p>
        </div>
      </div>
    </Card>
  )
}

export default IndustryChartCard
