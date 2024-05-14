import { forwardRef } from "react";

const UnControlledCheck = forwardRef(({ name, defaultChecked }, ref) => {
  return <input type="checkbox" {...{name, defaultChecked}} ref={ref} />;
});

export default UnControlledCheck;