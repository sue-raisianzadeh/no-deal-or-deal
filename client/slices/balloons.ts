import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import data from '../../data/balloonData'

const slice = createSlice({
  name: 'balloons',
  initialState: data,
  reducers: {
    popBalloon: (state, action: PayloadAction<number>) =>
      state.map((balloon) =>
        balloon.id === action.payload
          ? { ...balloon, isVisible: false }
          : balloon
      ),
  },
})

export const { popBalloon } = slice.actions

export default slice.reducer
