import { Room } from "./roomTypes";
/* interface RootState {
   Other state properties...
  bookingData: BookingData;
} */

interface BookingData {
  startDate: string;
  endDate: string;
  room?: Room;
}
