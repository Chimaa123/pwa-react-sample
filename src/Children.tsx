import React, { useEffect, useState } from "react";
import { getData } from "./api/user.api";

function Children() {
  const [data, setData] = useState("");

  const handleLoad = async () => {
    getData().then((d) => {
      console.log("setData", d);
      setData(d);
    });
  };

  return (
    <div className="children">
      <p>I am children</p>
      <button className={"btn"} onClick={handleLoad}>
        load data
      </button>
      {data && <p className={"name"}>My name is {data}</p>}
    </div>
  );
}

export default Children;
