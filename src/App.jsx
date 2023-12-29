import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function randome_quote_generator(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quotes, setquotes] = useState([]);
  const [quote, setquote] = useState("");
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((jsonres) => {
        setquotes(jsonres);
        setquote(jsonres[0]);
      });
  }, []);

  const randomQuotes = () => {
    setquote(randome_quote_generator(quotes));
  };
  return (
    <>
      <div className="container">
        <button onClick={randomQuotes}>
          <h4>new quotes</h4>
        </button>
        <div className="quote">
          <h3>"{quote?.text}"</h3>
          <h5>{quote?.author}</h5>
        </div>
      </div>
    </>
  );
}

export default App;
