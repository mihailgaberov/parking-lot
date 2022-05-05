import styles from "./controls.module.scss";
import generateNumberPlate from "../../utils/number-plates-generator";

export const Controls = ({
  showButtons,
  add,
  remove,
  getSlots,
  getAvailable,
}) => {
  return (
    <>
      {showButtons && (
        <div className={styles.controls}>
          <button onClick={() => add(generateNumberPlate())}>PARK!</button>
          <button onClick={() => remove(1)}>REMOVE</button>
          <button onClick={getSlots}>WHO IS PARKED</button>
          <button onClick={getAvailable}>GET AVAILABLE</button>
        </div>
      )}
    </>
  );
};
