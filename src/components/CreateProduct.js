import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useState } from 'react';

function CreateProduct({ click, products }) {
  console.log('aaa')
  const prod = click == -1 ?
    { id: '', name: '', price: '' } :
    products[click];

  const [data, setData] = useState(prod);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    prod[name] = value;
    setData({
      ...data,
      [name]: value
    });
  }

  return (
    <div>
      <form>
        <TextField
          fullWidth
          label="Id"
          variant="outlined"
          value={prod.id}
          name="id"
          onChange={ onChangeHandler }
          style={{ marginTop: '20px' }}
          />
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          value={prod.name}
          name="name"
          onChange={ onChangeHandler }
          style={{ marginTop: '20px' }}
          />
        <TextField
          fullWidth
          label="Price"
          value={prod.price}
          variant="outlined"
          name="price"
          onChange={ onChangeHandler }
          style={{ marginTop: '20px' }}
          />
        <Box textAlign='center'>
          <Button
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
