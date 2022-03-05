import React from "react";
import { makeStyles } from "@mui/styles";

type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  const classes = makeStyles({
    card: {
      backgroundColor: "white",
      padding: "1rem",
      borderRadius: "1rem",
    },
  })();
  return <div className={classes.card}>{children}</div>;
}

export default Card;
