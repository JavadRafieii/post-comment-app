import postSlice from "./postSlice";
import commentSlice from "./commentSlice";

const rootReducer = {
    posts: postSlice,
    comments: commentSlice,
};

export default rootReducer;