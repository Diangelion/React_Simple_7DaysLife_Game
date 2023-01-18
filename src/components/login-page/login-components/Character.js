import Male from "../../../assets/character/Male.png";
import Female from "../../../assets/character/Female.png";
import { useState } from "react";

const Character = ({ isMale, setIsMale }) => {
  const changeGender = () => {
    if (isMale === true) setIsMale(false);
    else setIsMale(true);
  };

  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <h5>Choose Your Character</h5>
        </div>
        <div className="row">
          <div className="col d-flex align-items-center">
            <i className="arrow left" onClick={changeGender}></i>
          </div>
          <div className="col d-flex align-items-center">
            <img src={isMale ? Male : Female} />
          </div>
          <div className="col d-flex align-items-center">
            <i className="arrow right" onClick={changeGender}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
