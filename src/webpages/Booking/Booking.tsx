import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../../store";
import { Product } from "../../store/types/productTypes";
import { setBookingData } from "../../store/actions/bookingDataActions";
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
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const isSelected = (productId: string) => {
    return selectedProducts.includes(productId);
  };

  const handleCheckboxChange = (productId: string) => {
    if (isSelected(productId)) {
      setSelectedProducts((prevSelected) =>
        prevSelected.filter((id) => id !== productId)
      );
    } else {
      setSelectedProducts((prevSelected) => [...prevSelected, productId]);
    }

    dispatch(setBookingData(startDate, endDate, room, selectedProducts));
  };

  const calculateTotalCost = () => {
    let total = calculateRoomCost();

    selectedProducts.forEach((productId) => {
      const selectedProduct = products.find(
        (product) => product.id === productId
      );
      if (selectedProduct) {
        total += selectedProduct.priceNet;
      }
    });

    return total;
  };

  const calculateRoomCost = () => {
    if (room && startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const days = Math.ceil(
        (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
      );
      return room.pricePerNightNet * days;
    }

    return 0;
  };

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

      {products && (
        <div>
          <h3>Products</h3>
          {products.map((product: Product) => (
            <div key={product.id}>
              <label>
                <input
                  type="checkbox"
                  value={product.id}
                  checked={isSelected(product.id)}
                  onChange={() => handleCheckboxChange(product.id)}
                />
                {product.name} - {product.priceNet}
              </label>
            </div>
          ))}
        </div>
      )}

      <div>
        <h3>Total Room Cost</h3>
        <p>{calculateRoomCost()}</p>
      </div>

      <div>
        <h3>Total Cost</h3>
        <p>{calculateTotalCost()}</p>
      </div>
    </div>
  );
};

export default Booking;
