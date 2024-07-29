import { useState } from "react";

const CreateExperiment = () => {
  const [formData, setFormData] = useState({
    files: [],
    fileType: "",
    llmBackbone: "",
    experimentName: "",
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
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Create Experiment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="selectFiles"
          >
            Select Files
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="file"
            id="selectFiles"
            name="files"
            multiple
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="fileType"
          >
            File Type
          </label>
          <select
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            id="fileType"
            name="fileType"
            value={formData.fileType}
            onChange={handleInputChange}
          >
            <option value="">Select a file type</option>
            <option value="csv">CSV</option>
            <option value="txt">Text</option>
            <option value="audio">Audio</option>
            <option value="images">Images</option>
          </select>
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="llmBackbone"
          >
            LLM to be Finetuned
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="text"
            id="llmBackbone"
            name="llmBackbone"
            value={formData.llmBackbone}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="experimentName"
          >
            Experiment Name
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="text"
            id="experimentName"
            name="experimentName"
            value={formData.experimentName}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Run Experiment
        </button>
      </form>
    </div>
  );
};

export default CreateExperiment;
