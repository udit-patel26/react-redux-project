import { createSlice } from "@reduxjs/toolkit";

const initialState={
    showUi:false
}

const uiCartSlice= createSlice({
    name:"ui_slice",
    initialState,
    reducers:{
        showUiCart(state){
            state.showUi=!state.showUi
        },
    }
})
export const uiActions= uiCartSlice.actions;

export default uiCartSlice.reducer;