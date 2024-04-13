import { useDispatch, useSelector } from "react-redux";
import { faker } from '@faker-js/faker';
import { updateComment } from "../redux-configuration/commentSlice";

function Comment({ id }) {

    const comment = useSelector(state => state.comments.byId[id])

    const dispatch = useDispatch();

    const handelUpdateComment = () => {
        dispatch(updateComment({
            id,
            title: faker.lorem.word(),
            date: faker.date.month(),
        }))
    };

    return (
        <div className="flex justify-between items-center">
            <div className="mt-4 flex items-center space-x-4 py-2">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white">{comment.title.slice(0, 1)}</div>
                <div className="text-sm font-semibold">{comment.title} • <span className="font-normal">{comment.date}</span></div>
                <div onClick={handelUpdateComment} className="w-auto bg-green-600 rounded-md cursor-pointer py-2 px-3 flex items-center justify-center font-bold text-white">Update</div>
            </div>
        </div>
    );
};

export default Comment;