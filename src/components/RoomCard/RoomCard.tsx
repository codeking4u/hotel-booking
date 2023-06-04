import React from "react";
import { Room } from "../../store/types/roomTypes";

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="room-card">
      <img src={room.image} alt={room.name} className="room-image" />
      <div className="room-details">
        <h2 className="room-name">{room.name}</h2>
        <p className="room-price">Price per night: ${room.pricePerNightNet}</p>
      </div>
    </div>
  );
};

export default RoomCard;
