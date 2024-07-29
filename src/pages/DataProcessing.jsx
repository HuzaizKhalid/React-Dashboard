import React, { useState } from "react";

const DataProcessing = () => {
  const [data, setData] = useState(""); // Placeholder state for data

  const handleDataChange = (e) => {
    setData(e.target.value);
  };

  const handleGenerateDataset = () => {
    // Logic to process the raw data and generate a dataset
    console.log("Generating dataset with the following data:", data);
  };

  return (
    <div className="flex flex-col bg-gray-950 h-screen gap-3">
      {/* Preview and Edit Data */}
      <div className="bg-black flex flex-col p-3">
        <label className="text-white" htmlFor="previewEditData">
          Preview and Edit Data
        </label>
        <textarea
          className="mt-2 p-1"
          id="previewEditData"
          name="previewEditData"
          rows="10"
          value={data}
          onChange={handleDataChange}
          placeholder="Preview and edit your data here..."
        ></textarea>
      </div>

      {/* Dataset Configuration */}
      <div className="bg-black flex flex-col p-3">
        <label className="text-white" htmlFor="splitRatio">
          Dataset Configuration (Split Ratio for Training and Validation)
        </label>
        <input
          className="mt-2 p-1"
          type="text"
          id="splitRatio"
          name="splitRatio"
          placeholder="e.g., 80/20"
        />
      </div>

      {/* Generate Dataset Button */}
      <button
        className="text-black bg-yellow-500 w-32 p-2 ml-3 rounded-md"
        onClick={handleGenerateDataset}
      >
        Generate Dataset
      </button>
    </div>
  );
};

export default DataProcessing;
