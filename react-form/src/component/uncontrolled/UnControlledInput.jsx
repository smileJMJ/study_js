import { forwardRef } from "react";

const UnControlledInput = forwardRef(({ name, defaultValue }, ref) => {
  return <input type="text" {...{name, defaultValue}} ref={ref} />;
});

export default UnControlledInput;