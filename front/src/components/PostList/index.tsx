import React, { VFC } from 'react';

interface props {
    title : string,
    content : string,
}

const PostList : VFC<props> = ({title, content}) => {
    return(
        <>
        <div>{title}</div>
        <div>{content}</div>
        </>
    );
};

export default PostList;