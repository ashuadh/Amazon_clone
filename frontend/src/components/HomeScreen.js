import React, { useState, useEffect } from 'react'
import Product from '../components/Product';
import axios from 'axios';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { listProducts } from '../actions/productActions';
import {useDispatch, useSelector} from 'react-redux';
export default function HomeScreen() {

  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const {loading, error, products} = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

    return (
        <div>
          {loading? (<LoadingBox />) : error? (<MessageBox variant = 'danger'>{error}</MessageBox>) :
          (
          <div className="row center">
            {products.map((product) => (
              <Product key = {product._id} product = {product} />
            ))}
          </div>
          )};
        </div>
    );
}
