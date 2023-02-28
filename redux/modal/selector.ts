import { RootState } from '../store'

export const selectOpenUpload = (state: RootState) => state.modal.openUpload
