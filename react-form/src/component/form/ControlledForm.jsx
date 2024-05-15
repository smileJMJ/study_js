import { useState } from "react";
import ControlledInput from "../controlled/ControlledInput";
import ControlledCheck from "../controlled/ControlledCheck";
import ControlledRadio from "../controlled/ControlledRadio";

let renderCount = 0;

const ControlledForm = () => {
  renderCount++;
  const [inputValue, setInputValue] = useState("init value");
  const [checkValue, setCheckValue] = useState(true);
  const [radioValue, setRadioValue] = useState("radio1");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("input", inputValue);
    formData.append("check", checkValue);
    formData.append("radio", radioValue);
  };

  return (
    <div className="form-wrap">
      <form onSubmit={handleSubmit}>
        <label>
          <span>input: </span>
          <ControlledInput
            name="input"
            value={inputValue}
            handleChange={(e) => {
              setInputValue(e?.target?.value);
            }}
          />
        </label>
        <label>
          <span>checkbox: </span>
          <ControlledCheck
            name="check"
            checked={checkValue}
            handleChange={(e) => {
              setCheckValue(e?.target?.checked);
            }}
          />
        </label>
        <label>
          <span>radio: </span>
          <ControlledRadio
            name="radio"
            value="radio1"
            checked={radioValue === "radio1"}
            handleChange={(e) => {
              setRadioValue("radio1");
            }}
          />
          <ControlledRadio
            name="radio"
            value="radio2"
            checked={radioValue === "radio2"}
            handleChange={(e) => {
              setRadioValue("radio2");
            }}
          />
          <ControlledRadio
            name="radio"
            value="radio3"
            checked={radioValue === "radio3"}
            handleChange={(e) => {
              setRadioValue("radio3");
            }}
          />
        </label>

        <div className="btn-wrap">
          <input type="submit" value="submit" />
        </div>
      </form>

      <div className="value-wrap">
        <h1>renderCount: {renderCount}</h1>
        <ul>
          <li>input: {inputValue}</li>
          <li>checkbox: {`${checkValue}`}</li>
          <li>radio: {radioValue}</li>
        </ul>
      </div>
    </div>
  );
};

export default ControlledForm;
