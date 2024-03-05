'use client'
import React, { useMemo } from 'react'

import { useGlobalFilter, usePagination, useSortBy, useTable } from 'react-table'
import Card from '@/components/card/Card' // Card 컴포넌트 불러오기
import Checkbox from '@/components/checkbox/Checkbox' // Checkbox 컴포넌트 불러오기
import CardMenu from '@/components/card/CardMenu' // CardMenu 컴포넌트 불러오기

const ReceivedMail = (props) => {
  const { columnsData, tableData } = props

  // 컬럼 데이터와 테이블 데이터를 useMemo를 사용하여 메모이제이션
  const columns = useMemo(() => columnsData, [columnsData])
  const data = useMemo(() => tableData, [tableData])

  // react-table 훅을 사용하여 테이블 인스턴스 생성
  const tableInstance = useTable(
    {
      columns,
      data
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  // 필요한 테이블 인스턴스 속성 추출
  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, initialState } = tableInstance
  initialState.pageSize = 11 // 초기 페이지 크기 설정

  return (
    // 체크 테이블을 포함한 카드
    <Card extra={'w-full h-full sm:overflow-auto px-6'}>
      {/* 제목과 메뉴를 포함한 헤더 섹션 */}
      <header className="relative flex items-center justify-between pt-4">
        <div className="text-xl font-bold text-navy-700 dark:text-white">받은 메일함</div>
        <CardMenu />
      </header>

      {/* 테이블 본문 */}
      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table {...getTableProps()} className="w-full" variant="simple" color="gray-500" mb="24px">
          <thead>
            {/* 테이블 헤더 렌더링 */}
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="border-b border-gray-200 pr-16 pb-[10px] text-start dark:!border-navy-700"
                    key={index}
                  >
                    <div className="text-xs font-bold tracking-wide text-gray-600 lg:text-xs">
                      {column.render('Header')}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {/* 테이블 행 렌더링 */}
            {page.map((row, index) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = ''
                    // 열 헤더에 따른 조건부 렌더링
                    if (cell.column.Header === '발신자') {
                      data = (
                        <div className="flex items-center gap-2">
                          <Checkbox />
                          <p className="text-sm font-bold text-navy-700 dark:text-white">{cell.value[0]}</p>
                        </div>
                      )
                    } else if (cell.column.Header === '제목') {
                      data = (
                        <div className="flex items-center">
                          <p className="text-sm font-bold text-navy-700 dark:text-white">{cell.value}</p>
                        </div>
                      )
                    } else if (cell.column.Header === '크기') {
                      data = <p className="text-sm font-bold text-navy-700 dark:text-white"> {cell.value}KB </p>
                    } else if (cell.column.Header === '날짜') {
                      data = <p className="text-sm font-bold text-navy-700 dark:text-white">{cell.value}</p>
                    }
                    return (
                      <td {...cell.getCellProps()} key={index} className="pt-[14px] pb-[16px] sm:text-[14px]">
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

export default ReceivedMail
