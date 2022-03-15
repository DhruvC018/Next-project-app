import axios from 'axios';

import React, {useState, useEffect} from 'react'

const Post = ()  => {

    const [posts,setPosts] = useState([]);
    
    const getPost = async () => {
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(data.data);
    }
    
    useEffect(() => {
        getPost();
    },[])

  return (
    <div>
        {posts.map((post) => (
            <div>
                <h4 key={post.userId} >{post.title}</h4>
                <p key={post.id}> {post.body} </p>
            </div>
        ))}
    </div>
  )
}

export default Post