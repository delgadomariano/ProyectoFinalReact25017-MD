
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cocktail from './components/Cocktail';
import Coffee from './components/Coffee';
import Cocoa from './components/Cocoa';
import Login from './components/Login'; 
import Footer from './components/Footer'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/administracion" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/cocktail" element={<Cocktail />} />
         <Route path="/coffee" element={<Coffee />} />
        <Route path="/cocoa" element={<Cocoa />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;
