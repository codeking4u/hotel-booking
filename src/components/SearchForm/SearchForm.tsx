import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  setStartDate,
  setEndDate,
} from "../../store/actions/searchFormActions";
import { fetchBookings } from "../../store/actions/bookingActions";
import { Booking } from "../../store/types/bookingTypes";
import { Room } from "../../store/types/roomTypes";
import { getRooms } from "../../services/roomService";
import { setAvailableRooms } from "../../store/actions/roomActions";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const dispatch = useDispatch();
  const startDate = useSelector(
    (state: RootState) => state.searchForm.startDate
  );
  const endDate = useSelector((state: RootState) => state.searchForm.endDate);
  const bookings = useSelector((state: RootState) => state.bookings.bookings);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the bookings data when the component mounts
    dispatch(fetchBookings());
  }, [dispatch]);

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setStartDate(event.target.value));
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEndDate(event.target.value));
  };

  const fetchAvailableRooms = async (startDate: string, endDate: string) => {
    const overlappingBookings = bookings.filter((booking: Booking) => {
      const bookingStartDate = new Date(booking.startDateUtc);
      const bookingEndDate = new Date(booking.endDateUtc);
      const searchStartDate = new Date(startDate);
      const searchEndDate = new Date(endDate);

      return (
        (searchStartDate >= bookingStartDate &&
          searchStartDate <= bookingEndDate) ||
        (searchEndDate >= bookingStartDate &&
          searchEndDate <= bookingEndDate) ||
        (bookingStartDate >= searchStartDate &&
          bookingStartDate <= searchEndDate) ||
        (bookingEndDate >= searchStartDate && bookingEndDate <= searchEndDate)
      );
    });

    console.log("Overlapping bookings:", overlappingBookings);

    try {
      const allRooms = await getRooms();

      const overlappingRoomIds = overlappingBookings.map(
        (booking: Booking) => booking.roomId
      );
      console.log("overlappingRoomIds", overlappingRoomIds);
      if (overlappingBookings.length === 0) return allRooms;
      const availableRooms = allRooms.filter(
        (room: Room) => !overlappingRoomIds.includes(room.id)
      );
      if (availableRooms.length === 0) {
        throw new Error("No available rooms found.");
      }
      return availableRooms;
    } catch (error) {
      console.error("Failed to fetch available rooms:", error);
    }
  };

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const availableRooms = await fetchAvailableRooms(startDate, endDate);
    dispatch(setAvailableRooms(availableRooms));

    // Redirect to the room selection page
    navigate("/available-rooms");
  };

  return (
    <div>
      <h2>Hotel Booking</h2>
      <form onSubmit={handleSearch}>
        <label htmlFor="start-date">Start Date:</label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={handleStartDateChange}
        />
        <br />
        <label htmlFor="end-date">End Date:</label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={handleEndDateChange}
        />
        <br />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
