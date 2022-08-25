import "./App.css";
import { Home } from "./components/Home/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/adduser" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
