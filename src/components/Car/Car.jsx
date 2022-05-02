import { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import carUrl from "../../../assets/car.png";
import "./car.css";

export const Car = () => {
  const [state, setState] = useState(true);

  return (
      <div className="car-container">
        <SwitchTransition mode={"out-in"}>
        <CSSTransition
              key={state}
              addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
              }}
              classNames="fade"
          >
            <div className="button-container">
              <img className='car' src={carUrl} alt='Car' onClick={() => setState((state) => !state)} />
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
  );
};
