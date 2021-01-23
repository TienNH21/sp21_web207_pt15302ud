import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ListProduct from './components/ListProduct';
import CreateProduct from './components/CreateProduct';

function App() {
  const initValue = [
    { id: 1, name: 'IPhone 12', price: '33,999,999.00' },
    { id: 2, name: 'IPhone 11', price: '16,999,999.00' },
    { id: 3, name: 'Oppo', price: '5,999,999.00' },
  ];

  const [products, setProducts] = useState(initValue);
  const [click, setClick] = useState(-1);

  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          component="div">
            <CreateProduct
              products={ products }
              click={ click }/>
            <ListProduct
              setClick={ setClick }
              data={ products } />
          </Typography>
      </Container>
    </div>
  );
}

export default App;
