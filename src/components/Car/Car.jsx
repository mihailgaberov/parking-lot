import { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import carUrl from "../../../assets/car.png";
import styles from "./car.module.scss";


export const Car = () => {
  const [state, setState] = useState(true);
  return (
    <>
      <SwitchTransition mode={"out-in"}>
        <CSSTransition
          key={state}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames={styles.fade}
        >
          <div className={styles.carContainer}>
            <img src={carUrl} alt='Car' onClick={() => setState((state) => !state)} />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};
