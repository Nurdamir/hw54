import React, {useState} from 'react';
import './App.css';
import {BoxesType} from "../types";
import PlaceBoxes from "../components/PlaceBoxes/PlaceBoxes";

// interface BoxesType {
//   hasItem: boolean;
//   clicked: boolean;
// }

const createItems = function () {
  const items: BoxesType[] = [];
  const randNum = Math.floor(Math.random() * 37);
  for (let i = 0; i < 36; i++) {
    const item: BoxesType = {hasItem: false, clicked: false};
    if (i === randNum) {
      item.hasItem = true;
    }
    items.push(item);
  }
  return items;
}


function App() {
  const [items, setItems] = useState(createItems());

  return (
    <div className="App">
      <PlaceBoxes boxes={items}/>
    </div>
  );
}

export default App;
