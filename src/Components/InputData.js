import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Data from "./Data";
import db from "./firebase";
import firebase from "firebase";

function InputData() {
  const [data, setData] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputHours, setInputHours] = useState("");
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

  //start aplikacji - grab juzistniejace eventy

  useEffect(() => {
    db.collection("w-menager").onSnapshot((snapshot) => {
      //   setInputHours(snapshot.docs.map((doc) => doc.data().hours));
      //   console.log(snapshot.docs.map((doc) => doc.data()));
      //   setInputName(snapshot.docs.map((doc) => doc.data().name));
      setData(
        snapshot.docs.map((doc) => doc.data().name + " " + doc.data().hours)
      );
    });
  }, []);

  const addData = (event) => {
    event.preventDefault();
    db.collection("w-menager").add({
      data: CombinedDate,
      name: inputName,
      hours: inputHours,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setData([...data, inputName + " " + inputHours]);
    setInputName("");
    setInputHours("");
  };

  return (
    <div className="InputData">
      <h1>Wprowadz imię, nazwisko oraz godziny pracownika </h1>
      <h2>{TodayDay + "." + TodayMonth + "." + TodayYear}</h2>

      {/* <form>
        <nput
          value={inputName}
          onChange={(event) => setInputName(event.target.value)}
          placeholder="podaj imie pracownika"
        />
        <input
          value={inputHours}
          onChange={(event) => setInputHours(event.target.value)}
          placeholder="podaj liczbe godzin"
        />
        <Button
          disabled={!inputHours || !inputName}
          type="submit"
          onClick={addData}
          variant="contained"
          color="primary"
        >
          Dodaj
        </Button>
      </form> */}
      <form>
        <FormControl>
          <Input
            value={inputName}
            onChange={(event) => setInputName(event.target.value)}
            placeholder="Podaj Imię Pracownika"
          />
          <Input
            value={inputHours}
            onChange={(event) => setInputHours(event.target.value)}
            placeholder="Podaj Liczbę Godzin"
          />
          <Button
            disabled={!inputHours || !inputName}
            type="submit"
            onClick={addData}
            variant="contained"
            color="primary"
          >
            Dodaj
          </Button>
        </FormControl>
      </form>

      <ul>
        {data.map((data) => (
          <Data text={data} />
        ))}
      </ul>
    </div>
  );
}
export default InputData;
