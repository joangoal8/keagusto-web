import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import ServiceOffer from "./pages/offers/ServiceOffer";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Team from "./pages/team/Team";
import HowItWorks from "./pages/documentation/HowItWorks";
import Support from "./pages/support/Support";
import Confirmation from "./pages/confirmation/Confirmation";

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
          <Route path='/how-it-works' element={<HowItWorks />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/support' element={<Support />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/confirmation' element={<Confirmation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
