import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from './CartContext';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { carrito } = useContext(CartContext);
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <Navbar expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <FontAwesomeIcon icon={faCocktail} size="lg" className="me-2" />
          <span>Cosquillas en la Lengua</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* LINKS A LA IZQUIERDA */}
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
            <Nav.Link as={Link} to="/cocktail" className="me-3">Cocktail</Nav.Link>
            <Nav.Link as={Link} to="/coffee" className="me-3">Coffee</Nav.Link>
            <Nav.Link as={Link} to="/cocoa" className="me-3">Cocoa</Nav.Link>
          </Nav>

          {/* ÍCONOS A LA DERECHA */}
          <div className="d-flex align-items-center">
            {user === "cliente" || user === "admin" ? (

              <><Link to="/carrito" className="text-white position-relative me-3">
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                {totalItems > 0 && (
                  <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                    {totalItems}
                  </Badge>
                )}
              </Link>
              </>
            ) : (
              <>
                <Link to="/administracion" className="text-white position-relative me-3">
                  <FontAwesomeIcon icon={faShoppingCart} size="lg" />

                </Link>
              </>
            )}
            {user === "admin" ? (
              <><Link to="/dashboard" className="text-white position-relative">
                  <FontAwesomeIcon icon={faUser} size="lg" />
                </Link><Navbar.Text className="me-3">
                  <strong>{user}</strong>
                </Navbar.Text>
                <Button variant="outline-light" onClick={handleLogout}>
                Salir
              </Button>
                </>
            ) : (
              <>
                 
              </>
            )}
            {user !== "admin" ? (
              <>  <Link to="/administracion" className="text-white position-relative">
                  <FontAwesomeIcon icon={faUser} size="lg" />
                </Link></>
            ) : (
              <>
              
              </>
            )}
            {user === "cliente"  ? (
              <>
                <Navbar.Text className="me-3">
                  Usuario: <strong>{user}</strong>
                </Navbar.Text>
                <Button variant="outline-light" onClick={handleLogout}>
                  Salir
                </Button>
              </>
            ):(
                <></>
            )}

          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>



  );
};

export default Header;
