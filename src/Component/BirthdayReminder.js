import React, { useState, useEffect } from "react";

// Modules
import Header from "./Header";
import Content from "./Content";
import Button from "./Button";

// Data
import { data } from "../data";

function Birthday() {
  const [celebrants, setCelebrants] = useState(data);
  const [dataLength, setDataLength] = useState(data.length);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/birthday_celebrants")
      .then((res) => res.json())
      .then((res) => setCelebrants(res))
      .catch((err) => console.log(err));
  });

  return (
    <main className="wrapper">
      <Header celebrants_total={dataLength} />
      <Content celebrants={celebrants} />
      <Button setCelebrants={setCelebrants} setData={setDataLength} />
    </main>
  );
}

export default Birthday;
