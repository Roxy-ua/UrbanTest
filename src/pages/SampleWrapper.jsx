import { useState, useEffect } from "react";
import SamplesPage from "./SamplesPage";
import Loader from "../components/Loader/Loader";

function SampleWrapper() {
  const [samples, setSamples] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://cdn.urbansdk.com/exampledata/samples.json")
      .then((response) => response.json())
      .then((data) => {
        setSamples(data);
        setLoading(false);
      })
      .catch(() => {
        setErrorMessage("Unable to fetch user list");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (errorMessage) {
    return <h4>{errorMessage}</h4>;
  }

  if (!samples?.length) {
    return <h4>No samples found</h4>;
  }

  return <SamplesPage samples={samples} />;
}

export default SampleWrapper;
