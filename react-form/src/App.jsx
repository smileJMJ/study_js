import UnControlledForm from "./component/form/UnControlledForm";
import ControlledForm from "./component/form/ControlledForm";
import ReactHookForm from "./component/form/ReactHookForm";
import "./App.css";

const App = () => {
  return (
    <div className="content">
      <UnControlledForm />
      <ControlledForm />
      <ReactHookForm />
    </div>
  );
};

export default App;
