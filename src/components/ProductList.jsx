import React, { useEffect, useState, useContext } from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from './CartContext';  


const ProductList = ({ category = null }) => {

  const [cocktail, setCocktail] = useState([])
  const [loading, setLoading] = useState(true)
  const [filterText, setFilterText] = useState('');
  const { agregarAlCarrito } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://6878255531d28a460e1d4ec9.mockapi.io/api/v1/products?category=${category}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCocktail(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error)
        setLoading(false);
      })

  }, [])



  const filteredCocktails = cocktail.filter(drink =>
    drink.title.toLowerCase().includes(filterText.toLowerCase())

  );

 

  return (

    <Container className='mt-4'>
      {/* Filtro de búsqueda */}
      <Form className="mb-3">
        <Form.Control
          type="text"
          placeholder="Buscar por nombre..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </Form>


      {loading ?
        <p>Cargando...</p> : (
          <Row>
            {filteredCocktails.map(drink => (
              <Col key={drink.id} md={4}>
                <ProductCard drink={drink} agregarAlCarrito={agregarAlCarrito} />
              </Col>
            ))}
          </Row>
        )}


    </Container>
  )
};

export default ProductList;
