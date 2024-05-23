import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import "./Post.css";

const Post = () => {
  const [post, setPost] = useState({});

  const { id } = useParams();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getPost = async () => {
    try {
      const response = await blogFetch.get(`/posts/${id}`);

      const data = response.data;

      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <div className="post-container">
      {!post.title ? (
        <p>Carregando...</p>
      ) : (
        <div className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
