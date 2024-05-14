import { useState, useRef } from "react";
import UnControlledInput from "../uncontrolled/UnControlledInput";
import UnControlledCheck from "../uncontrolled/UnControlledCheck";
import UnControlledRadio from "../uncontrolled/UnControlledRadio";

const UnControlledForm = () => {
  const [formData, setFormData] = useState([]);
  const formRef = useRef();
  const inputRef = useRef();
  const checkRef = useRef();
  const radioRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = new FormData(formRef?.current);
    let arr = [];
    for(let value of data?.entries()) {
      arr.push(value); // Q. 왜 FormData로 가져올 때 체크박스는 checked: true일 때 on / checked: false일 때 데이터 없음으로 뜨는지??
    }
    setFormData(arr);
  };

  return <div className="form-wrap">
      <form onSubmit={handleSubmit} ref={formRef}>
      <label>
        {/** UnControlled Component 에서 ref 값을 주입 및 외부에서 제어하는 것은 비추!!! */}
        <span>UnControlledInput: </span>
        <UnControlledInput name="input" defaultValue="init value" ref={inputRef} />
      </label>
      <label>
        <span>UnControlledCheck: </span>
        <UnControlledCheck name="checkbox" defaultChecked={true} ref={checkRef} />
      </label>
      <label>
        {/* Radio Group의 value를 갖고오고 싶을 때(외부에서 제어하고 싶을 때) - Controlled Component 방법이 더 적합함 */}
        <span>UnControlledRadio: </span>
        <UnControlledRadio defaultChecked={true} name="radio" value="radio1" ref={radioRef} />
        <UnControlledRadio defaultChecked={false} name="radio" value="radio2" ref={radioRef} />
        <UnControlledRadio defaultChecked={false} name="radio" value="radio3" ref={radioRef} />
      </label>

      <div className="btn-wrap">
        <input type="submit" value="submit" />
      </div>
    </form>

    <div className="value-wrap">
      <ul>
        {
          formData?.map(v => <li key={v[1]}>{v[0]}: {v[1]}</li>)
        }
      </ul>
    </div>
  </div>
};

export default UnControlledForm;