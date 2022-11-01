import React, {useState} from 'react';
import './App.css';
import {BoxesType} from "../types";
import PlaceBoxes from "../components/PlaceBoxes/PlaceBoxes";
import ButtonNew from "../components/ButtonNew/ButtonNew";

interface Props {
  tries: number;
  btnClick: React.MouseEventHandler;
}

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
  const [trying, setTrying] = useState(0);

  let tryingCopy = trying;

  const boxWasClick = (index: number) => {

    if (!items[index].clicked) {
      tryingCopy++;
    }
    setTrying(tryingCopy);
    const itemsCopy = [...items];

    itemsCopy[index].clicked = true;
    setItems(itemsCopy)
  }

  const Tries: React.FC<Props> = props => {
    return (
      <div>
        <div>
          Tries: {props.tries}
        </div>
          <ButtonNew clickButton={() => props.btnClick}/>
      </div>
    )
  }

  const btnNewGame = function () {
    setItems(createItems);
    tryingCopy = 0;
    setTrying(tryingCopy);
  }

  return (
    <div className="App">
      <PlaceBoxes boxes={items} click={boxWasClick}/>
      <Tries tries={trying} btnClick={btnNewGame}/>
    </div>
  );
}

export default App;
