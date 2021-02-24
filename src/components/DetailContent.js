import { makeStyles } from "@material-ui/core";
import React from "react";
import Moment from "react-moment";
import { Typography } from "@material-ui/core";
import firebase from "../db/firebase";
const style = makeStyles({
  Divider: {
    marginTop: "8px",
    marginBottom: "8px",
    width: "100%",
    height: "1px",
    backgroundColor: "#7e7e7e",
  },
});
export default function DetailContent(props) {
  const { content } = props;
  
  return (
    <div>
      <Typography variant="h6">{content.title}</Typography>
      <div
        style={{
          marginTop: "8px",
          marginBottom: "8px",
          width: "100%",
          height: "1px",
          backgroundColor: "grey",
        }}
      />
      <Typography variant="subtitle1" color="textSecondary">
        {<Moment format="MM.D , YYYY">{content.date}</Moment>}
      </Typography>
      <div
        style={{
          marginTop: "8px",
          marginBottom: "8px",
          width: "100%",
          height: "5px",
          backgroundColor: "grey",
        }}
      />
      <Typography variant="p">{content.description}</Typography>
    </div>
  );
}
