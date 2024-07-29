import { useState } from "react";

const ManageDatasets = () => {
  // Placeholder state for datasets
  const [datasets, setDatasets] = useState([
    {
      id: 1,
      name: "Dataset 1",
      details: "Sample data and statistics for Dataset 1",
    },
    {
      id: 2,
      name: "Dataset 2",
      details: "Sample data and statistics for Dataset 2",
    },
  ]);
  const [selectedDataset, setSelectedDataset] = useState(null);

  const handleViewDataset = (dataset) => {
    setSelectedDataset(dataset);
  };

  const handleEditDataset = (datasetId) => {
    // Logic to edit the dataset
    console.log("Editing dataset with id:", datasetId);
  };

  const handleDeleteDataset = (datasetId) => {
    // Logic to delete the dataset
    setDatasets(datasets.filter((dataset) => dataset.id !== datasetId));
  };

  return (
    <div className="flex flex-col bg-gray-950 h-screen gap-3 p-3">
      {/* Dataset List */}
      <div className="bg-black flex flex-col p-3">
        <label className="text-white" htmlFor="datasetList">
          Dataset List
        </label>
        <ul id="datasetList" className="mt-2 p-1">
          {datasets.map((dataset) => (
            <li
              key={dataset.id}
              className="flex justify-between items-center p-2 bg-gray-800 text-white mb-2"
            >
              {dataset.name}
              <div className="flex gap-2">
                <button
                  className="bg-blue-500 px-2 py-1 rounded"
                  onClick={() => handleViewDataset(dataset)}
                >
                  View
                </button>
                <button
                  className="bg-yellow-500 px-2 py-1 rounded"
                  onClick={() => handleEditDataset(dataset.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 px-2 py-1 rounded"
                  onClick={() => handleDeleteDataset(dataset.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Dataset Details */}
      {selectedDataset && (
        <div className="bg-black flex flex-col p-3">
          <label className="text-white" htmlFor="datasetDetails">
            Dataset Details
          </label>
          <div id="datasetDetails" className="mt-2 p-1 text-white">
            <h2 className="text-lg font-bold mb-2">{selectedDataset.name}</h2>
            <p>{selectedDataset.details}</p>
            {/* Add more detailed view components as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageDatasets;
