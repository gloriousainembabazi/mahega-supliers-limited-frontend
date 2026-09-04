// src/services/api.js

const API_URL = "http://127.0.0.1:8000/api";


// ==========================
// SERVICES
// ==========================
export const getServices = async () => {
    const response = await fetch(`${API_URL}/services/services/`);
    
    if (!response.ok) {
        throw new Error("Failed to fetch services");
    }

    return response.json();
};


// ==========================
// PRODUCTS
// ==========================
export const getProducts = async () => {
    const response = await fetch(`${API_URL}/products/products/`);

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    return response.json();
};


// ==========================
// PROJECTS
// ==========================
export const getProjects = async () => {
    const response = await fetch(`${API_URL}/projects/projects/`);

    if (!response.ok) {
        throw new Error("Failed to fetch projects");
    }

    return response.json();
};


// ==========================
// TEAM
// ==========================
export const getTeam = async () => {
    const response = await fetch(`${API_URL}/team/team/`);

    if (!response.ok) {
        throw new Error("Failed to fetch team members");
    }

    return response.json();
};


// ==========================
// NEWS / BLOG
// ==========================
export const getNews = async () => {
    const response = await fetch(`${API_URL}/news/news/`);

    if (!response.ok) {
        throw new Error("Failed to fetch news");
    }

    return response.json();
};


// ==========================
// CONTACT MESSAGE
// ==========================
export const sendMessage = async (data) => {

    const response = await fetch(`${API_URL}/contact/messages/`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(data),

    });


    if (!response.ok) {
        throw new Error("Failed to send message");
    }


    return response.json();
};


// ==========================
// DASHBOARD STATISTICS
// ==========================
export const getDashboardStats = async () => {

    const response = await fetch(
        `${API_URL}/dashboard/stats/`
    );


    if (!response.ok) {
        throw new Error("Failed to fetch dashboard statistics");
    }


    return response.json();
};