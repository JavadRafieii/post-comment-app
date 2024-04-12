import { useDispatch } from "react-redux";
import { updateComment } from "../redux-configuration/postSlice";
import { faker } from '@faker-js/faker';

function Comment({ postId, id, title, date }) {

    const dispatch = useDispatch();

    const handelUpdateComment = () => {
        dispatch(updateComment({
            postId,
            id,
            title: faker.lorem.word(),
            date: faker.date.month(),
        }))
    };

    return (
        <div className="flex justify-between items-center">
            <div className="mt-4 flex items-center space-x-4 py-2">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white">{title.slice(0, 1)}</div>
                <div className="text-sm font-semibold">{title} • <span className="font-normal">{date}</span></div>
                <div onClick={handelUpdateComment} className="w-auto bg-green-600 rounded-md cursor-pointer py-2 px-3 flex items-center justify-center font-bold text-white">Update</div>
            </div>
        </div>
    );
};

export default Comment;