import React from "react";
import styles from "./button.css";


// useEffect

function Button(props) {
  // React.useState() -> [ stateVar, setterStateVar ]
  const [colorState, setColorState] = React.useState("grey");

  let styleButton = {
    padding: props.padding,
    backgroundColor: colorState,
  };

  return (
    <button onClick={props.onClick} style={styleButton} className={styles.btn}>
      {props.children}
    </button>
  );
}

export default Button