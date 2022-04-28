import { useForm } from "react-hook-form";

import styles from "./landing.module.scss";

export const Landing = ({ triggerTransition, setParkingSlotsCount }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    const parkingSize = Number(data.parkingSize);
    if (parkingSize && typeof parkingSize === "number") {
      setParkingSlotsCount(parkingSize);
    }
    triggerTransition();
  };

  return (
    <div className={`flex ${styles.landing}`}>
      <section>
        <h1>Welcome to Parking Lot Software Inc.</h1>
      </section>
      <section>
        <header className={styles.title}>
          How many parking slots you need?
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Enter your desired size here (1-25)"
            type="number"
            {...register("parkingSize", {
              required: true,
              maxLength: 2,
              min: 1,
              max: 25,
            })}
          />

          {errors.parkingSize && (
            <p>Parking slots count should be between 1 and 20 (including).</p>
          )}
          <input type="submit" />
        </form>
      </section>
    </div>
  );
};
