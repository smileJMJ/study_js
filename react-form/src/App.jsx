import UnControlledForm from "./component/form/UnControlledForm";
import ControlledForm from "./component/form/ControlledForm";
import "./App.css";

const App = () => {
  return <div className="content">
    <UnControlledForm />
    <ControlledForm />
  </div>;
};

export default App;