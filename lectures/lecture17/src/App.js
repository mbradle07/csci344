import React from "react";
import Carousel from "./Carousel";
import Galleries from "./Galleries";
import { useState } from 'react';


export default function App() {
    const [galleryIdx, setGalleryIdx] = useState(0);

    const galleries = [
        {
            name: "Jewelery",
            endpoint: 'https://fakestoreapi.com/products/category/jewelery'
        }, {
            name: "Electronics",
            endpoint: 'https://fakestoreapi.com/products/category/electronics'

        }, {
            name: "Women's Clothing",
            endpoint: 'https://fakestoreapi.com/products/category/women\'s clothing'
        }, {
            name: "Men's Clothing",
            endpoint: 'https://fakestoreapi.com/products/category/men\'s clothing'
        }
    ]
  return (
    <div>
        <h1>Parent</h1>
        <div className="page-layout">
            <Galleries galleries={galleries} galleryIdx={galleryIdx} setGalleryIdx={setGalleryIdx} />
            <Carousel gallery={galleries[galleryIdx]} />
        </div>
    </div>
  )
}
