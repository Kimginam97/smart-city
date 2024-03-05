import { FaPeopleGroup, FaWonSign } from 'react-icons/fa6'
import { FaPersonArrowUpFromLine, FaPersonArrowDownToLine } from 'react-icons/fa6'
import { GiCash } from 'react-icons/gi'

import MonthPeople from '@/app/ui/admin/dashboard/components/MonthPeople'
import BasePay from '@/app/ui/admin/dashboard/components/BasePay'

import ReceivedMail from '@/app/ui/admin/dashboard/components/ReceivedMail'

import MiniCalendar from '@/app/components/calendar/MiniCalendar'
import Widget from '@/app/components/widget/Widget'

import DailyPowerConsumption from '@/app/ui/admin/dashboard/components/DailyPowerConsumption'
import IndustryChartCard from '@/app/ui/admin/dashboard/components/IndustryChartCard'

import ProjectTable from '@/app/ui/admin/dashboard/components/ProjectTable'
import TaskCard from '@/app/ui/admin/dashboard/components/TaskCard'

import { columnsDataCheck, columnsDataProject } from '@/app/ui/admin/dashboard/variables/columnsData'
import tableDataCheck from '@/app/ui/admin/dashboard/variables/tableDataCheck.json'
import tableDataProject from '@/app/ui/admin/dashboard/variables/tableDataProject.json'

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
        {/* 받은 메일함 테이블 */}
        <div>
          <ReceivedMail columnsData={columnsDataCheck} tableData={tableDataCheck} />
        </div>

        {/* 전력 소비량 차트 & 산업종류 차트 */}
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyPowerConsumption />
          <IndustryChartCard />
        </div>

        {/* 프로젝트 테이블, 업무 & 캘린더 */}
        <ProjectTable columnsData={columnsDataProject} tableData={tableDataProject} />

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
