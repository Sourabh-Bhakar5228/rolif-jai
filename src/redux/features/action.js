import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sidebar: false,
    sidebarCollapse: false,
}

const actionSlice = createSlice({
    name: 'action',
    initialState,
    setAction: (state, { payload }) => {
        return { ...state, ...payload };
    }
});

export const { setAction } = actionSlice.actions;
export default actionSlice.reducer;