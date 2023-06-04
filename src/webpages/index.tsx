import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "./Home/Home";
import Booking from "./Booking/Booking";
import RoomSelection from "./RoomSelection/RoomSelection";

function WebPages() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/available-rooms" element={<RoomSelection />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default WebPages;
