import { useState } from "react";
import "./App.css";
import List from "./Components/List";

function App() {
  const [currentitem, setcurrentitem] = useState("");
  const [userlist, setuserlist] = useState([]);

  function onchangehandler(e) {
    setcurrentitem(e.target.value);
  }

  function updatelist() {
    setuserlist([...userlist, { item: currentitem, key: Date.now() }]);
    setcurrentitem("");
  }

  function deleteitem(id) {
    const newitem = userlist.filter((data) => {
      return data.key != id;
    });
    setuserlist(newitem);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <div className="inputwrapper">
            <input type="text" value={currentitem} onChange={onchangehandler} />
            <button onClick={updatelist}>+</button>
          </div>
          <List itemlist={userlist} deleteitem={deleteitem} />
        </div>
      </header>
    </div>
  );
}

export default App;
