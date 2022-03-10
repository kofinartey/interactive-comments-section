import { makeStyles } from "@mui/styles";

export default makeStyles({
  Comment: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  comment__top: {
    display: "flex",
    gridRow: "1/2",
    gridColumn: "1/3",
    alignItems: "center",
    marginBottom: "1rem",
    "& img": {
      width: "2rem",
      height: "2rem",
    },
  },
  username: {
    fontWeight: "700",
    margin: "0 1rem",
    color: "#324152",
  },
  createdAt: {},
  text: {
    gridRow: "2/3",
    gridColumn: "1/3",
    marginBottom: "1rem",
    "& span": {
      fontWeight: "700",
      color: "#5457B6",
    },
  },
  upvote: {},
  action: {
    justifySelf: "flex-end",
    alignSelf: "center",
  },
  replies: {
    paddingLeft: "2rem",
    borderLeft: "2px solid #EAECF1",
  },

  "@media(min-width: 48rem)": {
    Comment: {
      display: "grid",
      gridTemplateRows: "3rem 1fr",
      gridTemplateColumns: " 5rem 1fr",
    },
    comment__top: {
      gridRow: "1/2",
      gridColumn: "2/3",
    },
    text: {
      gridColumn: "2/3",
    },
    upvote: {
      gridColumn: "1/2",
      gridRow: "1/3",
    },
    action: {
      gridColumn: "2/3",
      gridRow: "1/2",
      marginLeft: "auto",
      alignSelf: "center",
    },
    replies: {
      marginLeft: "3rem",
      paddingLeft: "3rem",
      borderLeft: "2px solid #EAECF1",
    },
  },
});
