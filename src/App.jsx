import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import CreateExperiment from "./pages/CreateExperiment";
import DataUpload from "./pages/DataUpload";
import DataProcessing from "./pages/DataProcessing";
import ManageDatasets from "./pages/ManageDatasets";
import UserProfile from "./pages/UserProfile";
import ResultsPage from "./pages/ResultsPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FineTuneModel from "./pages/FineTuneModel";
import HelpAndSupport from "./pages/HelpAndSupport";
import ModelSelection from "./pages/ModelSelection";
import Dashboard from "./pages/Dashboard";
const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <div className="container mx-auto px-6 py-8">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                  path="/create-experiment"
                  element={<CreateExperiment />}
                />
                <Route path="/data-upload" element={<DataUpload />} />
                <Route path="/data-processing" element={<DataProcessing />} />
                <Route path="/manage-datasets" element={<ManageDatasets />} />
                <Route path="/model-selection" element={<ModelSelection />} />
                <Route path="/results" element={<ResultsPage />} />

                <Route path="/profile" element={<UserProfile />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/fine-tune-model" element={<FineTuneModel />} />
                <Route path="/help-and-support" element={<HelpAndSupport />} />
                <Route path="dashboard" element={<Dashboard />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
