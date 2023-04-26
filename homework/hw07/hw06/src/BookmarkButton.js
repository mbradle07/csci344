import React from 'react';
import {getHeaders} from './utils';



export default function BookmarkButton({post, token, requeryPost}) {
    const bookmarkId = post.current_user_bookmark_id;
    const postId = post.id;
    async function bookmarkUnbookmark() {
        if(bookmarkId) {
            const response = await fetch(`/api/bookmarks/${bookmarkId}`, {
                method: 'DELETE',
                headers: getHeaders(token)
            })
            const data = await response.json();
            requeryPost();
        } else {
            const postData = {
                'post_id': postId
            };
            const response = await fetch('/api/bookmarks/', {
                method: 'POST',
                headers: getHeaders(token),
                body: JSON.stringify(postData)
            })
            const data = await response.json();
            requeryPost();
        }
    }
    return (
        <button role="switch" aria-checked={bookmarkId ? 'true' : 'false'} aria-label={bookmarkId ? 'bookmarked' : 'unbookmarked'} onClick={bookmarkUnbookmark}><i className={bookmarkId ? 'fas fa-bookmark' : 'far fa-bookmark'}></i></button>
    );
}