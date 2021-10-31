import React, { useCallback, useState } from "react";
import "./App.css";
import WritePostForm from "./components/WritePostForm";
import Header from './layout/Header';

function App() {
  const [WritePostModal, setWritePostModal] = useState(false);

  const onClickWritePost = useCallback(()=>{
    setWritePostModal(!WritePostModal);  
  },[WritePostModal]);

  return (
    <div className="App">
      <Header></Header>
      <button
        className="p-3 border m-10 rounded-xl bg-blue-100"
        onClick={onClickWritePost}
      >
        글 작성
      </button>
      {WritePostModal && <WritePostForm />}
    </div>
  );
}

export default App;
