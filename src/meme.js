import React from "react";
import data from "./data"

export default function Meme(){
    let [memeImage, setMemeImage]=React.useState("")
    function getMemeImage(){
        const memesArray=data
        const randomNo=Math.floor(Math.random()*memesArray.length)
        setMemeImage(memesArray[randomNo].url)
        
    }
    return(<main>
    <div className="inputs">
    <input type="text" placeholder="Top text"></input>
    <input type="text"placeholder="Bottom text"></input>
    </div>
    <div className="btn">
    <button onClick={getMemeImage} >Get a new meme image</button>
    </div>
    <meme>
    <img className="image1" src={memeImage}/>
    </meme>
    </main>
    )
}