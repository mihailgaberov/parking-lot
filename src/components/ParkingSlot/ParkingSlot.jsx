import styles from "./parking-slot.module.scss";

export const ParkingSlot = ({ num, isBusy, numberPlate }) => {
  return (
    <div className={`${styles.parkingSlot} ${isBusy ? styles.busy : ""}`}>
      {isBusy ? numberPlate : num}
    </div>
  );
};
