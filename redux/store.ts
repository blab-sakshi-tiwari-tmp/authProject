import { configureStore } from "@reduxjs/toolkit";
import roleReducer from './features/role-slice'
import { TypedUseSelectorHook, useSelector } from "react-redux";
export const store=configureStore({
    reducer:{roleReducer,}
})
 export type RootState=ReturnType<typeof store.getState>
 export type AppDispatch=typeof store.dispatch
 export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector