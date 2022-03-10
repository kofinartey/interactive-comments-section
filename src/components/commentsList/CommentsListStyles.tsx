import { makeStyles } from "@mui/styles";

export default makeStyles({
  CommentsList: {
    // margin: "4rem 0",
    display: "flex",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  wrapper: {
    width: "90%",
    maxWidth: "46rem",
  },

  addComment: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    "& textarea": {
      gridColumn: "1/3",
      marginBottom: "1rem",
    },
    "& img": {
      width: "2rem",
    },
    "& button": {
      justifySelf: "flex-end",
    },
  },

  "@media(min-width: 48rem)": {
    addComment: {
      gridTemplateColumns: "3rem 1fr 6rem",
      gridTemplateRows: "1fr",
      "& img": {
        width: "2.5rem",
        gridColumn: "1/2",
        gridRow: "1/2",
      },
      "& textarea": {
        gridColumn: "2/3",
      },
      "& button": {
        alignSelf: "flex-start",
      },
    },
  },
});