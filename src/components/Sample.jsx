function Sample(props) {
  return (
    <div id={props.id} className="card">
      <div className="card-image waves-effect waves-block waves-light">
        {<img className="activator" src={props.imageUrl} />}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {props.label}
        </span>
        <p>
          {props.subLabel} <span className="right">{props.description}</span>
        </p>
      </div>
    </div>
  );
}

export { Sample };
