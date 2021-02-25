import ListProduct from './ListProduct';
import CreateProduct from './CreateProduct';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Product() {
  const formDataInitValue = { id: '', name: '', price: '' };

  const [products, setProducts] = useState([]);
  const [click, setClick] = useState(-1);
  const [formData, setFormData] = useState(formDataInitValue);

  const urlParams = new URLSearchParams(window.location.search);
  let pageInit = urlParams.get('page') != null ? parseInt(urlParams.get('page')) : 1;
  const [page, setPage] = useState(pageInit);

  const limit = 10;
  const url = "https://5f2d045b8085690016922b50.mockapi.io/todo-list/products?limit=" +
    limit + "&page=" + page;

  useEffect(() => {
    axios({
      method: 'GET',
      url: url,
    })
      .then((response) => {
        const { data } = response;
        setProducts(data);
      })
      .catch((error) => {
        console.log(error, error.response);
      });
  }, [
    /*
     * Khi các phần tử trong mảng thay đổi giá trị,
     * useEffect sẽ chạy lại callback
     */
    page,
  ]);

  const nextPage = function () {
    setPage(page + 1);
    console.log('page:', page)
  }

  const previosPage = function () {
    if (page == 1) {
      return ;
    }

    setPage(page - 1);
  }
  return (
    <div>
      <CreateProduct
        products={ products }
        setProducts={ setProducts }
        formData={ formData }
        setFormData={ setFormData }
        setClick={ setClick }
        click={ click }/>
      <ListProduct
        setProducts={ setProducts }
        setFormData={ setFormData }
        setClick={ setClick }
        data={ products } />

      <ul className="pagination mt-4">
        <li
          onClick={ previosPage }
          className="page-item">
          <a className="page-link">Trang trước</a>
        </li>
        <li className="page-item"><a className="page-link">{ page }</a></li>
        <li
          onClick={ nextPage }
          className="page-item">
          <a className="page-link">Trang sau</a>
        </li>
      </ul>
    </div>
  );
}

export default Product;
