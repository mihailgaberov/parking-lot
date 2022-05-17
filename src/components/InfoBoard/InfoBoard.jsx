import styles from "./info-board.module.scss";

export const InfoBoard = ({ availableSlotsCount }) => {
  return (
    <div className={styles.infoBoard}>
      <h3>Parking Lot Software Inc.</h3>
      <div>
        Available slots: <span>{availableSlotsCount}</span>
      </div>
    </div>
  );
};
