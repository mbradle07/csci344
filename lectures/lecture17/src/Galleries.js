import React from "react";

export default function Galleries({ galleries, galleryIdx, setGalleryIdx }) {
    console.log('Current Gallery Index:', galleryIdx);
    
    // Things to note:
    // 1. setGalleryIdx is a function that is defined 
    //    in the parent (App). That way, when it's triggered, 
    //    the parent element redraws (which in turn forces the)
    //    two child components to also redraw:
    //
    // 2. Note that when you create multiple child elements via
    //    the map function, each element needs a unique key.
    //    see: https://beta.reactjs.org/learn/rendering-lists
    
    return (
        <div>
            <h2>Child: Products</h2>
            { 
            
            galleries.map((gallery, idx) => {
                return (
                    <div key={idx} className="row">
                        <button
                            onClick={() => setGalleryIdx(idx)}
                        >Select</button>
                         <span>
                            {gallery.name}
                            {idx === galleryIdx ?  " (Selected)" : "" }
                         </span>
                    </div>
                );
            })
            
            }
        </div>
    );
}
