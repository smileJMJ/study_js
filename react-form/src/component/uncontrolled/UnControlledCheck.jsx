const UnControlledCheck = ({ defaultChecked, ref }) => {
  return <input type="checkbox" defaultChecked={defaultChecked} ref={ref} />;
};

export default UnControlledCheck;