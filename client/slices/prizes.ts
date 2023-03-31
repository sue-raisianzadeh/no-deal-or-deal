import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import data from '../../data/prizeData'

const slice = createSlice({
  name: 'prizes',
  initialState: data,
  reducers: {
    revealPrize: (state, action: PayloadAction<number>) =>
      state.map((prize) =>
        prize.id === action.payload ? { ...prize, isVisible: false } : prize
      ),
  },
})

export const { revealPrize } = slice.actions

export default slice.reducer
