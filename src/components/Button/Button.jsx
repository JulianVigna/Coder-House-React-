import React from "react";
import styles from "./button.css";



function Button(props) {

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