import { useState, useEffect } from "react";

import { ParkingSlot } from "../../components/ParkingSlot";
import styles from "./main.module.scss";

export const Main = ({ slotsCount }) => {
  const [slots, setSlots] = useState([]);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    function generateSlots() {
      const arrWithNumbers = [];
      for (let i = 1; i <= slotsCount; i++) {
        arrWithNumbers.push(i);
      }

      setSlots(arrWithNumbers);
    }

    setRows(new Array(Math.ceil(slotsCount / 5)).fill(null));

    generateSlots();
  }, [slotsCount]);

  console.log("rows: ", rows);

  return (
    <>
      {rows.map((r, idx) => {
        return (
          <div className={styles.row}>
            {slots.map((num) => {
              if (num <= slots.length / rows.length) {
                return <ParkingSlot key={num} num={num} />;
              }
            })}
          </div>
        );
      })}
    </>
  );
};
