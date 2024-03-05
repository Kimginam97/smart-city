import { useEffect, useRef, useState } from 'react'

// 외부 클릭 감지 후 상태 변경을 처리하는 훅
function useOutsideAlerter(ref, setX) {
  useEffect(() => {
    /**
     * 요소 외부를 클릭하면 알림
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setX(false)
      }
    }
    // 이벤트 리스너를 바인딩
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // 정리할 때 이벤트 리스너를 언바인딩
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, setX])
}

// 드롭다운 컴포넌트
const Dropdown = (props) => {
  const { button, children, classNames, animation } = props
  const wrapperRef = useRef(null)
  const [openWrapper, setOpenWrapper] = useState(false)

  useOutsideAlerter(wrapperRef, setOpenWrapper)

  return (
    <div ref={wrapperRef} className="relative flex">
      <div className="flex" onMouseDown={() => setOpenWrapper(!openWrapper)}>
        {button}
      </div>
      <div
        className={`${classNames} absolute z-10 ${
          animation ? animation : 'origin-top-right transition-all duration-300 ease-in-out'
        } ${openWrapper ? 'scale-100' : 'scale-0'}`}
      >
        {children}
      </div>
    </div>
  )
}

export default Dropdown
