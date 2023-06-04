import React, { useEffect } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import AvailableRooms from "../../components/AvailableRooms/AvailableRooms";

export default function Home() {
  return (
    <div>
      <SearchForm />
      <AvailableRooms />
    </div>
  );
}
