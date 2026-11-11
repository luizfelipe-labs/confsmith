"use client";

import { useState, useEffect } from "react";

const words = [
     "sintaxe",
     "flags",
     "parâmetros",
     "opções",
     "caminhos",
     "atalhos",
];

export default function RotatingWord({className = ""}) {
     const [index, setIndex] = useState(0);

     useEffect(() => {
          const id = setInterval(() => {
               setIndex((i) => (i + 1) % words.length);
          }, 3000);

          return () => clearInterval(id);
     }, []);

     return (
          <span className="inline-block overflow-hidden align-bottom" >
               <span className={`${className} inline-block animate-rise`} key={index}>{words[index]}</span>
          </span>
     )
}
