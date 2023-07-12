import { createSlice,PayloadAction } from "@reduxjs/toolkit";
const initialState={
    role:""
} as initialstateTypes
type initialstateTypes={
    role:string
}
export const role=createSlice({
    name:'role',
    initialState:initialState,
    reducers:{
        setrole:(state,action:PayloadAction<string>)=>{
            return {
                role:action.payload
            }
        }
    }
})

export const {setrole}=role.actions
export default role.reducer