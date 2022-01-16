import {atom, selector} from 'recoil';
import axios, { AxiosResponse } from 'axios';

export const refreshPost = atom({
    key : 'refreshPost',
    default : [],
});

export const getPost = selector({
    key : "getPost",
    get : async({get}) =>{
        const refresh : Array<any> = get(refreshPost);
        await axios.get('http://localhost:3065/posts',{
            withCredentials : true
        })
        .then(
            (response : AxiosResponse<any, any>)=>
            {
                console.log(response)
                return response;
            }
        )
        .catch((error)=>{
            console.log(error)
        });
    },
})