import React from "react";
import { makeStyles } from "@mui/styles";

type TextAreaProps = {};

function TextArea({}: TextAreaProps) {
  const classes = makeStyles({
    textarea: {
      borderRadius: "0.5rem",
      border: "2px solid  #EAECF1",
      height: "5rem",
      width: "100%",
      padding: "0.5rem 1rem",
      fontFamily: '"Rubik", sans-serif',
      color: "#67727E",
      "&:focus": {
        border: "2px solid #67727E",
        outline: "none",
      },
    },
  })();
  return <textarea className={classes.textarea} name=""></textarea>;
}

export default TextArea;
