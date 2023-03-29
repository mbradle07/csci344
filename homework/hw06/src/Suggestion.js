import React from 'react';
import FollowButton from './FollowButton';

export default function Suggestion({suggestion, token}) {
    return (
        <div className="suggestion">
            <img src={suggestion.thumb_url} />
            <h3>{suggestion.username}</h3>
            <div className="buttons">
                <FollowButton suggestion={suggestion} token={token} />
            </div>
        </div>
    );
}