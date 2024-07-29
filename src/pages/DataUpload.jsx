const UploadData = () => {
  return (
    <div className="flex flex-col bg-gray-950 h-screen gap-3">
      {/* File Upload */}
      <div className="bg-black flex flex-col p-3">
        <label className="text-white" htmlFor="fileUpload">
          File Upload
        </label>
        <input
          className="mt-2 p-1"
          type="file"
          id="fileUpload"
          name="fileUpload"
          multiple
        />
      </div>

      {/* Data Input */}
      <div className="bg-black flex flex-col p-3">
        <label className="text-white" htmlFor="dataInput">
          Data Input
        </label>
        <textarea
          className="mt-2 p-1"
          id="dataInput"
          name="dataInput"
          rows="6"
          placeholder="Enter your raw data here..."
        ></textarea>
      </div>

      {/* Data Description */}
      <div className="bg-black flex flex-col p-3">
        <label className="text-white" htmlFor="dataDescription">
          Data Description
        </label>
        <input
          className="mt-2 p-1"
          type="text"
          id="dataDescription"
          name="dataDescription"
          placeholder="Describe your data..."
        />
      </div>

      {/* Data Format Instructions */}
      <div className="bg-black flex flex-col p-3">
        <label className="text-white" htmlFor="dataFormatInstructions">
          Data Format Instructions
        </label>
        <textarea
          className="mt-2 p-1"
          id="dataFormatInstructions"
          name="dataFormatInstructions"
          rows="4"
          placeholder="Provide guidelines on the expected data format..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <button className="text-black bg-yellow-500 w-32 p-2 ml-3 rounded-md">
        Upload Data
      </button>
    </div>
  );
};

export default UploadData;
