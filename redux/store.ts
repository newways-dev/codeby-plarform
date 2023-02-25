import { configureStore } from '@reduxjs/toolkit'
import menu from './mobileMenu/slice'
import user from './user/slice'

export const store = configureStore({
  reducer: {
    menu,
    user,
  },
})

export type RootState = ReturnType<typeof store.getState>
