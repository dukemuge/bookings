import { QueryClient, QueryClientProvider } from "react-query";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import React from 'react';

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
                    <nav>
                        <ul>
                            <li>
                                <Link to="/bookings" className="btn   btn-header"></Link>
                                <FaCalendarAlt />
                                <span>Bookings</span>
                            </li>
                            <li>
                                <Link to="/bookables" className="btn   btn-header"></Link>
                                <FaDoorOpen />
                                <span>Bookables</span>
                            </li>
                            <li>
                                <Link to="/users" className="btn   btn-header"></Link>
                                <FaUsers />
                                <span>Users</span>
                            </li>
                        </ul>
                    </nav>

                </header>
                <UserPicker />

                <Routes>
                    <Route path="/bookings" element={<BookingsPage />} />
                    <Route path="/bookables" element={<BookablesPage />} />
                    <Route path="/users" element={<UsersPage />} />
                </Routes>


            </div>
        </Router>

    );
}