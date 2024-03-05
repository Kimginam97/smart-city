import Card from '../card/Card'

const Widget = ({ icon, title, subtitle }) => {
  return (
    // 위젯 컴포넌트
    <Card extra="!flex-row flex-grow items-center rounded-[20px]">
      {/* 아이콘 */}
      <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
        <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
          <span className="flex items-center text-brand-500 dark:text-white">{icon}</span>
        </div>
      </div>

      {/* 제목 및 부제목 */}
      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <p className="font-dm text-sm font-medium text-gray-600">{title}</p>
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">{subtitle}</h4>
      </div>
    </Card>
  )
}

export default Widget
