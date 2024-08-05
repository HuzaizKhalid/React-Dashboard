import { useState } from "react";

const DataProcessing = () => {
  const [data, setData] = useState("");
  const [splitRatio, setSplitRatio] = useState("");

  const handleDataChange = (e) => {
    setData(e.target.value);
  };

  const handleSplitRatioChange = (e) => {
    setSplitRatio(e.target.value);
  };

  const handleGenerateDataset = () => {
    console.log("Generating dataset with the following data:", data);
    console.log("Split ratio:", splitRatio);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Data Processing</h2>
      <div className="space-y-6">
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="previewEditData"
          >
            Preview and Edit Data
          </label>
          <textarea
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="previewEditData"
            name="previewEditData"
            rows="10"
            value={data}
            onChange={handleDataChange}
            placeholder="Preview and edit your data here..."
          ></textarea>
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="splitRatio"
          >
            Dataset Configuration (Split Ratio for Training and Validation)
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="text"
            id="splitRatio"
            name="splitRatio"
            placeholder="e.g., 80/20"
            value={splitRatio}
            onChange={handleSplitRatioChange}
          />
        </div>

        <button
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleGenerateDataset}
        >
          Generate Dataset
        </button>
      </div>
    </div>
  );
};

export default DataProcessing;
