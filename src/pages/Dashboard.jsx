// src/pages/Dashboard.jsx
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import ThemeToggle from "../components/ThemeToggle";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Dashboard = () => {
  const { user } = useAuth();

  const data = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai"],
    datasets: [
      {
        label: "Vendas",
        data: [400, 550, 700, 630, 810],
        fill: false,
        borderColor: "#3b82f6",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="p-6 space-y-6 bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-2xl font-semibold">Bem-vindo, {user?.email}
        </h2><ThemeToggle />
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
          <h3 className="text-lg font-medium mb-2">Gráfico de Vendas</h3>
          <Line data={data} />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
          <h3 className="text-lg font-medium mb-2">Informações Rápidas</h3>
          <p>Usuários cadastrados:</p>
          <p>Ativos hoje: </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
          <h3 className="text-lg font-medium mb-2">Notificações</h3>
          <ul className="text-sm list-disc list-inside">
            <li>Nova versão disponível</li>
            <li>Backup automático realizado</li>
          </ul>
        </div>
      </div>

      <button
        onClick={() => signOut(auth)}
        className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
      >
        Sair
      </button>
    </div>
    
  );
};

export default Dashboard;
