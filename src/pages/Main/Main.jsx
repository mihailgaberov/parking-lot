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
  const [carAnimation, setCarAnimation] = useState(true);

  useEffect(() => {
    setParkingLot(new ParkingLot(slotsCount));
  }, [slotsCount]);

  useEffect(() => {
    function distributeSlotsToRows() {
      let rowsCount = Math.ceil(slotsCount / ROW_LIMIT);
      const rows = [];
      let row = [];

      while (slotsCount > 0 && rowsCount > 0) {
        // It's important first to decrement the count of the slots otherwise we will miss one
        slotsCount--;

        const slot = parkingLot?.slots[slotsCount];
        const isSlotTaken = slot !== null && slot !== undefined;
        row.push({
          slotNum: slotsCount,
          isBusy: isSlotTaken,
          numberPlate: slot,
        });

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
    setCarAnimation((state) => !state);
  };

  const handleRemoveFromParking = (carId) => {
    parkingLot.remove(carId);
    setAvailableSlots(parkingLot.getAvailable());
    setCarAnimation((state) => !state);
  };

  return (
    <>
      {rows.map((row, idx) => (
        <div key={row + idx} className={styles.row}>
          {row.map(({ slotNum, isBusy, numberPlate }) => (
            <ParkingSlot
              remove={handleRemoveFromParking}
              key={slotNum + idx}
              num={slotNum}
              isBusy={isBusy}
              numberPlate={numberPlate}
            />
          ))}
        </div>
      ))}
      <footer>
        <Controls
          add={handleAddToParking}
          getSlots={() => parkingLot.getSlots()}
          getAvailable={() => parkingLot.getAvailable()}
        />
        <Car setShowButtons={setShowButtons} animationState={carAnimation} />
        <div className={styles.footerNote}>
          Click on a busy parking slot to remove the car.
        </div>
      </footer>
    </>
  );
};
