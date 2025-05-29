import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'; // Si usás react-router

const Home = () => {
  const navigate = useNavigate(); // para navegar a la ruta de cada categoría

  const categories = [
    {
      title: 'Cocktail',
      image: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
      description: 'Explora una variedad de cocktails refrescantes y únicos.',
      route: '/cocktail',
    },
    {
      title: 'Coffee',
      image: 'https://www.thecocktaildb.com/images/media/drink/xxtxsu1472720505.jpg',
      description: 'Sumergite en el mundo del café y sus deliciosas variantes.',
      route: '/coffee', // usar encodeURIComponent si hay espacios
    },
    {
      title: 'Cocoa',
      image: 'https://www.thecocktaildb.com/images/media/drink/otn2011504820649.jpg',
      description: 'Descubrí bebidas a base de cacao dulces y reconfortantes.',
      route: '/cocoa',
    },
  ];

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Bienvenido a la Bebida App</h1>
      <p className="text-center mb-5">Elegí una categoría para explorar bebidas increíbles</p>
      <Row>
        {categories.map((cat, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4 shadow-sm">
              <Card.Img variant="top" src={cat.image} />
              <Card.Body>
                <Card.Title>{cat.title}</Card.Title>
                <Card.Text>{cat.description}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate(cat.route)}
                >
                  Ver {cat.title}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
