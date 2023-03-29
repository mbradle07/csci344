import React from "react";
import { useState, useEffect } from 'react';

export default function Carousel({gallery}) {
    console.log(gallery);
    const [merch, setMerch] = useState([]);
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        async function getMerch() {
            const request = await fetch(gallery.endpoint);
            const data = await request.json();
            console.log(data);
            setMerch(data);
        }
        getMerch();
    }, [gallery])

    function previous() {
        (idx==0 ? setIdx(merch.length - 1) : setIdx(idx - 1));
    }

    function next() {
        (idx > merch.length - 1 ? setIdx(0) : setIdx(idx + 1));
    }

    // ------------------------------------------------------------
    // Your Tasks:
    // ------------------------------------------------------------
    // 1. Use the useEffect hook (effect as in "side effect")
    //    to fetch photos from the gallery's corresponding endpoint
    // 2. First argument is the function, second argument is the
    //    dependencies
    // 3. When data comes back from the server, save the
    //    resulting data in a variable. Then set the idx variable to 0.

    return (
        <div className="carousel">

            <div class="carousel-inner">
                {merch.length > 0 ? <img src={merch[idx].image} /> : ''}
            </div>

            <div class="navigation">
                <button onClick={previous}>Previous</button>
                <button onClick={next}>Next</button>
            </div>
        </div>
    )

}