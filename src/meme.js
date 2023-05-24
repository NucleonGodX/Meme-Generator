import React from "react";
import data from "./data"
export default function Meme(){
    function random(){
        const randomIndex = Math.floor(Math.random() * data.length)
        const item=data[randomIndex]
       console.log(item.url)
    }
    return(<main>
    <div className="inputs">
    <input type="text" placeholder="Top text"></input>
    <input type="text"placeholder="Bottom text"></input>
    </div>
    <div className="btn">
    <button onClick={random}>Get a new meme image</button>
    </div>
    </main>
    )
}