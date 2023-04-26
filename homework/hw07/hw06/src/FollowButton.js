import React from 'react';
import {getHeaders} from './utils';
import {useState} from 'react';

export default function FollowButton({suggestion, token}) {
    const suggestionId = suggestion.id;
    const [followId, setFollowId] = useState(null);
    async function followUnfollow() {
        if(followId) {
            const response = await fetch(`/api/following/${followId}`, {
                method: 'DELETE',
                headers: getHeaders(token)
            })
            const data = await response.json();
            setFollowId(null);
            //requerysuggestion();
        } else {
            const suggestionData = {
                'user_id': suggestionId
            };
            const response = await fetch('/api/following', {
                method: 'POST',
                headers: getHeaders(token),
                body: JSON.stringify(suggestionData)
            })
            const data = await response.json();
            setFollowId(data.id)
            //requerysuggestion();
        }
    }
    return (
        <button role="switch" aria-checked={followId ? 'true' : 'false'} aria-label={followId ? 'followed' : 'unfollowed'} onClick={followUnfollow}>{followId ? 'unfollow' : 'follow'}</button>
    );
}