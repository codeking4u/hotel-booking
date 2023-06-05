import { Product } from "../types/productTypes";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "../types/productTypes";

interface ProductsState {
  loading: boolean;
  error: string | null;
  products: Product[];
}

const initialState: ProductsState = {
  loading: false,
  error: null,
  products: [],
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        products: [],
      };
    default:
      return state;
  }
};

export default productReducer;
