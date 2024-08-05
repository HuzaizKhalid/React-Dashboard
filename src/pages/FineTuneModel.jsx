import { useState } from "react";

const FineTuneModel = () => {
  const [config, setConfig] = useState({
    learningRate: "",
    epochs: "",
    batchSize: "",
    dataset: "",
  });
  const [progress, setProgress] = useState(0);
  const [isFineTuning, setIsFineTuning] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConfig((prev) => ({ ...prev, [name]: value }));
  };

  const handleStartFineTuning = (e) => {
    e.preventDefault();
    setIsFineTuning(true);
    // Simulating fine-tuning progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsFineTuning(false);
          return 100;
        }
        return prev + 10;
      });
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Fine-tune Model</h2>

      <form onSubmit={handleStartFineTuning} className="space-y-6">
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="learningRate"
          >
            Learning Rate
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="number"
            id="learningRate"
            name="learningRate"
            value={config.learningRate}
            onChange={handleInputChange}
            step="0.001"
            required
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="epochs"
          >
            Epochs
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="number"
            id="epochs"
            name="epochs"
            value={config.epochs}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="batchSize"
          >
            Batch Size
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            type="number"
            id="batchSize"
            name="batchSize"
            value={config.batchSize}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="dataset"
          >
            Select Dataset
          </label>
          <select
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            id="dataset"
            name="dataset"
            value={config.dataset}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a dataset</option>
            <option value="dataset1">Dataset 1</option>
            <option value="dataset2">Dataset 2</option>
            <option value="dataset3">Dataset 3</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={isFineTuning}
        >
          {isFineTuning ? "Fine-tuning in Progress" : "Start Fine-tuning"}
        </button>
      </form>

      {isFineTuning && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Fine-tuning Progress
          </h3>
          <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">{progress}% Complete</p>
        </div>
      )}
    </div>
  );
};

export default FineTuneModel;
