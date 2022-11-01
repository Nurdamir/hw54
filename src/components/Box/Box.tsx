import React from 'react';
import {BoxesType} from "../../types";
import "./Box.css";

interface Props {
  box: BoxesType;
  click: React.MouseEventHandler;
}


const Box: React.FC<Props> = props => {
  const color = ['Box'];
  if (props.box.clicked) {
    color.push('BoxGrey');
  } else {
    color.push('BoxWhite');
  }

      return (
        <div className={color.join(' ')} onClick={props.click}></div>
      );
};

export default Box;