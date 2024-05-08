import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isOpen: false,
    profileInfo: null,
}

const modalSlice = createSlice({
    name: 'teamModal',
    initialState,
    reducers: {
        openTeamModal: (state, action) => {
            state.isOpen = true;
            state.profileInfo = action.payload;
        },
        closeTeamModal: (state) => {
            state.isOpen = false;
            state.profileInfo = null;
        }

    }
})

export const { openTeamModal, closeTeamModal } = modalSlice.actions;

export default modalSlice.reducer;