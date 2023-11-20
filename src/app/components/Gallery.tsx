"use client"

import { sculptureList } from './data';
import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
    const [index, setIndex] = useState(0);

    function handleClick() {
      setIndex(index + 1);
    }
  
    let sculpture = sculptureList[index];
    return (
      <>
        <button onClick={handleClick}>
          Next
        </button>
        <h2>
          <i>{sculpture.name} </i> 
          by {sculpture.artist}
        </h2>
        <h3>  
          ({index + 1} of {sculptureList.length})
        </h3>
        <Image 
          src={sculpture.url} 
          alt={sculpture.alt}
          width={100}
          height={100}
        />
        <p>
          {sculpture.description}
        </p>
      </>
    );
}
