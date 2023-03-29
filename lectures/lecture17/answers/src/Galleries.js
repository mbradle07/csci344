import React from "react";

export default function Galleries({ galleries, galleryIdx, setGalleryIdx }) {
    console.log('redraw galleries!');
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
