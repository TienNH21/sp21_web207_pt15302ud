import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ListProduct from './components/ListProduct';
import CreateProduct from './components/CreateProduct';
import axios from 'axios';

function App() {
  const formDataInitValue = { id: '', name: '', price: '' };

  const [products, setProducts] = useState([]);
  const [click, setClick] = useState(-1);
  const [formData, setFormData] = useState(formDataInitValue);

  const url = "https://5f2d045b8085690016922b50.mockapi.io/todo-list/products";

  useEffect(() => {
    axios({
      method: 'GET',
      url: url,
    })
      .then((response) => {
        const { data } = response;
        console.log(data)
        setProducts(data);
      })
      .catch((error) => {
        console.log(error, error.response);
      });
  }, [
    //
  ]);

  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          component="div">
            <CreateProduct
              products={ products }
              setProducts={ setProducts }
              formData={ formData }
              setFormData={ setFormData }
              click={ click }/>
            <ListProduct
              setFormData={ setFormData }
              setClick={ setClick }
              data={ products } />
          </Typography>
      </Container>
    </div>
  );
}

export default App;
