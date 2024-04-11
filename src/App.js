import Post from "./components/post";
import { useSelector } from "react-redux";

function App() {

  const posts = useSelector(state => state.posts);

  return (
    posts.map(post => <Post key={post.id} title={post.title} body={post.body} stars={post.stars}/>)
  );
};

export default App;