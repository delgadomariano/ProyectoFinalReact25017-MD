import React, { useContext } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';

const Carrito = () => {
  const { carrito, setCarrito } = useContext(CartContext);

  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(producto => producto.id !== id));
  };

  const total = carrito.reduce((acc, item) => acc + item.cantidad * item.price, 0);

  if (carrito.length === 0) {
    return (
      <Container className="mt-4">
        <h3>Tu pedido está vacío</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h3>Pedido</h3>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Producto</th> 
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Imagen</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td> 
              <td>{item.price}</td>
              <td>{item.cantidad}</td>
              <img src={item.image} style={{ width: '100px', height: 'auto' }} className="img-fluid mb-3" />
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarDelCarrito(item.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h5 className="text-end">Total: {total.toFixed(2)}</h5>
      <h5 className="text-end"> <Button variant="danger" size="xl">Realiza tu pedido</Button></h5>
      
    </Container>
  );
};

export default Carrito;
