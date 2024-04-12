import Post from "./components/post";
import { useSelector, useDispatch } from "react-redux";
import { addNewPost } from "./redux-configuration/postSlice";
import { faker } from '@faker-js/faker';

function App() {

  const posts = useSelector(state => state.posts);

  const dispatch = useDispatch();

  const handelAddNewPost = () => {
    dispatch(addNewPost({
      id: faker.string.nanoid(),
      title: faker.lorem.word(),
      body: faker.lorem.text(),
      stars: 5,
      comment: []
    }))
  };

  return (
    <>
      <div className="bg-gray-100 flex flex-col items-center justify-center gap-5 p-5">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            stars={post.stars}
            comments={post.comment} />
        ))}
      </div>
      <div onClick={handelAddNewPost} className="p-6 mb-5 bg-yellow-400 rounded-full h-4 w-4 mx-auto flex items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer">+</div>
    </>
  );
};

export default App;