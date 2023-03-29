/**
 * The job of Galleries is to show users the avaiable galleries,
 * and let them select the one they want to look at.
 */

import React from "react";

export default function Galleries({galleries, setGalleryIndex}) {
    console.log(galleries);
    function chooseGallery(idx) {
        console.log("choose new gallery");
        setGalleryIndex(idx);
    }
    return (
        <section>
            <h2>Available Galleries</h2>
            {
                galleries.map((gallery, idx) => {
                    return (
                        <button onClick={() => {chooseGallery(idx);}}>{gallery.name}</button>
                    )
                })
            }
        </section>
    )
}