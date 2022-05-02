import { useState, useEffect } from "react";
import { Car } from "../../components/Car";

import styles from "./main.module.scss";
import { ParkingSlot } from "../../components/ParkingSlot";
import { Controls } from "../../components/Controls";

const ROW_LIMIT = 5;

export const Main = ({ slotsCount }) => {
  const [rows, setRows] = useState([]);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    function distributeSlotsToRows() {
      let rowsCount = Math.ceil(slotsCount / 5);
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
  }, [slotsCount]);

  return (
    <>
      {rows.map((row, idx) => (
        <div key={row + idx} className={styles.row}>
          {row.map((slot) => (
            <ParkingSlot key={slot + idx} num={slot} />
          ))}
        </div>
      ))}
      <footer>
        <Car setShowButtons={setShowButtons} />
        <Controls showButtons={showButtons} />
      </footer>
    </>
  );
};
