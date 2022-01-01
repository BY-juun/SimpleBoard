import React, { useCallback, useState, VFC } from "react";
import axios from 'axios';
import {AiOutlineCloseCircle} from 'react-icons/ai';

interface props{
  setWritePostModal(arg0: boolean) : void;
}

const WritePostForm: VFC<props> = ({setWritePostModal}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onChangeContent = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  const onClickXbutton = useCallback(()=>{
    setWritePostModal(false);
  },[]);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    console.log(title);
    console.log(content);
    axios.post('http://localhost:3065/post',{
      title : title,
      content : content
    },{
      withCredentials : true
    })
    .then((response)=>{
      console.log(response);
      setWritePostModal(false);
    })
    .catch((err)=>{
      console.error(err);
    })
  }, [title,content]);

  return (
    <form
      className="p-8 border-2 w-2/4 m-auto rounded-2xl fixed inset-1/4 bg-white h-3/6"
      onSubmit={onSubmitForm}
    >
      <div>
        <div className = 'float-right'>
          <button  onClick = {onClickXbutton}><AiOutlineCloseCircle size ="24"/></button>
        </div>
        <div className='ml-4'>
          <span>Title</span>
        </div>
        <input
          className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none 
          block m-auto text-sm text-black placeholder-gray-500 
          border border-gray-200 rounded-md w-3/4 py-2 pl-5 mt-4"
          type="text"
          aria-label="Title"
          placeholder="Title"
          onChange={onChangeTitle}
        />
      </div>
      <div className="mt-8">
        <span>Content</span>
        <textarea
          className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none 
          block m-auto text-sm text-black placeholder-gray-500
           border border-gray-200 rounded-md w-3/4  h-44 py-2 pl-5 mt-4"
          aria-label="Content"
          placeholder="Content"
          onChange={onChangeContent}
        />
      </div>
        <button className="p-3  m-4 rounded-xl bg-green-100 w-1/4">
          등록!
        </button>
    </form>
  );
};

export default WritePostForm;
