import React, { useEffect, useState } from "react";
import { fetchTodayEvents, fetchFutureEvents, fetchPastEvents } from "../services/api";
import axios from "axios";

// const API_URL = "http://127.0.0.1:8000/api/events";

// console.log("API Request URL:", API_URL);

// axios.get(API_URL)
//   .then(response => console.log("API Response:", response.data))
//   .catch(error => console.error("API Error:", error.response));


const EventList = () => {
    const [todayEvents, setTodayEvents] = useState([]);
    const [futureEvents, setFutureEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);

    useEffect(() => {
        fetchTodayEvents().then(res => setTodayEvents(res.data));
        fetchFutureEvents().then(res => setFutureEvents(res.data));
        fetchPastEvents().then(res => setPastEvents(res.data));
    }, []);

    return (
        <div>
            <h2>Today's Events</h2>
            <ul>
                {todayEvents.map(event => (
                    <li key={event.id}>
                        <h3>{event.title}</h3>
                        <p><strong>Description:</strong> {event.description}</p>
                        <p><strong>Date:</strong> {event.date}</p>
                        {event.time && <p><strong>Time:</strong> {event.time}</p>}
                        {event.location && <p><strong>Location:</strong> {event.location}</p>}
                        <hr />
                    </li>
                ))}
            </ul>
            <h2>Future Events</h2>
            <ul>
                {futureEvents.map(event => (
                    <li key={event.id}>
                        <h3>{event.title}</h3>
                        <p><strong>Description:</strong> {event.description}</p>
                        <p><strong>Date:</strong> {event.date}</p>
                        {event.time && <p><strong>Time:</strong> {event.time}</p>}
                        {event.location && <p><strong>Location:</strong> {event.location}</p>}
                        <hr />
                    </li>
                ))}
            </ul>

            <h2>Past Events</h2>
            <ul>
                {pastEvents.map(event => (
                    <li key={event.id}>
                        <h3>{event.title}</h3>
                        <p><strong>Description:</strong> {event.description}</p>
                        <p><strong>Date:</strong> {event.date}</p>
                        {event.time && <p><strong>Time:</strong> {event.time}</p>}
                        {event.location && <p><strong>Location:</strong> {event.location}</p>}
                        <hr />
                    </li>
                ))}
            </ul>

            <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
    );
};

export default EventList;
