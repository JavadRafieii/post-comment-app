import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    byId: {},
    allIds: [],
};

const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        addNewComment(state, action) {
            const { id, title, date } = action.payload;
            state.byId[id] = { id, title, date };
            state.allIds.push(id);
        },
        updateComment(state, action) {
            const { id, title, date } = action.payload;
            state.byId[id] = { id, title, date }
        },
    },
});

export const { addNewComment, updateComment } = commentSlice.actions;

export default commentSlice.reducer;