"use client"

import { sculptureList } from '../data';
import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
    const [index, setIndex] = useState(0);

    function handleClickNext():void {
      try{
        if(index === sculptureList.length-1) throw Error;
      }
      catch(error){
        console.log("Erro: esse é o limite da página");
        return;
      }
      setIndex(index + 1);
    }

    function handleClickBack(): void{
      try{
        if(index === 0) throw Error;
      }
      catch(error){
        console.log("Erro: esse é o limite da página");
        return;
      }
      setIndex(index - 1);
    }
  
    let sculpture = sculptureList[index];
    return (
      <>
        <button type='button' onClick={handleClickBack}>
          Back
        </button>
        <button type='button' onClick={handleClickNext}>
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
          src= {sculpture.url}
          alt={sculpture.alt}
          width={600}
          height={300}
        />
        <p>
          {sculpture.description}
        </p>
      </>
    );
}
