import { CSSTransition } from "react-transition-group";
import carUrl from "../../../assets/car.png";
import "./car.css";

export const Car = ({ animationState }) => {
  return (
    <div className="car-container">
      <CSSTransition
        unmountOnExit
        in={animationState}
        timeout={300}
        classNames="fade"
      >
        <div className="button-container">
          <img className="car" src={carUrl} alt="Car" />
        </div>
      </CSSTransition>
    </div>
  );
};
