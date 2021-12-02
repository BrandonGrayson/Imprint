import React from 'react'
import { Box, Text, Link } from "@chakra-ui/react"
import { UnorderedList, Button } from "@chakra-ui/react"
// import fetchPost from '../api/fetchPosts'
import { Outlet } from 'react-router-dom'
import { Link as RouteLink} from "react-router-dom"

const postIds = [1, 2, 3, 4, 5, 6, 7, 8]

function fetchPost(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
}

export default function MainPost() {

    const [post, setPost] = React.useState([])
    const [index, setIndex] = React.useState(1)
    

    React.useEffect(() => {
        fetchPost(index)
            .then((res) => setPost(res))
    }, [index])

    const nextPost = () => {
        setIndex((index) => index + 1)
    }

    console.log(post)
    console.log("index is: " + {index})
    return (
        <Box>
            <Text>This is the Main Blog Component</Text>
            <Link as={RouteLink} to={`/blog/${index}`}>
                <Button onClick={nextPost}>View Post</Button>
            </Link>

            <Text>{post.title}</Text>

            <Outlet />
        </Box>
    )
}