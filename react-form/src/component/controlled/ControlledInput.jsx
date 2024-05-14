const ControlledInput = ({ name, value, handleChange }) => {
  return <input type="text" {...{name, value}} onChange={handleChange} />;
};

export default ControlledInput;