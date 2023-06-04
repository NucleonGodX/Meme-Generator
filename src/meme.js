import React from "react";

export default function Meme(){
    const [meme, setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/1bij.jpg"
    })
    const[memeImage, setMemeImage]=React.useState([])
    React.useEffect(()=>{
        fetch( "https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setMemeImage(data.data.memes))
    }, [])   

    function getMeme(){
        const randomNo=Math.floor(Math.random()*memeImage.length)
        let vaz=memeImage[randomNo].url
        setMeme(prevState=>(
             {...prevState, randomImage: vaz}
        ))}

    function handleChange(event){
        setMeme(prevState=>{
            return{ ...prevState,
        [event.target.name]:event.target.value}
    })}
    return(<main>
    <div className="inputs">
    <input onChange={handleChange} type="text" placeholder="Top text" name="topText" value={meme.topText}></input>
    <input onChange={handleChange} type="text"placeholder="Bottom text" name="bottomText" value={meme.bottomText}></input>
    </div>
    <div className="btn">
    <button onClick={getMeme} >Get a new meme image</button>
    </div>
    <meme>
    <img className="image1" src={meme.randomImage}/>
    <h2 className="top-text">{meme.topText}</h2>
    <h2 className="bottom-text">{meme.bottomText}</h2>
    </meme>
    </main>
    )
}