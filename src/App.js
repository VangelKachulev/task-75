import { useState } from "react";
import "./App.css";



function App() {
  const [text , setText] = useState(JSON.parse(localStorage.getItem('dataText')));
 

  let textHandler = (e) => {
    setText(e.target.value);
  }

  let saveText = () => {
   
    localStorage.setItem('dataText', JSON.stringify(text));
   
  }
  
  
  return (
    <div className="App">
      <textarea
        value={text}
        onChange={textHandler}
        >

      </textarea>
      <button className="button is-large is-primary is-active"
        onClick={saveText}>
          Save
        </button>
        <button 
        className="button is-large"
        onClick={(e) =>{setText("")}}
        >Clear
        </button>
    </div>
  );
}

export default App;
