import React, { useState } from 'react'
import './Randomquote.css'
const Randomquote = () => {
    const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    text: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi"
  },
  {
    text: "If you are working on something exciting, it will keep you motivated.",
    author: "Steve Jobs"
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett"
  },
  {
    text: "The harder you work for something, the greater you'll feel when you achieve it.",
    author: "Unknown"
  },
  {
    text: "Dream bigger. Do bigger.",
    author: "Unknown"
  },
  {
    text: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "Great things never come from comfort zones.",
    author: "Neil Strauss"
  },
  {
    text: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown"
  }
];

    
    const random = () =>{
        const select = quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(select);
    }
    const [quote,setQuote] = useState({text:"Difficulties increase the nearer we get to the goal.",
        author: "Johsnn Wolfgang von Goethe"
    });

  return (
    <>
     <div className="outer">
 
      <div className="container">

        <div className="quote">
            {quote.text}
        </div>

        <div className="line">

        </div>

        <div className="bottom">
            <div className="author">{quote.author}</div>

            <div className="icons">
                <img src="https://cdn-icons-png.flaticon.com/256/124/124021.png"  alt="" />
                <img src="https://img.icons8.com/ios11/512/FFFFFF/refresh.png" onClick={()=>{random()}} alt="" />
            </div>

        </div>

      </div>

     </div>

    </>
  )
}

export default Randomquote