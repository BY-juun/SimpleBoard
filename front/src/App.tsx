import React, { useCallback, useState } from "react";
import "./App.css";
import WritePostForm from "./components/WritePostForm";
import Layout from "./layout/Layout";
import useSWR from 'swr';
import fetcher from './utils/fetcher';
import PostList from "./components/PostList";


function App() {
  const [WritePostModal, setWritePostModal] = useState(false);
  const {data: postData, error, mutate} = useSWR('http://localhost:3065/posts',fetcher);
  console.log(postData);
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
            <WritePostForm setWritePostModal={setWritePostModal} mutate = {mutate}/>
          )}
        </div>
      </Layout>
    </div>
  );
}

export default App;
