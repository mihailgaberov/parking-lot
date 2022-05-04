import styles from "./parking-slot.module.scss";

export const ParkingSlot = ({ num, isBusy }) => {
  return (
    <div className={`${styles.parkingSlot} ${isBusy ? styles.busy : ""}`}>
      {num}
    </div>
  );
};
