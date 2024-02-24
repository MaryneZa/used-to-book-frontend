import { api } from "../libs/http";


// Function to fetch data from a specific endpoint
export const userLogin = async (data: any) => {
    try {
        const response = await api.post("auth/login", data);
        if (response.status >= 200 && response.status < 300) {
            const jsonData = await response.data;
            return jsonData;
        } else {
            throw new Error(`Failed to fetch data from "/users/login". Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching data from "/users/login', error);
        throw error;
    }
};
