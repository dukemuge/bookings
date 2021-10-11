import { QueryClient, QueryClientProvider } from "react-query";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import "../App.css";
import { FaCalendarAlt, FaDoorOpen, FaUsers } from "react-icons/fa";
import BookablesPage from "./Bookables/BookablesPage";
import BookingsPage from "./Bookings/BookingsPage";
import UsersPage from "./Users/UsersPage";
import UserPicker from "./Users/UserPicker.js";

export default function () {
    return (
        <Router>
            <div className="App">
                <header>

                </header>

                <Router>

                </Router>


            </div>
        </Router>

    );
}