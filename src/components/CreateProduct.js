import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useState } from 'react';
import axios from 'axios';

function CreateProduct({
  click,
  products,
  setProducts,
  formData: data,
  setFormData: setData,
  setClick,
}) {
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value
    });
  }

  const themMoi = function () {
    const createApiUrl = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/products';
    axios.post(createApiUrl, data)
      .then(function (response) {
        setProducts([
          ...products,
          response.data,
        ]);

        setData({
          id: '',
          name: '',
          price: '',
        });
      })
      .catch(function (error) {
        console.log('error');
        console.log(error);
      })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (click == -1) {
      themMoi();
    } else {
      // Cập nhật
      setProducts((oldState) => {
        const newState = oldState.map((value, index) => {
          if (index == click) {
            return data;
          } else {
            return value;
          }

          // return index == click ? data : value;
        });
        return newState;
      });
    }
  }

  const btnXoaFormOnClick = function (event) {
    setClick(-1);
    setData({
      id: '',
      name: '',
      price: '',
    });
  }

  return (
    <div>
      <form onSubmit={ onSubmitHandler }>
        <TextField
          disabled
          fullWidth
          label="Id"
          variant="outlined"
          value={ data.id }
          name="id"
          onChange={ onChangeHandler }
          style={{ marginTop: '20px' }}
          />
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          value={data.name}
          name="name"
          onChange={ onChangeHandler }
          style={{ marginTop: '20px' }}
          />
        <TextField
          fullWidth
          label="Price"
          value={data.price}
          variant="outlined"
          name="price"
          onChange={ onChangeHandler }
          style={{ marginTop: '20px' }}
          />
        <Box textAlign='center'>
          <Button
            type="submit"
            variant="contained"
            style={{ marginTop: '20px' }}
            color="primary">
            Submit
          </Button>

          <Button
            type="reset"
            onClick={ btnXoaFormOnClick }
            style={{ marginTop: '20px', marginLeft: '20px' }}
            color="secondary">
            Xóa form
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default CreateProduct;
