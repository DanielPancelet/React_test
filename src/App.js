import {ComponentA} from "./components/ComponentA";
import {ComponentB} from "./components/ComponentB";
import Bugsnag from "@bugsnag/js";

// Инициализация Bugsnag с плагином React
Bugsnag.start({ apiKey: "" });
function App() {
  return (
      <>
      <h1>Testing system</h1>
          <ComponentA/>
          <ComponentB/>
    </>
  );
}

export default App;
