import { Sample } from "./Sample";

function SampleList(props) {
  const { samples = [] } = props;

  return (
    <div className="samples">
      {samples.length ? (
        samples.map((sample) => (
          <Sample key={samples.indexOf(sample)} {...sample} />
        ))
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}

export { SampleList };
