import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';

function ListProduct({ data, setClick, setFormData }) {
  const onClickHandler = (event, index, value) => {
    setClick(index);
    setFormData(value);
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
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
              </TableRow>
            );
          })
        }
      </TableBody>
    </Table>
  );
}

export default ListProduct;
