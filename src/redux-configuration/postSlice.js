import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const postsSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addNewPost(state, action) {
            const { id, title, body, stars, comment } = action.payload;
            state.push({ id, title, body, stars, comment });
        },
        addNewComment(state, action) {
            const { postId, id, title, date } = action.payload;
            state.map(post => {
                if (post.id === postId) {
                    post.comment.push({ id, title, date })
                }
                return false;
            });
        },
        updateComment(state, action) {
            const { postId, id, title, date } = action.payload;
            state.map(post => {
                if (post.id === postId) {
                    post.comment.forEach(comment => {
                        if (comment.id === id) {
                            comment.title = title;
                            comment.date = date;
                        }
                    });
                }
                return false;
            });
        },
    },
})

export const { addNewPost, addNewComment, updateComment } = postsSlice.actions;
export default postsSlice.reducer;