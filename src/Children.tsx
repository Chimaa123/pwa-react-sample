import React, { useEffect, useState } from "react";
import { getData } from "./api/user.api";

function Children() {
  const [data, setData] = useState("");
  useEffect(() => {
    const load = async () => {
      const d = await getData();
      console.log("setData", d);
      setData(d);
    };

    load();
  }, []);

  return (
    <div className="App">
      <p>I am children</p>
      {data && <p>My name is {data}</p>}
    </div>
  );
}

export default Children;
