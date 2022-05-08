import styles from "./controls.module.scss";
import generateNumberPlate from "../../utils/number-plates-generator";

export const Controls = ({ add, getSlots, getAvailable }) => {
  const handleInfo = () => {
    console.log("PARKED CARS: ", getSlots());
    console.log("AVAILABLE SLOTS: ", getAvailable());
  };

  return (
    <div className={styles.controls}>
      <button onClick={() => add(generateNumberPlate())}>PARK!</button>
      <button onClick={handleInfo}>PARKING INFO</button>
    </div>
  );
};
