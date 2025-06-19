import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 text-sm border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {darkMode ? "☀️ Claro" : "🌙 Escuro"}
    </button>
  );
};

export default ThemeToggle;
