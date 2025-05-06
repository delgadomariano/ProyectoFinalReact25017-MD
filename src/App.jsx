import { useState, useEffect } from 'react' 
import { Container, Row, Col, Card, Button, Modal, Form  }  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() { 
  const [cocktail, setCocktail] = useState([])
  const [loading, setLoading] = useState(true) 
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [showModal, setShowModal] = useState(false);
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

  const fetchDrinkDetails = (id) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => {
        setSelectedDrink(data.drinks[0]);
        setShowModal(true);
      })
      .catch(err => console.error('Error fetching details:', err));
  };

  const filteredCocktails = cocktail.filter(drink =>
    drink.strDrink.toLowerCase().includes(filterText.toLowerCase())
  );

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
              <Card className="m-2">
                <Card.Img src={drink.strDrinkThumb} />
                <Card.Body>
                  <Card.Title>{drink.strDrink}</Card.Title>
                  <Button variant="primary" onClick={() => fetchDrinkDetails(drink.idDrink)}>
                    Ver Detalle
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

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
  )
}

export default App
