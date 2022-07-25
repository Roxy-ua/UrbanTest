import './Sample.css';

const Sample = ({ imageUrl, label, subLabel, description }) => {
  return (
    <div className="card">
      <div className="card-image">{<img src={imageUrl} alt={label} />}</div>
      <div className="card-content">
        <span className="card-title">{label}</span>
        <p>
          <div className="card-subtitle">{subLabel}</div>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Sample;
