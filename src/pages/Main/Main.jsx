import { useState, useEffect } from "react";
import { Car } from "../../components/Car";

import styles from "./main.module.scss";
import { ParkingSlot } from "../../components/ParkingSlot";
import { Controls } from "../../components/Controls";
import ParkingLot from "../../lib/parking-lot";

const ROW_LIMIT = 5;

export const Main = ({ slotsCount }) => {
  const parkingLot = new ParkingLot(slotsCount);
  const [rows, setRows] = useState([]);
  const [showButtons, setShowButtons] = useState(false);

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

      console.log(`Setting rows: ${rows}`);
      setRows(rows);
    }

    distributeSlotsToRows();
  }, [slotsCount, parkingLot.getSize()]);

  const handleAddToParking = (carId) => {
    parkingLot.park(carId);
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
