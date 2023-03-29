import React from 'react';
import NavLinks from './NavLinks';
import Profile from './Profile';
import Suggestions from './Suggestions';
import Posts from './Posts';
import Stories from './Stories';
import { useState, useEffect } from "react";
import {getHeaders} from './utils';

export default function App ({token}) { 
    console.log('access token:', token);
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        async function fetchProfile() {
            const response = await fetch('/api/profile', {
                headers: getHeaders(token)
            });
            const data = await response.json();
            setProfile(data);
        }
        fetchProfile();
    }, [token]);
    
    return (
        <div>
            
            {/* Navbar */}
            <nav className="main-nav">
                <h1>Photo App</h1>
                <NavLinks profile={profile} />
            </nav>
           
           {/* Right Panel */}
            <aside>
                <Profile profile={profile} />
                <Suggestions token={token} />
            </aside>

            <main>

                {/* Stories */}
                <Stories token={token} />

                {/* Posts */}
                <Posts token={token}/>

            </main>

        </div>
    );
    
}