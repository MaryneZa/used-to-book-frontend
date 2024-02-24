import { api } from "../libs/http";

// Function to fetch data from a specific endpoint
export const getAllUser = async () => {
    try {
        const response = await api.get("/users/users")
        if (response.status >= 200 && response.status < 300) {
            const jsonData = await response.data;
            return jsonData;
        } else {
            throw new Error(`Failed to fetch data from "/users/users". Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching data from "/users/users', error);
        throw error;
    }
};
