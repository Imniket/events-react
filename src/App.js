import React from "react";
import EventList from "./components/EventList";

function App() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center mb-4">Event Management</h1>
                </div>
                <div className="col-12">
                    <EventList />
                </div>
            </div>
        </div>
    );
}

export default App;
