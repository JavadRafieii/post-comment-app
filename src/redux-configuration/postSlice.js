import { createSlice } from '@reduxjs/toolkit';
import { addNewComment } from './commentSlice';

const initialState = {
    byId: {},
    allIds: [],
};

const postsSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addNewPost(state, action) {
            const { id } = action.payload;
            const newPost = action.payload;
            state.byId[id] = newPost;
            state.allIds.push(id);
        },
    },
    extraReducers: builder => {
        builder
            .addCase(addNewComment, (state, action) => {
                const { postId, id } = action.payload;
                state.byId[postId].comment.push(id);
            })
    },
})

export const { addNewPost } = postsSlice.actions;
export default postsSlice.reducer;