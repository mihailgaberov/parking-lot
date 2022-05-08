import styles from "./controls.module.scss";
import generateNumberPlate from "../../utils/number-plates-generator";

export const Controls = ({ add, getInfo }) => {
  return (
    <div className={styles.controls}>
      <button onClick={() => add(generateNumberPlate())}>PARK!</button>
      <button onClick={getInfo}>PARKING INFO</button>
    </div>
  );
};
