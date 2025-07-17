import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';


const ProductCard = ({ drink, agregarAlCarrito }) => {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const fetchDrinkDetails = (id) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => {
        setSelectedDrink(data.drinks[0]);
        setShowModal(true);
      })
      .catch(err => console.error('Error fetching details:', err));
  };

  return (
    <Container className='mt-4'>
      <Card className="m-2">
        <Card.Img src={drink.image} />
        <Card.Body>
          <Card.Title>{drink.id}</Card.Title>
          <Card.Title>{drink.title}</Card.Title>
           <Card.Subtitle>{drink.description}</Card.Subtitle>
          <Button variant="primary" onClick={() => fetchDrinkDetails(drink.idExterno)}>
            <FontAwesomeIcon icon={faCocktail} size="lg" className="me-2" />
          </Button>
          <Button variant="primary" onClick={() => agregarAlCarrito(drink)}>
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          </Button>
        </Card.Body>
      </Card>


      {/* Modal con detalles */}
      {selectedDrink && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedDrink.strDrink}</Modal.Title>

          </Modal.Header>
          <Modal.Body>
            <img src={selectedDrink.strDrinkThumb} className="img-fluid mb-3" />
            <p><strong>Categoría:</strong> {selectedDrink.strCategory}</p>
            <p><strong>Tipo de bebida:</strong> {selectedDrink.strAlcoholic}</p>
            <p><strong>Vaso:</strong> {selectedDrink.strGlass}</p>
            <p><strong>Instrucciones:</strong> {selectedDrink.strInstructions}</p>
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
};

export default ProductCard;
