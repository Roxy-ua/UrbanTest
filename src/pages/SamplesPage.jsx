import React, { useState, useMemo } from "react";
import SampleList from "../components/SampleList/SampleList";
import Input from "../components/Input/Input";

function SamplesPage({ samples }) {
  const [filterString, setFilterString] = useState("");

  const filteredSamples = useMemo(() => {
    return samples.filter((item) =>
      item.subLabel.toLowerCase().includes(filterString)
    );
  }, [samples, filterString]);

  return (
    <div>
      <Input onChange={setFilterString} placeholder="Filter by subLabel" />
      <SampleList samples={filteredSamples} />
    </div>
  );
}

export default SamplesPage;
