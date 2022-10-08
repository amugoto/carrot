import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

const mode = process.env.NODE_ENV !== 'production'

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: mode
})

export default store
