import axios from "axios";
import { Dispatch } from "redux";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "../types/productTypes";

import { Product } from "../types/productTypes";

const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

const fetchProductsSuccess = (products: Product[]) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

const fetchProductsFailure = (error: string) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchProducts = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get("http://localhost:8080/products")
      .then((response) => {
        console.log("responseresponseresponseresponse", response);
        dispatch(fetchProductsSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(fetchProductsFailure(error.message));
      });
  };
};
