import { atom } from 'recoil'

export const countState = atom({
  key: 'prefix/count',
  default: 0
})
