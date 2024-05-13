import { useCallback, useRef } from "react";
import UnControlledInput from "../uncontrolled/UnControlledInput";
import UnControlledCheck from "../uncontrolled/UnControlledCheck";
import UnControlledRadio from "../uncontrolled/UnControlledRadio";

const UnControlledForm = () => {
  const formRef = useRef();
  const inputRef = useRef();
  const checkRef = useRef();
  const radioRef = useRef();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  return <div className="form-wrap">
      <form onSubmit={handleSubmit} ref={formRef}>
      <label>
        <span>UnControlledInput: </span>
        <UnControlledInput defaultValue="init value" ref={inputRef} />
      </label>
      <label>
        <span>UnControlledCheck: </span>
        <UnControlledCheck defaultCheck={false} ref={checkRef} />
      </label>
      <label>
        <span>UnControlledRadio: </span>
        <UnControlledRadio defaultCheck={true} name="radio" value="radio1" ref={radioRef} />
        <UnControlledRadio defaultCheck={false} name="radio" value="radio2" ref={radioRef} />
        <UnControlledRadio defaultCheck={false} name="radio" value="radio3" ref={radioRef} />
      </label>

      <div className="btn-wrap">
        <input type="submit" value="submit" />
      </div>
    </form>

    <div className="value-wrap">
      
    </div>
  </div>
};

export default UnControlledForm;