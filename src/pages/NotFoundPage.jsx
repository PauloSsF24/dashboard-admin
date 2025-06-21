// src/pages/NotFoundPage.jsx
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6 max-w-md"
      >
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 600"
            className="w-72 h-auto mx-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            >
            <circle cx="400" cy="300" r="280" fill="#1e293b" opacity="0.1" />
            <g transform="translate(300 180)">
                <circle cx="100" cy="100" r="60" fill="#4f46e5" />
                <circle cx="100" cy="100" r="50" fill="#6366f1" />
                <circle cx="100" cy="100" r="20" fill="white" opacity="0.8" />
                <path
                d="M90 80 Q100 50 110 80"
                stroke="white"
                strokeWidth="4"
                fill="none"
                />
                <rect x="85" y="130" width="30" height="50" rx="10" fill="#4f46e5" />
                <path
                d="M100 180 C130 200, 160 170, 190 200"
                stroke="#4f46e5"
                strokeWidth="5"
                fill="none"
                />
                <circle cx="190" cy="200" r="10" fill="#6366f1" />
            </g>
        </motion.svg>


        <h1 className="text-5xl font-extrabold">404</h1>
        <p className="text-lg">Oops! A página que você procura não foi encontrada.</p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Ir para o Dashboard
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition"
          >
            Voltar à Página Anterior
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
