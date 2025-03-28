import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api";

export const fetchEvents = async () => axios.get(`${API_URL}/events`);
export const fetchTodayEvents = async () => axios.get(`${API_URL}/events/today`);
export const fetchFutureEvents = async () => axios.get(`${API_URL}/events/future`);
export const fetchPastEvents = async () => axios.get(`${API_URL}/events/past`);
