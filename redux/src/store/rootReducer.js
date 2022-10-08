import { combineReducers } from '@reduxjs/toolkit'
import count from './countSlice'

const rootReducer = combineReducers({
  count
})

export default rootReducer
