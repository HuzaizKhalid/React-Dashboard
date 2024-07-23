import { Link } from "react-router-dom";

const HiddenSidebar = ({ open, section }) => {
  return (
    <>
      {section === "navigation" && (
        <div
          className={`bg-slate-950  flex flex-col items-center justify-evenly -mt-24 md:h-28 md:w-44 ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="text-yellow-300">
            {" "}
            <Link to="/"> Home </Link>
          </div>
          <div className="text-yellow-300">Settings</div>
        </div>
      )}
      {section === "datasets" && (
        <div
          className={`bg-slate-950  flex flex-col items-center justify-evenly -mt-24 md:h-28 md:w-44 ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="text-yellow-300">Import Dataset</div>
          <div className="text-yellow-300">View Datasets</div>
        </div>
      )}
      {section === "experiments" && (
        <div
          className={`bg-slate-950  flex flex-col items-center justify-evenly -mt-24 md:h-28 md:w-44 ${
            open ? "block" : "hidden"
          }`}
        >
          <Link to="/create-experiment" className="text-yellow-300">
            Create Experiments
          </Link>
          <div className="text-yellow-300">Create Grid Search</div>
          <div className="text-yellow-300">View Search</div>
        </div>
      )}
    </>
  );
};

export default HiddenSidebar;
