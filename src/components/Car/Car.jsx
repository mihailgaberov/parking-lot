import { useEffect, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import carUrl from "../../../assets/car.png";
import "./car.css";

export const Car = ({ setShowButtons, animationState }) => {
  // const [showCar, setShowCar] = useState(false);

  // useEffect(() => {
  //   setInterval(() => setShowCar((state) => true), 3000);
  // }, []);

  return (
    <div className="car-container">
      <CSSTransition
        in={animationState}
        timeout={300}
        unmountOnExit
        // onEnter={() => setShowButtons(true)}
        // onExited={() => setShowButtons(false)}
        classNames="fade"
      >
        <div className="button-container">
          <img className="car" src={carUrl} alt="Car" />
        </div>
      </CSSTransition>
    </div>
  );
};
