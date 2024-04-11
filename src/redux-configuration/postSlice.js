import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        title: "Title 1",
        body: "body",
        stars: 6,
        comment: [],
    }
];

const postsSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {

    },
})

export default postsSlice.reducer;