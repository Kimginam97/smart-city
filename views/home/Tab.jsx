import React from 'react'
import { useSnapshot } from 'valtio'

import state from '../../store/Store'

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state)

  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: 'transparent', opacity: 1 }

  return (
    <div key={tab.name} className={`tab-btn`} onClick={handleClick} style={activeStyles}>
      {tab.icon}
    </div>
  )
}

export default Tab
