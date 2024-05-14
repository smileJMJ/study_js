const ControlledCheck = ({ name, checked, handleChange }) => {
  return <input type="checkbox" {...{name, checked}} onChange={handleChange} />;
};

export default ControlledCheck;