import React from 'react';
//import { useState, useEffect } from "react";

export default function NavLinks({profile}) { 
    // const [profile, setProfile] = useState(null);
    // useEffect(() => {
    //     async function fetchProfile() {
    //         const response = await fetch('/api/profile', {
    //             headers: getHeaders(token)
    //         });
    //         const data = await response.json();
    //         setProfile(data)
    //     }
    //     fetchProfile();
    // }, [token]);


    if (!profile) {
        return '';
    }
    return (
        <ul>   
            <li>API Docs</li>
            <li><span>{profile.username}</span></li>
            <li>Sign out</li>
        </ul> 
    );
    
}
