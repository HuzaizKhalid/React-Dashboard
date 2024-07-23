import {
  IoAnalyticsOutline,
  IoPeopleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Dashboard Home</h1>
        <p className="text-gray-600">
          Welcome to your dashboard. Here is an overview of your activity.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center">
            <IoAnalyticsOutline className="text-4xl text-blue-500" />
            <div className="ml-4">
              <h2 className="text-2xl font-bold">Analytics</h2>
              <p className="text-gray-600">View your analytics data.</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center">
            <IoPeopleOutline className="text-4xl text-green-500" />
            <div className="ml-4">
              <h2 className="text-2xl font-bold">Users</h2>
              <p className="text-gray-600">Manage your users.</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center">
            <IoSettingsOutline className="text-4xl text-yellow-500" />
            <div className="ml-4">
              <h2 className="text-2xl font-bold">Settings</h2>
              <p className="text-gray-600">Configure your settings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
