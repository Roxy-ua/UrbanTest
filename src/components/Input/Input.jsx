import './Input.css';

const Input = ({ onChange, placeholder }) => {
  return (
    <div className="input-field">
      <input
        placeholder={placeholder}
        type="text"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
