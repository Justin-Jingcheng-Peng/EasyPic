import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { MainProvider } from "./context/MainContext";

function App() {
  return (
    <MainProvider>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
      </div>
    </MainProvider>
  );
}

export default App;
