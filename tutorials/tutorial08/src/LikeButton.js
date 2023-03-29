import React from 'react';
import {getHeaders} from './utils';


export default function LikeButton({post, token, requeryPost}) {
    const likeId = post.current_user_like_id;
    const postId = post.id;
    async function likeUnlike() {
        if(likeId) {
            //async function deleteLike() {
                const response = await fetch(`/api/posts/likes/${likeId}`, {
                    method: 'DELETE',
                    headers: getHeaders(token)
                })
                const data = await response.json();
            //}
            //deleteLike();
            requeryPost();
        } else {
            //async function postLike() {
                const postData = {
                    'post_id': postId
                };
                const response = await fetch('/api/posts/likes/', {
                    method: 'POST',
                    headers: getHeaders(token),
                    body: JSON.stringify(postData)
                })
                const data = await response.json();
            //}
            //postLike();
            requeryPost();
        }
    }
    return (
        <button onClick={likeUnlike}><i className={likeId ? 'fas fa-heart' : 'far fa-heart'}></i></button>
    );
}