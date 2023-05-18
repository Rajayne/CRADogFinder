import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import DogList from "./DogFinder/DogList";
import DogDetails from "./DogFinder/DogDetails";
import ColorList from "./ColorFactory/ColorList";
import ColorForm from "./ColorFactory/ColorForm";
import ColorDetails from "./ColorFactory/ColorDetails";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route exact="true" path="/colors" element={<ColorList />} />
          <Route exact="true" path="/colors/new" element={<ColorForm />} />
          <Route exact="true" path="/colors/:name" element={<ColorDetails />} />
          <Route exact="true" path="/dogs" element={<DogList />} />
          <Route exact="true" path="/dogs/:name" element={<DogDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
