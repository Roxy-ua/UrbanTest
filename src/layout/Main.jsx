import React, { useState, useEffect } from "react";
import { SampleList } from "../components/SampleList";
import { Preloader } from "../components/Preloader";
import { Filter } from "../components/Filter";

function Main() {
  const [samples, setSamples] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStr, setFilterStr] = useState("");

  useEffect(() => {
    fetch(`https://cdn.urbansdk.com/exampledata/samples.json`)
      .then((response) => response.json())
      .then((data) => {
        setSamples(data);
        setLoading(false);
      });
  });

  const initFilterStr = (str) => {
    setFilterStr(str);
  };

  const filterItems = (samples) => {
    return samples.filter((item) => {
      return item.subLabel.toLowerCase().includes(filterStr);
    });
  };

  return (
    <main className="container content">
      <Filter initFilterStr={initFilterStr} />
      {loading ? <Preloader /> : <SampleList samples={filterItems(samples)} />}
    </main>
  );
}

export { Main };
