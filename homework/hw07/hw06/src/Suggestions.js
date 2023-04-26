import React from 'react';
import {getHeaders} from './utils';
import { useState, useEffect } from "react";
import Suggestion from './Suggestion';

export default function Suggestions({token}) {
    const [suggestions, setsuggestions] = useState([]);
    useEffect(() => {
        async function fetchsuggestions() {
            const response = await fetch('/api/suggestions', {
                headers: getHeaders(token)
            });
            const data = await response.json();
            setsuggestions(data);
        }
        fetchsuggestions();
    }, [token]);
    if(suggestions.length === 0) {
        return <div id="suggestions"></div>
    }
    return (
        <div className="suggestions">
            {suggestions.map(suggestion => {
                return(
                    <Suggestion key={suggestion.id} suggestion={suggestion} token={token} />
                )
            })}
        </div>
    );
}