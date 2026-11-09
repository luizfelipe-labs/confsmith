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

export default function RotatingWord() {
     const [index, setIndex] = useState(0);

     useEffect(() => {
          const id = setInterval(() => {
               setIndex((i) => (i + 1) % words.length);
          }, 3000);

          return () => clearInterval(id);
     },[]);
     
     return (
          <span>{words[index]}</span>
     )
}
