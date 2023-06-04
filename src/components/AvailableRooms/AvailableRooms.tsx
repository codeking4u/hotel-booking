import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Room } from "../../store/types/roomTypes";
import RoomCard from "../RoomCard/RoomCard";

const AvailableRooms = () => {
  const availableRooms = useSelector(
    (state: RootState) => state.rooms.availableRooms
  );
  const startDate = useSelector(
    (state: RootState) => state.searchForm.startDate
  );
  const endDate = useSelector((state: RootState) => state.searchForm.endDate);

  return (
    <div>
      <h3> Rooms:</h3>
      {!availableRooms || availableRooms?.length === 0 ? (
        <p>No available rooms found.</p>
      ) : (
        <div className="room-list">
          {availableRooms?.map((room: Room) => (
            <RoomCard
              key={room.id}
              room={room}
              startDate={startDate}
              endDate={endDate}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AvailableRooms;
