import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import "./Posts.css";
const Posts = () => {
  const Posts = useLoaderData();
  return (
    <div>
      <h2>Total Posts:{Posts.length}</h2>
      <div className="posts-main">
        {Posts.map((post) => (
          <Post key={Posts.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
