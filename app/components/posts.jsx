import { useEffect, useState } from "react";
import LoadingPosts from "./loadingPosts";
import PostForm from "./postForm";
import PostItem from "./postitem";
import axios from "axios";

export default function Posts() {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    async function getPosts() {
        setIsLoading(true)
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/getAll`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then((res) => (res.data))
        .then((data) => {
            setIsLoading(false)
            setPosts(data)
        })
        .catch((e) => {
            console.log(e)
            setIsError(true)
        })
    }

    useEffect(() => {
        getPosts()
    }, [])

    if (isError)
        return (
            <div className="grid grid-cols-1 gap-8 py-16 w-2/5 mx-auto">
                <h4>Error</h4>
            </div>
        )
    
    if (isLoading)
        return (
            <div className="grid grid-cols-1 gap-8 py-16 w-2/5 mx-auto">
                <LoadingPosts/>
            </div>
        )

    if (posts)
    return (
        <div className="grid grid-cols-1 gap-8 py-16 w-2/5 mx-auto">
            <PostForm></PostForm>
            {posts.map((post) => (
                <PostItem key={post.id} data={post}/>
            ))}
        </div>
    )
}