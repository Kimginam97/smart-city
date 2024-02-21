'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { FaCity } from 'react-icons/fa'
import { slideAnimation, headContainerAnimation, headTextAnimation, headContentAnimation } from '../config/motion'

import HomeButtom from '@/views/home/HomeButtom'
import ThreeScene from '@/views/home/ThreeScene'
import ThreeTool from '@/views/home/ThreeTool'

import state from '../store/Store'

export default function Home() {
  const snap = useSnapshot(state)
  return (
    <>
      <AnimatePresence>
        {snap.intro && (
          // 인트로가 true일 때만 표시되는 섹션
          <motion.section className="home" {...slideAnimation('left')}>
            <motion.header {...slideAnimation('down')}>
              <FaCity className="h-12 w-12" />
            </motion.header>

            <motion.div className="home-content" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className="head-text">
                  스마트 <br className="xl:block hidden" /> 도시
                </h1>
              </motion.div>
              <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                <p className="max-w-md font-normal text-gray-600 text-base">
                  스마트 도시는 혁신적인 기술과 인프라를 활용하여 도시의 기능과 서비스를 향상시키는 개념입니다. 주요
                  목표는 도시의 <strong>지속 가능성, 효율성, 안전성, 그리고 편의성</strong> 을 증진합니다.
                </p>

                <HomeButtom
                  type="filled"
                  title="들어가기"
                  handleClick={() => (state.intro = false)}
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                />
              </motion.div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>

      <ThreeScene />
      <ThreeTool />
    </>
  )
}
