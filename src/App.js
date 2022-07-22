import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import ServiceOffer from "./pages/offers/ServiceOffer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/offers'>
            <Route path=":serviceName" element={
              <ServiceOffer />
            } />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
