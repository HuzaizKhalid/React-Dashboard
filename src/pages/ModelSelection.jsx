import { useState } from "react";

const models = [
  {
    id: "gpt-3",
    name: "GPT-3",
    description:
      "GPT-3 is a state-of-the-art language model by OpenAI with impressive capabilities in generating human-like text.",
  },
  {
    id: "bert",
    name: "BERT",
    description:
      "BERT (Bidirectional Encoder Representations from Transformers) is designed for understanding the context of words in search queries.",
  },
  {
    id: "llama2",
    name: "Llama2",
    description:
      "Llama2 is a newer model designed for tasks requiring a deep understanding of context and text generation.",
  },
  // Add more models as needed
];

const ModelSelectionPage = () => {
  const [selectedModel, setSelectedModel] = useState(models[0]);

  const handleModelChange = (e) => {
    const modelId = e.target.value;
    const model = models.find((m) => m.id === modelId);
    setSelectedModel(model);
  };

  const handleSelectModel = () => {
    console.log("Selected Model:", selectedModel);
    // Add logic to handle the selected model, such as saving it or sending it to a server
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Select Model</h2>

      <form className="space-y-6">
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="modelDropdown"
          >
            Select Model
          </label>
          <select
            id="modelDropdown"
            name="model"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            onChange={handleModelChange}
            value={selectedModel.id}
          >
            {models.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900">
            Model Description
          </h3>
          <p className="mt-2 text-gray-600">{selectedModel.description}</p>
        </div>

        <button
          type="button"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleSelectModel}
        >
          Select Model
        </button>
      </form>
    </div>
  );
};

export default ModelSelectionPage;
