import { createSlice } from "@reduxjs/toolkit";


const initialState={
    userList:[],
}

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:
    {
        addUser:(state,action)=>{
            state.userList.push(action.payload);
        },

    },
})
export const {addUser}=userSlice.actions;
export default userSlice.reducer