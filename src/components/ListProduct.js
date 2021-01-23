import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';

function ListProduct({ data, setClick }) {
  const onClickHandler = (event, index) => {
    setClick(index);
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
                    onClickHandler(event, index);
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

ListProduct.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ListProduct;