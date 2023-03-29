import React from "react";
import { useState, useEffect } from 'react';

export default function Carousel({gallery}) {

    const [idx, setIdx] = useState(0);
    const [photos, setPhotos] = useState([]);


    useEffect(() => {
        async function getPhotos () {
            console.log(gallery.endpoint);
            const response = await fetch(gallery.endpoint);
            const data = await response.json();
            setPhotos(data);
            setIdx(0);
        }
        getPhotos()
    }, [gallery])
    
    console.log(photos);
    if (photos.length > 0) {
        console.log(photos[idx]);
    }
    const currentImageUrl = photos.length > 0 ? photos[idx].image : null;

    function previous() {
        console.log('previous');
        (idx > 0) ? setIdx(idx - 1) : setIdx(photos.length - 1);
    }

    function next() {
        console.log('next');
        (idx < photos.length - 1) ? setIdx(idx + 1) : setIdx(0);
    }

    if (currentImageUrl) {
        return (
            <div className="carousel">
                <h2>Child: {gallery.name}</h2>
                <div class="navigation">
                    <button onClick={previous}>Previous</button>
                    <p>Photo {idx + 1} of {photos.length}</p>
                    <button onClick={next}>Next</button>
                </div>
                <div className="carousel-inner">
                    <img src={currentImageUrl} />
                </div>
            </div>
        )
    }
    else {
        return <div></div>
    }
}