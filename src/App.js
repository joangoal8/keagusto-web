import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import ServiceOffer from "./pages/offers/ServiceOffer";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";

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
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
