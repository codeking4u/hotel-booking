export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export interface Product {
  id: number;
  name: string;
  priceNet: number;
  priceTaxPercentage: number;
  chargeMethod: string;
  image: string;
}
