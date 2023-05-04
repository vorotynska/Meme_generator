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

   function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
   }

    return(
        <main>
            <div className="form">
                <input 
                type="text"
                placeholder="Top text"
                className="form--input"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />
                <input 
                type="text"
                placeholder="Button text"
                className="form--input"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />
                <button className="form--button"
                   onClick={getMemeImage}
                >
                    Get a new meme image 🚃
                    </button>
            </div>
            <div className="meme">
            <img src={meme.randomImage} className="meme--image"/>
           <h2 className="meme--text top">{meme.topText}</h2>
           <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}