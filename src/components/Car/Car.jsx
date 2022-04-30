import { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import carUrl from "../../../assets/car.png";
import "./car.module.scss";

// const modes = ["out-in", "in-out"];

export const Car = () => {
  const [mode, setMode] = useState("out-in");
  const [state, setState] = useState(true);
  return (
    <>
      <div className="main">
        <SwitchTransition mode={mode}>
          <CSSTransition
            key={state}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
            <div className="car-container">
              {/* <Button onClick={() => setState((state) => !state)}>
                {state ? "Hello, world!" : "Goodbye, world!"}
              </Button> */}
              <img src={carUrl} onClick={() => setState((state) => !state)} />
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
};
