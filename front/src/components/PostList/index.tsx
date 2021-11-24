import React, { VFC } from "react";

interface props {
  title: string;
  content: string;
}

const PostList: VFC<props> = ({ title, content }) => {
  return (
    <>
      {content && title && (
        <div className="my-5 border w-1/2 m-auto h-40 pt-6">
          <h1 className="text-3xl mb-6">{title}</h1>
          <div>{content}</div>
        </div>
      )}
    </>
  );
};

export default PostList;
