import "./App.css";

import Sidebar from "./components/Sidebar";
import Maindash from "./components/MainDash.jsx";
import Top from "./components/Top.jsx";
import RightSide from "./components/RightSide.jsx";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <Maindash />
        {/* <RightSide /> */}
      </div>
    </div>
  );
}

export default App;
