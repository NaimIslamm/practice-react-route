import React from "react";
import "./Post.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, name } = post;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  const handleseedetails = () => {
    navigate(`/Post/${id}`);
  };

  const handlegoback = () => {
    navigate("/");
  };

  return (
    <div className="post-main">
      <h2>No:{id}</h2>
      <h3>Name:{name}</h3>
      <div className="button-container">
        <button onClick={handleseedetails}>See Details</button>
        <button onClick={handleGoBack}>Go Back</button>
        <button onClick={handlegoback}>Go Home</button>
      </div>
    </div>
  );
};

export default Post;
