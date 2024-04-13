import Comment from "./comment";
import { useDispatch, useSelector } from "react-redux";
import { faker } from '@faker-js/faker';
import { addNewComment } from "../redux-configuration/commentSlice";


function Post({ id }) {

    const post = useSelector(state => state.posts.byId[id]);

    const dispatch = useDispatch();

    const handelAddComment = () => {
        dispatch(addNewComment({
            postId: id,
            id: faker.string.nanoid(),
            title: faker.lorem.word(),
            date: faker.date.month(),
        }));
    };

    return (
        <div className="px-10">
            <div className="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
                <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white">{post.title.slice(0, 1)}</div>
                <div className="mt-4">
                    <h1 className="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">{post.title}</h1>
                    <p className="mt-4 text-md text-gray-600">{post.body}</p>
                    <div onClick={handelAddComment} className="p-6 bg-yellow-400 rounded-full h-4 w-4 mx-auto flex items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer">+</div>
                    {post.comment.map(id => <Comment key={id} id={id} />)}
                </div>
            </div>
        </div>
    );
};

export default Post;