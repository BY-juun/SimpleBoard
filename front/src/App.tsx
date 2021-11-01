import React, { useCallback, useState } from "react";
import "./App.css";
import WritePostForm from "./components/WritePostForm";
import Layout from "./layout/Layout";

function App() {
  const [WritePostModal, setWritePostModal] = useState(false);

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
          {WritePostModal && (
            <WritePostForm setWritePostModal={setWritePostModal} />
          )}
        </div>
      </Layout>
    </div>
  );
}

export default App;
