import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  const ulRef = useRef();

  const scrollHandler = useCallback(() => {
    console.log("scrolling");
  }, []);

  useEffect(() => {
    ulRef.current.addEventListener("scroll", scrollHandler);
  }, []);

  const addItem = () => {
    const lastNumbers = items[items.length - 1];
    setItems([...items, lastNumbers + 1]);
  };

  const removeScrollListener = () => {
    ulRef.current.removeEventListener("scroll", scrollHandler);
  };

  return (
    <div className="App">
      <ul ref={ulRef}>
        {items.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <button onClick={addItem}>ADD ITEM</button>
      <button onClick={removeScrollListener}>REMOVE SCROLL LISTENER</button>
    </div>
  );
}

export default App;
