
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Cocktail from './components/Cocktail';
import Coffee from './components/Coffee';
import Cocoa from './components/Cocoa';
import Login from './components/Login';
import Footer from './components/Footer'
import Dashboard from './components/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './components/AuthContext';
import { CartProvider } from './components/CartContext';
import Carrito from './components/Carrito';


function App() {
  return (
       <CartProvider>
    <AuthProvider>
      <BrowserRouter>
    
        <Header />
        <Routes>
          <Route path="/administracion" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/cocktail" element={<Cocktail />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/cocoa" element={<Cocoa />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/carrito" element={<Carrito />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
    </CartProvider>
  );
}
export default App;
