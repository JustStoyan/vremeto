import "./App.css";
import { DetailedView } from "./components/DetailedView";
import { QuickView } from "./components/QuickView";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <QuickView />
        <DetailedView />
      </div>
    </div>
  );
}

export default App;
