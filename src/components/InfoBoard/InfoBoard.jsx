import styles from "./info-board.module.scss";

export const InfoBoard = ({ availableSlotsCount, parkedCars }) => {
  console.log(">>> available slots: ", availableSlotsCount);
  console.log(">>> parked cars: ", parkedCars);

  return (
    <div className={styles.infoBoard}>
      <h3>Parking Info</h3>
      <div>
        Available slots: <span>{availableSlotsCount}</span>
      </div>
      {availableSlotsCount > 0 && (
        <div>
          Parked Cars: <span>{parkedCars.filter(Boolean).join(",")}</span>
        </div>
      )}
    </div>
  );
};
