import React from 'react';
import LikeButton from './LikeButton';
import BookmarkButton from './BookmarkButton';
import { getHeaders } from './utils';
import {useState} from 'react';
import AddComment from './AddComment';

export default function Post({post, token}) {
    const [actualPost, setActualPost] = useState(post);
    async function requeryPost () {
        const response = await fetch(`/api/posts/${post.id}`, {
            method: "GET",
            headers: getHeaders(token)
        });
        const data = await response.json();
        console.group(data);
        setActualPost(data);
    }
     return (
        <section className="card">
            <img src={actualPost.image_url} alt={actualPost.caption} />
            <div>
                {actualPost.caption}
                <p>Comments</p>
                {actualPost.comments.length > 0 ? actualPost.comments[actualPost.comments.length-1].text : ''}
            </div>
            <span>{actualPost.likes.length} {(actualPost.likes.length == 1) ? 'like' : 'likes' }</span>
            <div className="buttons">
                <LikeButton post={actualPost} token={token} requeryPost={requeryPost}/>
                <BookmarkButton post={actualPost} token={token} requeryPost={requeryPost}/>
            </div>
            <div>
                <AddComment post={actualPost} token={token} requeryPost={requeryPost} />
            </div>
        </section>
     );
}