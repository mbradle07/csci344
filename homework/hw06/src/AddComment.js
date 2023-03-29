import React from 'react';
import {getHeaders} from './utils';

export default function AddComment({post, token, requeryPost}) {
    const textInput = React.createRef();
    async function comment(ev) {
        ev.preventDefault();
        const postData = {
            'post_id': post.id,
            'text': textInput.current.value
        };
        console.log(postData);
        const response = await fetch('/api/comments', {
            method: 'POST',
            headers: getHeaders(token),
            body: JSON.stringify(postData)
        })
        const data = await response.json();
        textInput.current.value = "";
        requeryPost();
    }
    return (
        <div>
            <form onSubmit={comment}>
                <input placeholder="Add a comment..." autoFocus ref={textInput} />
                <button>Add Comment</button>
            </form>
        </div>);
}