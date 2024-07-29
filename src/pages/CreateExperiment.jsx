const CreateExperiment = () => {
  return (
    <div className="flex flex-col bg-gray-950 h-screen gap-3">
      {/* Select Files */}
      <div className="bg-black flex flex-col p-3">
        <label className="text-white" htmlFor="selectFiles">
          Select Files
        </label>
        <input
          className="mt-2 p-1"
          type="file"
          id="selectFiles"
          name="selectFiles"
          multiple
        />
      </div>

      {/* File Type */}
      <div className="bg-black flex flex-col p-3">
        <label className="text-white" htmlFor="fileType">
          File Type
        </label>
        <select className="mt-2 p-1" id="fileType" name="fileType">
          <option value="">Select a file type</option>
          <option value="csv">CSV</option>
          <option value="txt">Text</option>
          <option value="audio">Audio</option>
          <option value="images">Images</option>
        </select>
      </div>

      {/* LLM to be Finetuned */}
      <div className="bg-black flex flex-col p-3">
        <label className="text-white" htmlFor="llmBackbone">
          LLM to be Finetuned
        </label>
        <input
          className="mt-2 p-1"
          type="text"
          id="llmBackbone"
          name="llmBackbone"
        />
      </div>

      {/* Experiment Name */}
      <div className="bg-black flex flex-col p-3">
        <label className="text-white" htmlFor="experimentName">
          Experiment Name
        </label>
        <input
          className="mt-2 p-1"
          type="text"
          id="experimentName"
          name="experimentName"
        />
      </div>

      {/* Run Experiment Button */}
      <button className="text-black bg-yellow-500 w-32 p-2 ml-3 rounded-md">
        Run Experiment
      </button>
    </div>
  );
};

export default CreateExperiment;
