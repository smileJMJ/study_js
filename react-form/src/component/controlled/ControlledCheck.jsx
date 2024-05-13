const ControlledCheck = ({ checked, handleChange }) => {
  return <input type="checkbox" checked={checked} onChange={handleChange} />;
};

export default ControlledCheck;