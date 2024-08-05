import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to the LLM Fine-Tuner
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Our LLM Fine-Tuner allows you to customize and fine-tune
          state-of-the-art language models to better suit your needs. Whether
          you want to adapt models like GPT-3, BERT, or Llama2 for specific
          tasks or datasets, our tool provides an easy-to-use interface to get
          started.
        </p>
        <div className="flex space-x-4">
          <Link to="/signup">
            <button className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign Up
            </button>
          </Link>
          <Link to="/login">
            <button className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
