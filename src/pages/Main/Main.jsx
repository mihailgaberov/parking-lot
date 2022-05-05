import { useState, useEffect } from "react";
import { Car } from "../../components/Car";

import styles from "./main.module.scss";
import { ParkingSlot } from "../../components/ParkingSlot";
import { Controls } from "../../components/Controls";
import ParkingLot from "../../lib/parking-lot";

const ROW_LIMIT = 5;

export const Main = ({ slotsCount }) => {
  const [parkingLot, setParkingLot] = useState(null);
  const [availableSlots, setAvailableSlots] = useState(0);
  const [rows, setRows] = useState([]);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    setParkingLot(new ParkingLot(slotsCount));
  }, [slotsCount]);

  useEffect(() => {
    function distributeSlotsToRows() {
      let rowsCount = Math.ceil(slotsCount / ROW_LIMIT);
      const rows = [];
      let row = [];

      while (slotsCount > 0 && rowsCount > 0) {
        row.push(slotsCount);
        slotsCount--;

        if (slotsCount % ROW_LIMIT === 0) {
          rowsCount--;
          rows.push(row);
          row = [];
        }
      }

      setRows(rows);
    }

    distributeSlotsToRows();
  }, [slotsCount, availableSlots]);

  const handleAddToParking = (carId) => {
    parkingLot.park(carId);
    setAvailableSlots(parkingLot.getAvailable());
  };

  return (
    <>
      {rows.map((row, idx) => (
        <div key={row + idx} className={styles.row}>
          {row.map((slot) => (
            <ParkingSlot key={slot + idx} num={slot} isBusy={false} />
          ))}
        </div>
      ))}
      <footer>
        <Car setShowButtons={setShowButtons} />
        <Controls
          showButtons={showButtons}
          add={handleAddToParking}
          remove={(carId) => parkingLot.remove(carId)}
          getSlots={() => parkingLot.getSlots()}
          getAvailable={() => parkingLot.getAvailable()}
        />
      </footer>
    </>
  );
};
