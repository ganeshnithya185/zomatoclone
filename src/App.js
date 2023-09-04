import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TextControlsExample from "./component/TextControlsExample";
import TextExample from "./component/TextExample";
import ExampleUsestate from "./component/ExampleUsestate";
import ApiExample from "./component/ApiExample";

function App() {
  return (
    <div className="App">
      <h1 className="heading1">Hello</h1>
      <TextControlsExample />
      <TextExample />
      <ExampleUsestate />
      <ApiExample />
    </div>
  );
}

export default App;
