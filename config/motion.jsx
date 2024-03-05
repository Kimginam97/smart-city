// 트랜지션 설정
export const transition = { type: 'spring', duration: 0.8 }

// 슬라이드 애니메이션 함수
export const slideAnimation = (direction) => {
  return {
    initial: {
      // 초기 위치 설정
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
      // 트랜지션 설정 적용
      transition: { ...transition, delay: 0.5 }
    },
    animate: {
      // 애니메이션 시 최종 위치 설정
      x: 0,
      y: 0,
      opacity: 1,
      // 트랜지션 설정 적용
      transition: { ...transition, delay: 0 }
    },
    exit: {
      // 퇴장 시 최종 위치 설정
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      // 트랜지션 설정 적용
      transition: { ...transition, delay: 0 }
    }
  }
}

// 페이드 애니메이션 설정
export const fadeAnimation = {
  initial: {
    opacity: 0,
    // 트랜지션 설정 적용
    transition: { ...transition, delay: 0.5 }
  },
  animate: {
    opacity: 1,
    // 트랜지션 설정 적용
    transition: { ...transition, delay: 0 }
  },
  exit: {
    opacity: 0,
    // 트랜지션 설정 적용
    transition: { ...transition, delay: 0 }
  }
}

// 헤드 텍스트 애니메이션 설정
export const headTextAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: 'spring',
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3
  }
}

// 헤드 콘텐츠 애니메이션 설정
export const headContentAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: 'spring',
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2,
    delayChildren: 0.2
  }
}

// 헤드 컨테이너 애니메이션 설정
export const headContainerAnimation = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } }
}
