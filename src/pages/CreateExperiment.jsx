const CreateExperiment = () => {
  return (
    <div className="flex flex-col bg-gray-950 h-screen gap-3">
      <div className="bg-black flex flex-col p-3">
        <label className="text-white" htmlFor="problemType">
          Dataset
        </label>
        <select className="mt-2 p-1" id="problemType" name="problemType">
          <option value="">Select a problem type</option>
          <option value="bug">Bug</option>
          <option value="feature">Feature Request</option>
          <option value="enhancement">Enhancement</option>
          <option value="documentation">Documentation</option>
        </select>
      </div>
      <div className="bg-black flex flex-col p-3">
        <label className="text-white" htmlFor="problemType">
          Problem Type
        </label>
        <select className="mt-2 p-1" id="problemType" name="problemType">
          <option value="">Select a problem type</option>
          <option value="bug">Bug</option>
          <option value="feature">Feature Request</option>
          <option value="enhancement">Enhancement</option>
          <option value="documentation">Documentation</option>
        </select>
      </div>
      <div className="bg-black flex flex-col p-3">
        <label className="text-white" htmlFor="">
          Experiment Name
        </label>
        <input className="mt-2 p-1" type="text" />
      </div>
      <div className="bg-black flex flex-col p-3">
        <label className="text-white" htmlFor="">
          LLM backbone
        </label>
        <input className="mt-2 p-1" type="text" />
      </div>
      <div className="bg-black flex flex-col p-3">
        <label className="text-white" htmlFor="problemType">
          Train Dataset
        </label>
        <select className="mt-2 p-1" id="problemType" name="problemType">
          <option value="">Select a problem type</option>
          <option value="bug">Bug</option>
          <option value="feature">Feature Request</option>
          <option value="enhancement">Enhancement</option>
          <option value="documentation">Documentation</option>
        </select>
      </div>
      <button className="text-black bg-yellow-500 w-32 p-2 ml-3 rounded-md">
        Run Experiment
      </button>
    </div>
  );
};

export default CreateExperiment;
