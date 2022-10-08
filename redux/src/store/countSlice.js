import { createSlice } from '@reduxjs/toolkit'

const initialState = { count: 0 }

const { reducer, actions } = createSlice({
  name: 'count',
  initialState,
  reducers: {
    add(state) {
      state.count++
    },

    minus(state) {
      state.count--
    },

    update(state, { payload }) {
      state.count = !payload || isNaN(payload) ? state.count : payload
    }
  }
})

export const { add, minus, update } = actions
export default reducer
