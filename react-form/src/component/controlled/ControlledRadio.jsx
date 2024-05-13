const ControlledRadio = ({ checked, name, value, handleChange }) => {
  return <input type="radio" {...{checked, name, value}} onChange={handleChange} />;
};

export default ControlledRadio;