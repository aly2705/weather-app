import useInit from "./hooks/useInit";
//import { useContext } from "react";
//import CurrentContext from "./store/current-context";

function App() {
  useInit();
  //const currentContext = useContext(CurrentContext);
  //const { initialData } = useInit();

  return <div className="App"></div>;
}

export default App;
