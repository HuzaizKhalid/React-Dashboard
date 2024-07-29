import { useState } from "react";

const ManageDatasets = () => {
  const [datasets, setDatasets] = useState([
    {
      id: 1,
      name: "Customer Feedback Dataset",
      details: "Contains customer reviews and ratings for our products",
      createdAt: "2023-07-15",
      size: "1.2 GB",
    },
    {
      id: 2,
      name: "Sales Transactions 2023",
      details:
        "Detailed sales data including product IDs, quantities, and prices",
      createdAt: "2023-08-01",
      size: "3.5 GB",
    },
    {
      id: 3,
      name: "Website User Behavior",
      details: "User clickstream data and session information from our website",
      createdAt: "2023-09-10",
      size: "5.7 GB",
    },
  ]);

  const [selectedDataset, setSelectedDataset] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ name: "", details: "" });

  const handleViewDataset = (dataset) => {
    setSelectedDataset(dataset);
    setIsEditing(false);
  };

  const handleEditDataset = (dataset) => {
    setSelectedDataset(dataset);
    setEditForm({ name: dataset.name, details: dataset.details });
    setIsEditing(true);
  };

  const handleDeleteDataset = (datasetId) => {
    setDatasets(datasets.filter((dataset) => dataset.id !== datasetId));
    if (selectedDataset && selectedDataset.id === datasetId) {
      setSelectedDataset(null);
    }
  };

  const handleEditFormChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    const updatedDatasets = datasets.map((dataset) =>
      dataset.id === selectedDataset.id ? { ...dataset, ...editForm } : dataset
    );
    setDatasets(updatedDatasets);
    setSelectedDataset({ ...selectedDataset, ...editForm });
    setIsEditing(false);
  };

  return (
    <div className="max-w-full mx-auto p-4 sm:p-6 md:p-8 bg-gray-100">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
        Manage Datasets
      </h2>
      <div className="space-y-6 md:space-y-8">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-700">
            Dataset List
          </h3>
          <ul className="space-y-3 sm:space-y-4">
            {datasets.map((dataset) => (
              <li
                key={dataset.id}
                className="bg-white p-3 sm:p-4 rounded-lg shadow transition duration-300 ease-in-out hover:shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-medium mb-2 sm:mb-0">
                    {dataset.name}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      className="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                      onClick={() => handleViewDataset(dataset)}
                    >
                      View
                    </button>
                    <button
                      className="px-2 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300"
                      onClick={() => handleEditDataset(dataset)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-2 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                      onClick={() => handleDeleteDataset(dataset.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-700">
            Dataset Details
          </h3>
          {selectedDataset ? (
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
              {isEditing ? (
                <form onSubmit={handleEditFormSubmit}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={editForm.name}
                      onChange={handleEditFormChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Details
                    </label>
                    <textarea
                      name="details"
                      value={editForm.details}
                      onChange={handleEditFormChange}
                      rows="3"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    ></textarea>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-3 py-1 text-sm bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
                    >
                      Save
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <h4 className="text-lg font-semibold mb-2">
                    {selectedDataset.name}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {selectedDataset.details}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-sm">
                    <div>
                      <span className="font-medium">Created on:</span>{" "}
                      {selectedDataset.createdAt}
                    </div>
                    <div>
                      <span className="font-medium">Size:</span>{" "}
                      {selectedDataset.size}
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <p className="text-gray-500 italic">
              Select a dataset to view details
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageDatasets;
