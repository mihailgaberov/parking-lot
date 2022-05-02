import styles from "./controls.module.scss";

export const Controls = ({ showButtons }) => {
  return (
    <>
      {showButtons && (
        <div className={styles.controls}>
          <button>PARK!</button>
          <button>REMOVE</button>
          <button>FREE SLOTS</button>
        </div>
      )}
    </>
  );
};
