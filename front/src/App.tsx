import React, { useCallback, useState } from "react";
import "./App.css";
import WritePostForm from "./components/WritePostForm";
import Layout from "./layout/Layout";
import PostList from "./components/PostList";
import { useRecoilState, useRecoilValue } from "recoil";
import {getPost, Post} from './recoil/states'

function App() {
  const [WritePostModal, setWritePostModal] = useState(false);
  const [postData, setPostData] = useRecoilState(Post);
  const data = useRecoilValue(getPost);
  console.log(postData);
  console.log(data);
  const onClickWritePost = useCallback(() => {
    setWritePostModal(!WritePostModal);
  }, [WritePostModal]);

  return (
    <div className="App">
      <Layout>
        <div >
          <button
            className="p-3 border m-10 rounded-xl bg-blue-100"
            onClick={onClickWritePost}
          >
            글 작성
          </button>
          {postData && postData.map((v : any)=>
            <PostList title = {v.title} content = {v.content}/>
            )
          }
          {WritePostModal && (
            <WritePostForm setWritePostModal={setWritePostModal}/>
          )}
        </div>
      </Layout>
    </div>
  );
}

export default App;
