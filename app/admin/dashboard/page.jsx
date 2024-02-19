import { FaPeopleGroup, FaWonSign } from 'react-icons/fa6'
import { FaPersonArrowUpFromLine, FaPersonArrowDownToLine } from 'react-icons/fa6'
import { GiCash } from 'react-icons/gi'

import MonthPeople from '@/views/admin/dashboard/MonthPeople'
import BasePay from '@/views/admin/dashboard/BasePay'

import MiniCalendar from '@/components/calendar/MiniCalendar'
import Widget from '@/components/widget/Widget'
import CheckTable from '@/views/admin/dashboard/CheckTable'
import ComplexTable from '@/views/admin/dashboard/ComplexTable'
import DailyTraffic from '@/views/admin/dashboard/DailyTraffic'
import PieChartCard from '@/views/admin/dashboard/PieChartCard'
import TaskCard from '@/views/admin/dashboard/TaskCard'

import { columnsDataCheck, columnsDataComplex } from '@/views/admin/dashboard/variables/columnsData'
import tableDataCheck from '@/views/admin/dashboard/variables/tableDataCheck.json'
import tableDataComplex from '@/views/admin/dashboard/variables/tableDataComplex.json'

const DashboardPage = () => {
  return (
    <>
      {/* 카드 위젯 */}
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget icon={<FaPeopleGroup className="h-7 w-7" />} title={'총 인구'} subtitle={'34,000,000'} />
        <Widget
          icon={<FaPersonArrowUpFromLine className="h-6 w-6" />}
          title={'이번 달 인구증가'}
          subtitle={'420,000'}
        />
        <Widget
          icon={<FaPersonArrowDownToLine className="h-7 w-7" />}
          title={'이번 달 인구감소'}
          subtitle={'574,000'}
        />
        <Widget icon={<GiCash className="h-6 w-6" />} title={'총 예산'} subtitle={'420,000,000'} />
        <Widget icon={<FaWonSign className="h-7 w-7" />} title={'이번달 사용예산'} subtitle={'6,270,000'} />
        <Widget icon={<GiCash className="h-6 w-6" />} title={'남은 예산'} subtitle={'242,004,000'} />
      </div>

      {/* 인구 및 기업별 월급 비교 차트 */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <MonthPeople />
        <BasePay />
      </div>

      {/* 테이블 & 차트 */}
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* 체크 테이블 */}
        <div>
          <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        </div>

        {/* 트래픽 차트 & 파이 차트 */}
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        {/* 복잡한 테이블, 업무 & 캘린더 */}
        <ComplexTable columnsData={columnsDataComplex} tableData={tableDataComplex} />

        {/* 업무 차트 & 캘린더 */}
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardPage
