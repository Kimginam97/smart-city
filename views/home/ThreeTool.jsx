import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import { slideAnimation, fadeAnimation } from '@/config/Motion'
import { EditorTabs } from '@/config/Constants'

import state from '../../store/Store'
import Tab from './Tab'
import HomeButtom from './HomeButtom'

const ThreeTool = () => {
  const snap = useSnapshot(state)
  const [activeEditorTab, setActiveEditorTab] = useState('')
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div key="custom" className="absolute top-0 right-8 z-10" {...slideAnimation('right')}>
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab key={tab.name} tab={tab} handleClick={() => setActiveEditorTab(tab.name)} />
                ))}
                {/* {generateTabContent()} */}
              </div>
            </div>
          </motion.div>

          <motion.div className="absolute z-10 top-5 right-5" {...fadeAnimation}>
            <Link href="/admin/login">
              <HomeButtom
                type="filled"
                title="로그인"
                handleClick={() => (state.intro = true)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </Link>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ThreeTool
