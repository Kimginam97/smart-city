import { useSnapshot } from 'valtio'

import state from '../../../app/store/Store'

const Tab = ({ tab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state)

  const activeStyles = isActiveTab
    ? { backgroundColor: snap.color, opacity: 0.7 }
    : { backgroundColor: 'transparent', opacity: 1 }

  return (
    <div key={tab.name} className={`tab-btn`} onClick={handleClick} style={activeStyles}>
      {tab.icon}
    </div>
  )
}

export default Tab
