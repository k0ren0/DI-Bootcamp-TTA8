import React, { useState, useEffect } from 'react';
import quotes from './QuotesDatabase';

const RandomQuote = () => {
  const [quote, setQuote] = useState({});
  const [color, setColor] = useState('#FFFFFF');
  const [fadeIn, setFadeIn] = useState(false);

  const getRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const getRandomColor = () => {
    let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    if (randomColor === color) {
      return getRandomColor();
    }
    return randomColor;
  };

  const handleNewQuote = () => {
    getRandomQuote();
    const newColor = getRandomColor();
    setColor(newColor);
    document.body.style.backgroundColor = newColor;
    setFadeIn(false);
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  };

  useEffect(() => {
    handleNewQuote();
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card p-2" style={{ width: '40rem', backgroundColor: '#FFFFFF', borderRadius: '15px' }}>
        <div className="card-body">
          <div className={fadeIn ? 'quote-container fadeInSlideDown' : 'quote-container'}>
            <div className="text-left">
              <h1 style={{ color: color }}>&ldquo;{quote.quote}&rdquo;</h1>
            </div>
            <div className="d-flex flex-column align-items-end" style={{ width: '100%' }}>
              <h6 className="mt-4" style={{ color: color, marginBottom: 0 }}>
                <i>- {quote.author ? quote.author : "Unknown"} -</i>
              </h6>
            </div>
          </div>
          <div style={{ width: '100%', marginTop: '20px', marginBottom: '20px' }}>
            <button
              className="btn fadeInSlideDown"
              onClick={handleNewQuote}
              style={{ backgroundColor: color, color: '#FFFFFF', float: 'right' }}
            >
              Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
