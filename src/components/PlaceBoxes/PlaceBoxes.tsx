import React from 'react';
import {BoxesType} from "../../types";
import Box from "../Box/Box";
import './PlaceBoxes.css'

interface Props {
  boxes: BoxesType[];
  click:  (index: number) => void;
}

const PlaceBoxes:React.FC<Props> = props => {


  return (
    <div className={'Boxes'}>
      {props.boxes.map((item, index) => <Box key={index} click={() => props.click(index)} box={item}/> )}
    </div>
  );
};

export default PlaceBoxes;