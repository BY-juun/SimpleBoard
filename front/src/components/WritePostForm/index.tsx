import React, { useCallback, useState, VFC } from "react";

const WritePostForm: VFC = () => {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');

    const onChangeTitle = useCallback((e) => {
        setTitle(e.target.value);
    },[])

    const onChangeContent = useCallback((e)=>{
        setContent(e.target.value);
    },[]);

    const onSubmitForm = useCallback((e)=>{
        e.preventDefault();
    },[]);

  return (
    <form className = 'p-8 border-2 w-2/4 m-auto rounded-2xl' onSubmit = {onSubmitForm}>
      <div>
        <span>Title</span>
        <input
          className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none 
          block m-auto text-sm text-black placeholder-gray-500 
          border border-gray-200 rounded-md w-3/4 py-2 pl-5 mt-4" 
          type="text"
          aria-label="Title"
          placeholder="Title"
          onChange = {onChangeTitle}
        />
      </div>
      <div className = 'mt-8'>
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
      <div>
      <button
        className="p-3  m-10 rounded-xl bg-green-100 w-1/4">
            등록!
        </button>
      </div>
    </form>
  );
};

export default WritePostForm;
