import styles from "./parking-slot.module.scss";

export const ParkingSlot = ({ num, isBusy, numberPlate, remove }) => {
  return (
    <div
      className={`${styles.parkingSlot} ${isBusy ? styles.busy : ""}`}
      onClick={() => remove(numberPlate)}
    >
      {isBusy ? numberPlate : num}
    </div>
  );
};
