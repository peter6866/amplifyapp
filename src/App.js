import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Travels from "./routes/Travels";
import Yoyo from "./routes/Yoyo";


function App() {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/travels" element={<Travels/>}/>
              <Route path="/yoyo" element={<Yoyo/>}/>
          </Routes>

      </div>
  );
}

export default App;
