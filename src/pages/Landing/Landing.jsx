import { useForm } from "react-hook-form";

import styles from "./landing.module.scss";

export const Landing = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => console.log(data);

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
            placeholder="Enter your desired size here (1-20)"
            type="number"
            {...register("parkingSize", {
              required: true,
              maxLength: 2,
              min: 1,
              max: 20,
            })}
          />
          {errors?.parkingSize?.type === "required" && (
            <p>This field is required.</p>
          )}
          {errors?.parkingSize?.type === "maxLength" && (
            <p>This value cannot exceed 2 characters.</p>
          )}
          {errors.parkingSize && (
            <p>
              Available parking slots count should be between 1 and 20
              (including).
            </p>
          )}
          <input type="submit" />
        </form>
      </section>
    </div>
  );
};
