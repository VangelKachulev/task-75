import { useState } from "react";
import "./App.css";



function App() {

  let [text, setText] = useState();

  let textHandler = (e) => {
    setText(e.target.value);
  }

  let saveText = e => {
    e.preventDefault();
    localStorage.setItem(text, text);
    setText('');
    console.log(localStorage);
  }
  

  return (
    <div className="App">
      <textarea
        value={text}
        onChange={textHandler}
        >

      </textarea>
      <button onClick={saveText}>Save</button>
    </div>
  );
}

export default App;
