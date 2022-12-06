import React from "react";
import { useParams, useLocation }  from 'react-router-dom';

const posts = [
    {
        id: 1,
        name: 'Post one',
        content: 'Hello World'
    }, 
    {
        id: 2,
        name: 'Post Two',
        content: 'Different Id'
    },
    {
        id: 3,
        name: 'Post Three',
        content: 'Numeric post'
    }
];


const PostPage = () => {
    const location = useLocation();
    // console.log(location);

    const { id } = useParams();
    return (
        <>
        <h1>Post Page Number {id}</h1>
        <h1>{posts[{id}].content}</h1>
        </>
    )
}

export default PostPage;