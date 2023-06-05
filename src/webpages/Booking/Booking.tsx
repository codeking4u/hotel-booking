import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../../store";
import { Product } from "../../store/types/productTypes";
import { fetchProducts } from "../../store/actions/productActions";

const Booking: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const roomID = params.get("id");
  const startDate = params.get("startDate");
  const endDate = params.get("endDate");

  const room = useSelector((state: RootState) => state.bookingData.room);
  const products = useSelector(
    (state: RootState) => state.productsData.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h2>Booking Details</h2>
      <p>Booking ID: {roomID}</p>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>

      {room && (
        <div>
          <h3>Room Details</h3>
          <p>Room Name: {room.name}</p>
          <p>Room Price: {room.pricePerNightNet}</p>
        </div>
      )}
      {"products "}
      {JSON.stringify(products)}
      {products && (
        <div>
          <h3>Products</h3>
          {products.map((product: Product) => (
            <div key={product.id}>
              <label>
                <input type="checkbox" value={product.id} />
                {product.name} - {product.priceNet}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Booking;
