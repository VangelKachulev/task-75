import { useState } from "react";
import "./App.css";



function App() {

  let [text, setText] = useState();

  let textHandler = (e) => {
    setText(e.target.value);
  }

  let saveText = e => {
    e.preventDefault();
    localStorage.setItem('myText',text);
    setText('');

  }
  // let getDateFromLocalStorage = e => {
  //   let savedText = JSON.parse(localStorage.getItem('myText'));
  //   setText(localStorage.getItem('myText'));
  //   setText(savedText);
  // }
  console.log(localStorage);
  return (
    <div className="App">
      <textarea
        value={text}
        onChange={textHandler}
      >

      </textarea>
      <button className="is-primary" onClick={saveText}>Save</button>
    </div>
  );
}

export default App;
