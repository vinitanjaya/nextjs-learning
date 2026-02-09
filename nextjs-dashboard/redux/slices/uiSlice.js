import { createSlice } from '@reduxjs/toolkit';
import { create } from 'node:domain';

const initialState = {
    isSideBarOpen: true,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleSidebar(state) {
        state.isSidebarOpen = !state.isSidebarOpen;
        },
        openSidebar(state) {
        state.isSidebarOpen = true;
        },
        closeSidebar(state) {
        state.isSidebarOpen = false;
        },
    },
});

export const { toggleSidebar, openSidebar, closeSidebar } =
  uiSlice.actions;

export default uiSlice.reducer;