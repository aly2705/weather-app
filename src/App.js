import useInit from "./hooks/useInit";
import WeatherBar from "./components/weatherBar/WeatherBar";
import Dashboard from "./components/dashboard/Dashboard";
import ErrorModal from "./components/UI/ErrorModal";
import LoadingSpinner from "./components/UI/LoadingSpinner";

function App() {
  const { error, isLoading } = useInit();
  const reloadHandler = () => {
    window.location.reload();
  };

  return (
    <main className="main">
      <WeatherBar />
      <Dashboard />
      {isLoading && <LoadingSpinner />}
      {error && (
        <ErrorModal
          heading={error}
          text="Please allow access to your location and reload"
          onClick={reloadHandler}
          action="Reload"
        />
      )}
    </main>
  );
}

export default App;
