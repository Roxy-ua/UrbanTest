import Sample from '../Sample/Sample';
import './SampleList.css';

const SampleList = ({ samples }) => {
  return (
    <div className="samples-grid">
      {samples.map(({ id, subLabel, label, description, imageUrl }, index) => (
        <Sample
          key={`${id}-${index}`}
          subLabel={subLabel}
          label={label}
          description={description}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  );
};

export default SampleList;
