import React from 'react'

import { useSnapshot } from 'valtio'
import { getContrastingColor } from '@/config/helper'
import state from '../../store/Store'

// 홈 버튼 컴포넌트 정의
const HomeButtom = ({ type, title, customStyles, handleClick }) => {
  // Valtio의 상태 스냅샷 사용
  const snap = useSnapshot(state)

  // 버튼 스타일 생성 함수
  const generateStyle = (type) => {
    if (type === 'filled') {
      // 채워진 스타일일 경우
      return {
        backgroundColor: snap.color, // 배경색은 상태의 색상
        color: getContrastingColor(snap.color) // 텍스트 색상은 상태의 색상과 대조되는 색상으로 설정
      }
    } else if (type === 'outline') {
      // 외곽선 스타일일 경우
      return {
        borderWidth: '1px', // 테두리 두께 설정
        borderColor: snap.color, // 테두리 색상은 상태의 색상
        color: snap.color // 텍스트 색상은 상태의 색상으로 설정
      }
    }
  }

  // 버튼 컴포넌트 렌더링
  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`} // 사용자 지정 및 기본 스타일 클래스 적용
      style={generateStyle(type)} // 버튼 스타일 설정
      onClick={handleClick} // 클릭 이벤트 핸들러 설정
    >
      {title}
    </button>
  )
}

export default HomeButtom
