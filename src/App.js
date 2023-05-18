import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import DogList from "./DogFinder/DogList";
import DogDetails from "./DogFinder/DogDetails";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Routes>
          <Route exact path="/dogs" element={<DogList />} />
          <Route exact path="/dogs/:name" element={<DogDetails />} />
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
