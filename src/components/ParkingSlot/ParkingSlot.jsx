import styles from "./parking-slot.module.scss";

export const ParkingSlot = ({ num }) => {
  return <div className={styles.parkingSlot}>{num}</div>;
};
