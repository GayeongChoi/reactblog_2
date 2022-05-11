import React from "react";
import Post from "../post/Post";

function Posts() {
  return (
    <div className="blog__posts">
      <Post
        img="https://source.unsplash.com/800x580/?blog,night
      "
      />
      <Post
        img="https://source.unsplash.com/800x580/?blog,red
      "
      />
      <Post
        img="https://source.unsplash.com/800x580/?blog,green
      "
      />
      <Post
        img="https://source.unsplash.com/800x580/?blog,main
      "
      />
      <Post
        img="https://source.unsplash.com/800x580/?blog,cookie
      "
      />
      <Post
        img="https://source.unsplash.com/800x580/?blog,cake
      "
      />
    </div>
  );
}

export default Posts;
