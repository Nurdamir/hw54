import React from 'react';

interface Props {
  clickButton: React.MouseEventHandler;
}

const ButtonNew: React.FC<Props> = (props) => {
  return (
    <div>
      <button onClick={props.clickButton} >Restart</button>
    </div>
  );
};

export default ButtonNew;