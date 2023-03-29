/**
 * The job of Carousel is to display all of the images in a gallery.
 */

import React, { useState} from "react";
export default function Carousel({title, gallery}) {
    //create a state variable to trigger the Reacet screen redraw functionality:
    const [index, setIndex] = useState(0);
    const currentImageURL = gallery.images[index];
    function previous() {
        (index === 0) ? setIndex(gallery.images.length - 1) : setIndex(index - 1);
    }
    function next() {
        (index === gallery.images.length - 1) ? setIndex(0) : setIndex(index + 1);    
    }
    return (
        <div className="carousel">
            <h1>{title}</h1>
            <img src={currentImageURL} />
            <button onClick={previous}>previous</button>
            <button onClick={next}>next</button>
        </div>
    )
}