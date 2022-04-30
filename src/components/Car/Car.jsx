import { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import carUrl from "../../../assets/car.png";
import styles from "./car.module.scss";

// const modes = ["out-in", "in-out"];

export const Car = () => {
  const [mode, setMode] = useState("out-in");
  const [state, setState] = useState(true);
  return (
    <>
      <SwitchTransition mode={mode}>
        <CSSTransition
          key={state}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames={styles.fade}
        >
          <div className={styles.carContainer}>
            <img src={carUrl} onClick={() => setState((state) => !state)} />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};
