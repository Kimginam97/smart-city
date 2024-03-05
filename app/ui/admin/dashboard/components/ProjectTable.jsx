'use client'
import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table'
import { MdCheckCircle, MdCancel, MdOutlineError } from 'react-icons/md'
import { useMemo } from 'react'
import Card from '@/app/components/card/Card'
import CardMenu from '@/app/components/card/CardMenu'
import Progress from '@/app/components/progress/Progress'

const ProjectTable = (props) => {
  const { columnsData, tableData } = props

  // 컬럼과 데이터 설정
  const columns = useMemo(() => columnsData, [columnsData])
  const data = useMemo(() => tableData, [tableData])

  // 테이블 인스턴스 생성
  const tableInstance = useTable(
    {
      columns,
      data
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  // 테이블 인스턴스에서 필요한 속성 추출
  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, initialState } = tableInstance
  initialState.pageSize = 5

  return (
    <Card extra={'w-full h-full px-6 pb-6 sm:overflow-x-auto'}>
      {/* 테이블 헤더 */}
      <div className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">프로젝트 진행도</div>
        <CardMenu />
      </div>

      {/* 테이블 본문 */}
      <div className="mt-8 overflow-x-scroll xl:overflow-hidden">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={index}
                    className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  >
                    <p className="text-xs tracking-wide text-gray-600">{column.render('Header')}</p>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = ''
                    // 셀 내용에 따른 조건부 렌더링
                    if (cell.column.Header === 'NAME') {
                      data = <p className="text-sm font-bold text-navy-700 dark:text-white">{cell.value}</p>
                    } else if (cell.column.Header === 'STATUS') {
                      data = (
                        <div className="flex items-center gap-2">
                          <div className={`rounded-full text-xl`}>
                            {cell.value === 'Approved' ? (
                              <MdCheckCircle className="text-green-500" />
                            ) : cell.value === 'Disable' ? (
                              <MdCancel className="text-red-500" />
                            ) : cell.value === 'Error' ? (
                              <MdOutlineError className="text-orange-500" />
                            ) : null}
                          </div>
                          <p className="text-sm font-bold text-navy-700 dark:text-white">{cell.value}</p>
                        </div>
                      )
                    } else if (cell.column.Header === 'DATE') {
                      data = <p className="text-sm font-bold text-navy-700 dark:text-white">{cell.value}</p>
                    } else if (cell.column.Header === 'PROGRESS') {
                      data = <Progress width="w-[108px]" value={cell.value} />
                    }
                    return (
                      <td className="pt-[14px] pb-[18px] sm:text-[14px]" {...cell.getCellProps()} key={index}>
                        {data}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default ProjectTable
