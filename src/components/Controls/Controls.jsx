import styles from "./controls.module.scss";
import generateNumberPlate from "../../utils/number-plates-generator";

export const Controls = ({ add }) => {
  return (
    <div className={styles.controls}>
      <button onClick={() => add(generateNumberPlate())}>PARK!</button>
    </div>
  );
};
