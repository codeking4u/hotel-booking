import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../../store";

const Booking: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const roomID = params.get("id");
  const startDate = params.get("startDate");
  const endDate = params.get("endDate");

  const room = useSelector((state: RootState) => state.bookingData.room);

  // Fetch additional data or perform any necessary actions based on the URL parameters and room data

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
          {/* Display additional room details */}
        </div>
      )}
      {/* Display additional booking details */}
    </div>
  );
};

export default Booking;
