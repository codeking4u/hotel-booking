import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBookingData } from "../../store/actions/bookingDataActions";
import { Room } from "../../store/types/roomTypes";

interface RoomCardProps {
  room: Room;
  startDate: string;
  endDate: string;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, startDate, endDate }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    dispatch(setBookingData(startDate, endDate, room, []));
    const bookingUrl = `/booking?id=${encodeURIComponent(
      room.id
    )}&startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(
      endDate
    )}`;
    navigate(bookingUrl);
  };

  return (
    <div className="room-card">
      <img src={room.image} alt={room.name} className="room-image" />
      <div className="room-details">
        <h2 className="room-name">{room.name}</h2>
        <p className="room-price">Price per night: ${room.pricePerNightNet}</p>
        <button onClick={handleBookNowClick}>Book Now</button>
      </div>
    </div>
  );
};

export default RoomCard;
