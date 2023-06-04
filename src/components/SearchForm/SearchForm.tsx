import React, { useState, useEffect } from "react";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";

import { fetchBookings } from "../../store/actions/bookingActions";
import { Booking } from "../../store/types/bookingTypes";
import { Room } from "../../store/types/roomTypes";
import { getRooms } from "../../services/roomService";
interface SearchFormProps {
  onSearch: (startDate: string, endDate: string) => void;
}

const SearchForm = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const dispatch = useDispatch();
  const bookings = useSelector((state: RootState) => state.bookings.bookings);

  useEffect(() => {
    // Fetch the bookings data when the component mounts
    dispatch(fetchBookings());
  }, [dispatch]);

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
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
      console.log("Available rooms:", availableRooms);
    } catch (error) {
      console.error("Failed to fetch available rooms:", error);
    }
  };

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Dispatch the fetchBookings action with the selected dates
    // const bookingFetched = await dispatch(fetchBookings());
    const availableRooms = await fetchAvailableRooms(startDate, endDate);
    console.log("availableRooms", availableRooms);
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
