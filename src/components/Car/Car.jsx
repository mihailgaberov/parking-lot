import { useEffect, useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import carUrl from "../../../assets/car.png";
import "./car.css";

export const Car = ({ setShowButtons }) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    setInterval(() => setState((state) => !state), 5000);
  }, []);

  return (
    <div className="car-container">
      <CSSTransition
        in={state}
        timeout={300}
        unmountOnExit
        onEnter={() => setShowButtons(true)}
        onExited={() => setShowButtons(false)}
        classNames="fade"
      >
        <div className="button-container">
          <img
            className="car"
            src={carUrl}
            alt="Car"
            onClick={() => setState((state) => !state)}
          />
        </div>
      </CSSTransition>
    </div>
  );
};
