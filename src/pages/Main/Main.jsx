import { useState, useEffect } from "react";

import { ParkingSlot } from "../../components/ParkingSlot";
import styles from "./main.module.scss";

export const Main = ({ slotsCount }) => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    function generateSlots() {
      const arrWithNumbers = [];
      for (let i = 1; i <= slotsCount; i++) {
        arrWithNumbers.push(i);
      }

      setSlots(arrWithNumbers);
    }

    generateSlots();
  }, [slotsCount]);

  return (
    <div className={styles.slotsRow}>
      {slots.map((num) => {
        return <ParkingSlot key={num} num={num} />;
      })}
    </div>
  );
};
