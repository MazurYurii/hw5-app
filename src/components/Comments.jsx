import { useState, useEffect } from "react";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((responce) => responce.json())
        .then((data) => setComments(data));
    }, []);

    return (
        <>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <h3>{comment.name}</h3>
                    <h4>{comment.email}</h4>
                    <p>{comment.body}</p>
                </div>
            ))}
        </>
    )
}

export default Comments;