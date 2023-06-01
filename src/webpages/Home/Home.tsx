import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";

export default function Home() {
  const handleSearch = (startDate: string, endDate: string) => {
    // Perform search logic here, e.g., make an API call with the selected dates
    console.log("Search clicked:", startDate, endDate);
  };
  return (
    <div>
      <SearchForm onSearch={handleSearch} />
    </div>
  );
}
