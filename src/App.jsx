import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import CreateExperiment from "./pages/CreateExperiment";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="flex-grow p-4">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/create-experiment" element={<CreateExperiment />} />
              {/* Add other routes as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
