import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { useEffect } from 'react';
import { base_url } from './constants';

function App() {

  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({})

  useEffect(()=>{
    fetch(base_url)
      .then(response => response.json())
      .then(data =>{ 
        setQuotes(data)

        //On first load display a random quote
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex]);
      })
      .catch(error => console.error('Error getting quotes', error))
  }, [])

  const newQuote = () => {
    const index =  Math.floor(Math.random() * (quotes.length - 0) + 0);
    setQuote(quotes[index])
  }

  return (
    <>
      <header>
        <h1>Random Quote Machine</h1>
      </header>
      <section id='quote-box'>
        <h2 id='text'>{quote.quote}</h2>
        <aside>
          <p id='author'>{quote.author}</p>
        </aside>
        <aside>
          <a id='tweet-quote' href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.quote}" - ${quote.author}`)}`} target='_blank'>
            Tweet this quote
          </a>
          <Button id='new-quote' onClick={newQuote}>Next Quote</Button>
        </aside>
      </section>
      <footer>By <span>jdgonzalez</span></footer>
    </>
  )
}

export default App
