import { createSlice } from '@reduxjs/toolkit'

const pocSlice = createSlice({
  name: 'poc',
  reducers: {
    requestPocProducts: state => {
      state.status = 'pending'
    },
    receivePocProducts: (state, action) => {
      state.status = !action.payload.error ? 'resolved' : 'rejected'
      state.products = action.payload.products
    }
  },
  initialState: {
    status: 'idle',
    error: false,
    products: []
  }
})

export const pocReducer = pocSlice.reducer
export const pocThunks = pocSlice.actions
