import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col, Card, Button, Modal, Form  }  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const ProductList = ({ category = null }) => 
{ 
  const [cocktail, setCocktail] = useState([])
  const [loading, setLoading] = useState(true) 

  const [filterText, setFilterText] = useState('');
  
  useEffect(()=>{
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setCocktail(data.drinks); 
      setLoading(false); 
    })
    .catch(error => {
      console.error('Error fetching data:',  error)
      setLoading(false);
    })

  }, [])



  const filteredCocktails = cocktail.filter(drink =>
    drink.strDrink.toLowerCase().includes(filterText.toLowerCase())
    
  );
  
 const handleAgregarAlCarrito = (drink) => {
    alert(`Producto ${drink.strDrink} agregado al carrito`);
  };

  return (
     
    <Container className='mt-4'>
      <h1>Cocktails</h1>
      {/* Filtro de búsqueda */}
      <Form className="mb-3">
        <Form.Control
          type="text"
          placeholder="Buscar por nombre..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </Form>


      {loading ? <p>Cargando...</p> : (
        <Row>
          {filteredCocktails.map(drink => (
            <Col key={drink.idDrink} md={4}> 
                      <ProductCard drink={drink} agregarAlCarrito={handleAgregarAlCarrito} /> 
            </Col>
          ))}
        </Row>
      )}

     
    </Container>
  )
};

export default ProductList;
