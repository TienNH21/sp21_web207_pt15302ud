import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import PropTypes from 'prop-types';

function ListProduct({
  data,
  setClick,
  setFormData,
  setProducts,
}) {
  const onClickHandler = (event, index, value) => {
    setClick(index);
    setFormData(value);
  }

  const btnDeleteOnClick = function (event, value, index) {
    event.stopPropagation();

    const deleteApiUrl = 'https://5f2d045b8085690016922b50.mockapi.io/todo-list/products/' + value.id;
    axios.delete(deleteApiUrl)
      .then(function (response) {
        const listNew = data.filter(function (val, idx) {
          if (idx == index) {
            // Loại bỏ phần tử
            return false;
          }

          // Giữ nguyên phần tử
          return true;
        });

        setProducts(listNew);
      })
      .catch(function (error) {
        console.error(error);
      })
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          data.map((value, index) => {
            return (
              <TableRow
                onClick={
                  (event) => {
                    onClickHandler(event, index, value);
                  }
                }
                key={index}>
                <TableCell>{ value.id }</TableCell>
                <TableCell>{ value.name }</TableCell>
                <TableCell>{ value.price }</TableCell>
                <TableCell>
                  <Button
                    onClick={
                      (event) => {
                        btnDeleteOnClick(event, value, index);
                      }
                    }
                    color="secondary">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })
        }
      </TableBody>
    </Table>
  );
}

export default ListProduct;
