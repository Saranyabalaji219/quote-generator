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
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James"
  },
  {
    text: "Hustle in silence and let your success make the noise.",
    author: "Unknown"
  },
  {
    text: "Don’t be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller"
  },
  {
    text: "Hard times don’t create heroes. It is during the hard times when the 'hero' within us is revealed.",
    author: "Bob Riley"
  },
  {
    text: "Opportunities don't happen, you create them.",
    author: "Chris Grosser"
  },
  {
    text: "Do what you can with all you have, wherever you are.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair"
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe"
  },
  {
    text: "Don’t limit your challenges. Challenge your limits.",
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

        <div className="quote" key={quote.text}>
          {quote.text}
        </div>

        <div className="line">

        </div>

        <div className="bottom">
            <div className="author">{quote.author}</div>

            <div className="icons">
           <a 
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`} 
              target="_blank" rel="noopener noreferrer" >
           <img 
            src="https://cdn-icons-png.flaticon.com/256/124/124021.png"  
             alt="Tweet this quote"/> </a>
            <img src="https://img.icons8.com/ios11/512/FFFFFF/refresh.png" onClick={()=>{random()}} alt="" />
            </div>

        </div>

      </div>

     </div>

    </>
  )
}

export default Randomquote