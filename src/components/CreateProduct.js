import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useState } from 'react';

function CreateProduct({
  click,
  products,
  setProducts,
  formData: data,
  setFormData: setData,
}) {
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value
    });
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (click == -1) {
      // Tạo mới
      setProducts([
        ...products,
        data,
      ]);
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

  return (
    <div>
      <form onSubmit={ onSubmitHandler }>
        <TextField
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
        </Box>
      </form>
    </div>
  );
}

export default CreateProduct;
