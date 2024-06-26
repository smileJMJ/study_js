import { forwardRef } from "react";

const UnControlledRadio = forwardRef(({ defaultChecked, name, value }, ref) => {
  return <input type="radio" defaultChecked={defaultChecked} {...{name, value, ref}} />;
});

export default UnControlledRadio;