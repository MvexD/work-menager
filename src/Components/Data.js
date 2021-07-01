import React from "react";
import "./Data.css";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@material-ui/core";

let TodayDay = new Date().getDate();
if (TodayDay < 9) {
  TodayDay = "0" + TodayDay;
}
let TodayMonth = new Date().getMonth() + 1;
if (TodayMonth < 9) {
  TodayMonth = "0" + TodayMonth;
}
let TodayYear = new Date().getFullYear();
let CombinedDate = TodayDay + "." + TodayMonth + "." + TodayYear;

function Data(props) {
  return (
    <List className="Data_list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.text} secondary={CombinedDate} />
      </ListItem>
    </List>
  );
}

export default Data;
