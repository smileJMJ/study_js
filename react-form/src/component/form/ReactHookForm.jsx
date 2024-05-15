import { useState } from "react";
import { useForm } from "react-hook-form";

let renderCount = 0;

const ReactHookForm = () => {
  renderCount++;
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "init value",
      category: "",
      aboutYou: "init value",
    },
  });
  const [formData, setFormData] = useState();

  const onSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="form-wrap">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Input: </span>
          <input {...register("firstName")} placeholder="First name" />
        </label>
        <label>
          <span>Select: </span>
          <select {...register("category", { required: true })}>
            <option value="">Select...</option>
            <option value="A">Option A</option>
            <option value="B">Option B</option>
          </select>
        </label>
        <label>
          <span>Textarea: </span>
          <textarea {...register("aboutYou")} placeholder="About you" />
        </label>
        <input type="submit" />
      </form>
      <div className="value-wrap">
        <h1>renderCount: {renderCount}</h1>
        <ul>
          <li>firstName: {formData?.firstName}</li>
          <li>category: {formData?.category}</li>
          <li>aboutYou: {formData?.aboutYou}</li>
        </ul>
      </div>
    </div>
  );
};

export default ReactHookForm;
