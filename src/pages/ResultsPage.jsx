import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ResultsPage = () => {
  // Mock data for the chart
  const chartData = {
    labels: ["Epoch 1", "Epoch 2", "Epoch 3", "Epoch 4", "Epoch 5"],
    datasets: [
      {
        label: "Accuracy",
        data: [0.6, 0.7, 0.75, 0.8, 0.85],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Loss",
        data: [0.5, 0.4, 0.3, 0.25, 0.2],
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Fine-tuning Results
      </h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Fine-tuning Status</h3>
        <p className="text-green-600 font-medium">Completed Successfully</p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Model Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="text-lg font-medium mb-2">Final Accuracy</h4>
            <p className="text-2xl font-bold text-blue-600">85%</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="text-lg font-medium mb-2">Final Loss</h4>
            <p className="text-2xl font-bold text-red-600">0.2</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="text-lg font-medium mb-2">Performance Over Time</h4>
          <Line data={chartData} />
        </div>
      </div>

      <div className="mb-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download Fine-tuned Model
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Usage Instructions</h3>
        <div className="bg-white p-4 rounded-lg shadow">
          <ol className="list-decimal list-inside space-y-2">
            <li>Download the fine-tuned model using the button above.</li>
            <li>
              Install the required dependencies as specified in the
              documentation.
            </li>
            <li>Load the model using our provided API or library.</li>
            <li>Use the model for inference on new data.</li>
            <li>
              Refer to our documentation for detailed API usage and best
              practices.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
