import logo from "../logo.svg";
import "../App.css";
import Home from "./Home";

function App() {
  const student = {
    firstName: "Elvis",
    age: 19,
  };
  return <Home studentDetails={student} />;
}

export default App;
