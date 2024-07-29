import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const sidebarClasses = isOpen
    ? "translate-x-0 ease-out"
    : "-translate-x-full ease-in";

  return (
    <div
      className={`fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 ${sidebarClasses}`}
    >
      <div className="flex items-center justify-between p-4 lg:hidden">
        <span className="text-white text-2xl font-semibold">Dashboard</span>
        <button
          onClick={toggleSidebar}
          className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
        >
          <FaTimes className="h-6 w-6" />
        </button>
      </div>

      <div className="hidden lg:flex items-center justify-center mt-8">
        <span className="text-white text-2xl font-semibold">Dashboard</span>
      </div>

      <nav className="mt-10">
        <Link
          className="flex items-center mt-4 py-2 px-6 text-gray-300 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
          to="/"
        >
          <span className="mx-3">Home</span>
        </Link>

        <Link
          className="flex items-center mt-4 py-2 px-6 text-gray-300 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
          to="/create-experiment"
        >
          <span className="mx-3">Create Experiment</span>
        </Link>

        <Link
          className="flex items-center mt-4 py-2 px-6 text-gray-300 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
          to="/data-upload"
        >
          <span className="mx-3">Data Upload</span>
        </Link>

        <Link
          className="flex items-center mt-4 py-2 px-6 text-gray-300 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
          to="/data-processing"
        >
          <span className="mx-3">Data Processing</span>
        </Link>

        <Link
          className="flex items-center mt-4 py-2 px-6 text-gray-300 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100"
          to="/manage-datasets"
        >
          <span className="mx-3">Manage Datasets</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
