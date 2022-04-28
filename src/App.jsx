import React, { useState, useCallback, useEffect } from "react";
import { useTransition, animated, useSpringRef } from "@react-spring/web";

import styles from "./styles.module.scss";
import { Landing } from "./pages/Landing";
import { Main } from "./pages/Main/Main";

const pages = [
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightgreen" }}>
      <Landing />
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightgray" }}>
      <Main />
    </animated.div>
  ),
];

export default function App() {
  const [index, set] = useState(0);
  const onClick = useCallback(() => set((state) => (state + 1) % 2), []);
  const transRef = useSpringRef();
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  useEffect(() => {
    transRef.start();
  }, [index]);

  return (
    <div className={`flex fill ${styles.container}`}>
      {transitions((style, i) => {
        const Page = pages[i];
        return <Page style={style} />;
      })}
    </div>
  );
}
