import { useState } from "react";
import "./App.css";

function App() {
  const [currentitem, setcurrentitem] = useState("");
  const [userlist, setuserlist] = useState([]);
  function onchangehandler(e) {
    setcurrentitem(e.target.value);
  }
  function updatelist() {
    setuserlist([...userlist, { item: currentitem, key: Date.now() }]);
    setcurrentitem("");
    console.log(userlist);
  }
  console.log("render");
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <div className="inputwrapper">
            <input type="text" value={currentitem} onChange={onchangehandler} />
            <button onClick={updatelist}>+</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
