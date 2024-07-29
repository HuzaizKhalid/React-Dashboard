import { useState } from "react";

const UploadData = () => {
  const [formData, setFormData] = useState({
    files: [],
    dataInput: "",
    dataDescription: "",
    dataFormatInstructions: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? Array.from(files) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Upload Data</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="fileUpload"
          >
            File Upload
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="file"
            id="fileUpload"
            name="files"
            multiple
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="dataInput"
          >
            Data Input
          </label>
          <textarea
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="dataInput"
            name="dataInput"
            rows="6"
            placeholder="Enter your raw data here..."
            value={formData.dataInput}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="dataDescription"
          >
            Data Description
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="text"
            id="dataDescription"
            name="dataDescription"
            placeholder="Describe your data..."
            value={formData.dataDescription}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="dataFormatInstructions"
          >
            Data Format Instructions
          </label>
          <textarea
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            id="dataFormatInstructions"
            name="dataFormatInstructions"
            rows="4"
            placeholder="Provide guidelines on the expected data format..."
            value={formData.dataFormatInstructions}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Upload Data
        </button>
      </form>
    </div>
  );
};

export default UploadData;
