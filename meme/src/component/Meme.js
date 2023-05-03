import React from "react"
import memeData from "../memeData.js"


export default function Meme() {
    const [meme, setMeme] = React.useState({
     topText: "",
     bottomText: "",
     randomImage: "http://i.imgflip.com/1bij.jpg"
})

const [allMemeImages, setAllMemeImages] = React.useState(memeData)
    

   function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage:url
    }))
   }

    return(
        <main>
            <div className="form">
                <input 
                type="text"
                placeholder="Top text"
                className="form--input"
                />
                <input 
                type="text"
                placeholder="Button text"
                className="form--input"
                />
                <button className="form--button"
                   onClick={getMemeImage}
                >
                    Get a new meme image 🚃
                    </button>
            </div>
            <img src={meme.randomImage} className="meme--image"/>
        </main>
    )
}