const Filter = (props) => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field">
          <input
            className="validate"
            placeholder="Filter"
            type="filter"
            onChange={(e) => props.initFilterStr(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export { Filter };
