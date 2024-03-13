import { proxy } from 'valtio'

const state = proxy({
  intro: true,
  color: '#BEC6DF'
})

export default state
