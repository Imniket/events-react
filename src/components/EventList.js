import React, { useEffect, useState } from "react";
import { fetchTodayEvents, fetchFutureEvents, fetchPastEvents } from "../services/api";

const EventList = () => {
    const [todayEvents, setTodayEvents] = useState([]);
    const [futureEvents, setFutureEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);

    const loadEvents = () => {
        fetchTodayEvents().then(res => setTodayEvents(res.data));
        fetchFutureEvents().then(res => setFutureEvents(res.data));
        fetchPastEvents().then(res => setPastEvents(res.data));
    };

    useEffect(() => {
        loadEvents();
    }, []);

    return (
        <div>
            <div className="mb-4">
                <button className="btn btn-primary" onClick={loadEvents}>Refresh Events</button>
            </div>

            <h2 className="mb-4 mt-2">Today's Events</h2>
            <ul>
                {todayEvents.length === 0 ? (
                    <div className="no-events">No events available</div>
                ) :
                    (todayEvents.map(event => (
                        <li key={event.id}>
                            <h3>{event.title}</h3>
                            <p><strong>Description:</strong> {event.description}</p>
                            <p><strong>Date:</strong> {event.date}</p>
                            {event.time && <p><strong>Time:</strong> {event.time}</p>}
                            {event.location && <p><strong>Location:</strong> {event.location}</p>}
                            <hr />
                        </li>
                    )))}
            </ul>
            <h2 className="mb-4 mt-2">Future Events</h2>
            <ul>
                {futureEvents.length === 0 ? (
                    <div className="no-events">No events available</div>

                ) : (

                    futureEvents.map(event => (
                        <li key={event.id}>
                            <h3>{event.title}</h3>
                            <p><strong>Description:</strong> {event.description}</p>
                            <p><strong>Date:</strong> {event.date}</p>
                            {event.time && <p><strong>Time:</strong> {event.time}</p>}
                            {event.location && <p><strong>Location:</strong> {event.location}</p>}
                            <hr />
                        </li>
                    ))
                )
                }

            </ul>

            <h2 className="mb-4 mt-2">Past Events</h2>
            <ul>
                {
                    pastEvents.length === 0 ? (
                        <div className="no-events">No events available</div>

                    ) : (

                        pastEvents.map(event => (
                            <li key={event.id}>
                                <h3>{event.title}</h3>
                                <p><strong>Description:</strong> {event.description}</p>
                                <p><strong>Date:</strong> {event.date}</p>
                                {event.time && <p><strong>Time:</strong> {event.time}</p>}
                                {event.location && <p><strong>Location:</strong> {event.location}</p>}
                                <hr />
                            </li>
                        ))
                    )
                }
            </ul>
        </div>
    );
};

export default EventList;
