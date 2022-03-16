import React , { useState }from 'react';
import './App.scss';
const randomer = require('complete-randomer');


const newQuote = randomer.QUOTES.SINGLE();

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

function App() {

const url = () =>("https://twitter.com/intent/tweet?text="+quote+"&hashtags="+author.replace(/\s/g,''));
const[quote,setQuote]= useState(newQuote.text);
const[author,setAuthor]= useState(newQuote.author);
const[tweet,setTweet]=useState(url)
const handleClick=()=>{
  const newRandom = randomer.QUOTES.SINGLE()
 setQuote(newRandom.text)
 setAuthor(newRandom.author)



 const randomColor = Math.floor(Math.random() * colors.length);
 document.body.style.background =colors[randomColor] ;
 document.getElementsByClassName("quote-author")[0].style.color = colors[randomColor];
 document.getElementsByClassName("quote-text")[0].style.color = colors[randomColor];

}
const tweetButton = ()=>{
  setTweet(url);
}


  return (
    <div className='' id="wrapper">
    <div className='' id="quote-box">
      <div className="quote-text">
      {quote}
      </div>
      <div className="quote-author">-{author}</div>
      <div className="buttons">
      <a onClick={tweetButton} className='button' id="tweet-quote"  href={tweet} target="blank"> <i class="fa fa-twitter"/></a>
      <button className=" button" id="new-quote" onClick={handleClick}>New quote</button>
      </div>
      
    </div>
    
  </div>
  );
}

export default App;
