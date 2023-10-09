import "daisyui/dist/full.css";

import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-dark">
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
