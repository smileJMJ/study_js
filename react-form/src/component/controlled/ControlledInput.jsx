const ControlledInput = ({ value, handleChange }) => {
  return <input type="text" value={value} onChange={handleChange} />;
};

export default ControlledInput;