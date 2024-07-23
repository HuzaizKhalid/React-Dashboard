import { useState } from "react";
import HiddenSidebar from "./HiddenSidebar";
import { IoIosArrowUp } from "react-icons/io";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    navigation: false,
    datasets: false,
    experiments: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="bg-slate-950 flex flex-col items-center justify-evenly md:h-screen md:w-44">
      <div
        onClick={() => toggleSection("navigation")}
        className="flex justify-center w-full  cursor-pointer -mt-12"
      >
        <IoIosArrowUp className=" mt-3 text-lg text-white" />
        <div className="text-white text-center border-b-2 border-gray-400 p-2">
          Navigation
        </div>
      </div>
      <HiddenSidebar open={openSections.navigation} section="navigation" />

      <div
        onClick={() => toggleSection("datasets")}
        className="flex justify-center w-full  cursor-pointer -mt-12"
      >
        <IoIosArrowUp className=" mt-3 text-lg text-white" />
        <div className="text-white text-center border-b-2 border-gray-400 p-2">
          Datasets
        </div>
      </div>
      <HiddenSidebar open={openSections.datasets} section="datasets" />

      <div
        onClick={() => toggleSection("experiments")}
        className="flex justify-center w-full  cursor-pointer -mt-12"
      >
        <IoIosArrowUp className=" mt-3 text-lg text-white" />
        <div className="text-white text-center border-b-2 border-gray-400 p-2">
          Experiments
        </div>
      </div>
      <HiddenSidebar open={openSections.experiments} section="experiments" />
    </div>
  );
};

export default Sidebar;
