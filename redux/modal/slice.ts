import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalSliceState {
  openUpload: boolean
}

const initialState: ModalSliceState = {
  openUpload: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    setOpenUpload: (state, action: PayloadAction<boolean>) => {
      state.openUpload = action.payload
    },
  },
})

export const { setOpenUpload } = modalSlice.actions

export default modalSlice.reducer
