export const getContrastingColor = (color) => {
  // '#' 문자가 존재하는 경우 제거합니다.
  const hex = color.replace('#', '')

  // Hex 문자열을 RGB 값으로 변환합니다.
  const r = parseInt(hex.substring(0, 2), 16) // 빨강 값
  const g = parseInt(hex.substring(2, 4), 16) // 초록 값
  const b = parseInt(hex.substring(4, 6), 16) // 파랑 값

  // 색상의 밝기를 계산합니다.
  const brightness = (r * 299 + g * 587 + b * 114) / 1000

  // 밝기에 따라 검정 또는 흰색을 반환합니다.
  return brightness > 128 ? 'black' : 'white'
}
