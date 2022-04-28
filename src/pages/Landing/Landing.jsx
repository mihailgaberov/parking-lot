import { useForm } from "react-hook-form";

import styles from "./landing.module.css";

export const Landing = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
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
            {...register("parkingSize", { maxLength: 2, min: 18, max: 99 })}
          />
          <input type="submit" />
        </form>
      </section>
    </>
  );
};
