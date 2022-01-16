import React, { useCallback, useState } from "react";
import "./App.css";
import WritePostForm from "./components/WritePostForm";
import Layout from "./layout/Layout";
import PostList from "./components/PostList";
import { useRecoilValue } from "recoil";
import {getPost, } from './recoil/states'
import { AxiosResponse } from "axios";

function App() {
  const [WritePostModal, setWritePostModal] = useState(false);
  const data : <void>  = useRecoilValue(getPost);

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
          {data.map((v : any)=>
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
