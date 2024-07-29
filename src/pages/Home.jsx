// Home.js
import {
  IoAnalyticsOutline,
  IoPeopleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Dashboard Home
        </h1>
        <p className="text-gray-600">
          Welcome to your dashboard. Here is an overview of your activity.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <DashboardCard
          icon={<IoAnalyticsOutline className="text-4xl text-blue-500" />}
          title="Analytics"
          description="View your analytics data."
        />
        <DashboardCard
          icon={<IoPeopleOutline className="text-4xl text-green-500" />}
          title="Users"
          description="Manage your users."
        />
        <DashboardCard
          icon={<IoSettingsOutline className="text-4xl text-yellow-500" />}
          title="Settings"
          description="Configure your settings."
        />
      </div>
    </div>
  );
};

const DashboardCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
    <div className="flex items-center mb-4">
      {icon}
      <h2 className="text-2xl font-bold ml-4">{title}</h2>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;
