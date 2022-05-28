import "./App.css";
import Navbar from "./components/Navbar";
import PhotoGrid from "./components/PhotoGrid";
import Modal from "./components/Modal/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import { MainProvider } from "./context/MainContext";

function App() {
  return (
    <MainProvider>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Modal />
          <PhotoGrid />
        </header>
      </div>
    </MainProvider>
  );
}

export default App;
