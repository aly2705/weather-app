import useInit from "./hooks/useInit";
import WeatherBar from "./components/weatherBar/WeatherBar";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  useInit();

  return (
    <main className="main">
      <WeatherBar />
      <Dashboard />
    </main>
  );
}

export default App;
