import "./App.css";
import DisplayAll from "./components/displayAll";
import Navbar from "./components/common/navbar";
import Header from "./components/common/header";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <DisplayAll />
    </div>
  );
}

export default App;
