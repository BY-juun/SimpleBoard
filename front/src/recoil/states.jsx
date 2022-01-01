import {atom, selector} from 'recoil';
import axios from 'axios';

export const Post = atom({
    key : 'Post',
    default : [],
});

export const getPost = selector({
    key : "getPost",
    get : async({get}) =>{
        const PostData = get(Post);
        await axios.get('http://localhost:3065/posts',{
            withCredentials : true
        })
        .then(
            (response)=>
            {
                console.log(response)
                return response;
            }
        )
        .catch((error)=>{
            console.log(error)
        });
    }
})