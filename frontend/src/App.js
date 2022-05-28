import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import PhotoGrid from "./components/PhotoGrid";
import { MainProvider } from "./context/MainContext";

function App() {
  return (
    <MainProvider>
      <div className="AppUnsplash">
        <header className="App-header">
          <Navbar />
          <PhotoGrid />
        </header>
      </div>
    </MainProvider>
  );
}

export default App;
