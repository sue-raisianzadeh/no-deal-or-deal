import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface Payload {
  page: string
}

export const activePageSlice = createSlice({
  name: 'activePage',
  initialState: 'game',
  reducers: {
    // this is where our navigate action will go

    navigate: (_, { payload }: PayloadAction<Payload>) => {
      return payload.page
    },
  },
})

export const selectActivePage = (state: RootState) => state.activePage

// ... we will export our actions here
export const { navigate } = activePageSlice.actions

export default activePageSlice.reducer
