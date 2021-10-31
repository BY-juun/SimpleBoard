import React from "react";
import "./App.css";
import PostList from "./components/PostList";
import Header from './layout/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <button
        className="p-3 border m-10 rounded-xl bg-blue-100"
      >
        글 작성
      </button>
      <PostList></PostList>
    </div>
  );
}

export default App;
