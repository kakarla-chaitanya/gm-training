import { useEffect } from "react";
import { _delete, get, patch, post, put } from "./service";

export default function TODO(){
    useEffect(()=>{
        (async()=>{
            try{
            await get("/todos",{});
            await get('/comments',{params:{postId:1}});
            await post('/posts',{
                name:"Asha Latha",
                birthDay:"Tommorow"
            });
            await put('/posts/1',{
                request:"put",
                name:"Asha Latha",
                birthDay:"Tommorow"
            });

            await patch('/posts/1',{
                request:"patch",
                name:"Asha Latha",
                birthDay:"Tommorow"
            });

            await _delete('/posts/1');
            }catch(e){
                console.log(e);
            }
        })();
    },[]);
}