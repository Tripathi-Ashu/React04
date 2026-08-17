
import React from 'react';


const Post = React.memo(({value})=>{
    console.log("hii")
    return ( 
        <>
        <h1>Your name is {} ang age is 20</h1>
        </>
    )
})


export default Post;