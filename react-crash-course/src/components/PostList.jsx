
import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostList.module.css'
import { useState, useEffect } from "react";
import Modal from "./Modal";
function PostList({ isPosting, onStopPosting }) {



    const [posts, setPost] = useState([]);
    const [isFetching,seIsFetching]=useState(false);
    useEffect(() => {

        async function fetchPost() {
            seIsFetching(true)
            const postData = await fetch('http://localhost:8080/posts');
            const responeData = await postData.json()
            console.log(responeData,"this is datata")
            setPost(responeData.posts)
            seIsFetching(false)


        }
        fetchPost()



    }, [])


    function addPostHandler(postData) {

        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }

        })

        setPost((existing) => [postData, ...existing])

    }




    return (
        <>
            {isPosting && <Modal onClose={onStopPosting} >
                <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
            </Modal>
            }

            {posts.length && !isFetching > 0 ?
                <ul className={classes.posts}>
                    {posts.map((post, index) =>
                        <Post key={index} name={post.author} body={post.body} />
                    )}

                </ul> : <h1>No Post Is Present</h1>
            }
        </>


    )
}

export default PostList