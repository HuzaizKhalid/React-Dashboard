import { Link } from "react-router-dom";

const Dashboard = () => {
  // Dummy data for statistics and recent activities
  const userStats = {
    datasetsUploaded: 12,
    experimentsRun: 5,
    modelsFineTuned: 3,
  };

  const recentActivities = [
    "Uploaded new dataset 'Customer Reviews'",
    "Started fine-tuning with GPT-3",
    "Completed experiment 'Sentiment Analysis'",
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Overview Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Dashboard</h1>

          {/* User Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-md shadow-sm">
              <h2 className="text-xl font-semibold text-gray-700">
                Datasets Uploaded
              </h2>
              <p className="text-2xl font-bold text-gray-900">
                {userStats.datasetsUploaded}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md shadow-sm">
              <h2 className="text-xl font-semibold text-gray-700">
                Experiments Run
              </h2>
              <p className="text-2xl font-bold text-gray-900">
                {userStats.experimentsRun}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md shadow-sm">
              <h2 className="text-xl font-semibold text-gray-700">
                Models Fine-tuned
              </h2>
              <p className="text-2xl font-bold text-gray-900">
                {userStats.modelsFineTuned}
              </p>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-gray-50 p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Recent Activities
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {recentActivities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/data-upload">
              <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Upload Data
              </button>
            </Link>
            <Link to="/manage-datasets">
              <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Manage Datasets
              </button>
            </Link>
            <Link to="/fine-tune-model">
              <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Fine-tune Models
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
