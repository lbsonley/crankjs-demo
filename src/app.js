/** @jsx createElement */
import { createElement } from "@bikeshaving/crank";
import Stateful from "./Components/stateful";

const App = () => {
  return (
    <div>
      <h1>Title</h1>
      <Stateful />
    </div>
  );
};

export default App;
