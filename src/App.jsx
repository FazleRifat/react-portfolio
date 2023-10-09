import "daisyui/dist/full.css";

import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-dark">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"><Navbar></Navbar></div>
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
