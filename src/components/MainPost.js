import React from 'react'
import { Box, Text, Button } from "@chakra-ui/react"
// import fetchPost from '../api/fetchPosts'
import { Link, Outlet } from 'react-router-dom'

const postIds = [1,2,3,4,5,6,7,8]

function fetchPost (id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.json())
}

export default function MainPost() {

    const [post, setPost] = React.useState([])

    React.useEffect(() => {
        fetchPost(1)
        .then((res) => setPost(res))
    }, [])
    
    console.log(post)
    return (
        <Box>
            <Text>This is the Main Blog Component</Text>
            <Link to='/blog/1'>
                <Button>View Post</Button>
            </Link>

    <Text>{post.title}</Text>

            <Outlet />
        </Box>
    )
}