import { api } from "../libs/http";

// Function to fetch data from a specific endpoint
export const getAllBooks = async () => {
    try {
        const response = await api.get("/books/books")
        if (response.status >= 200 && response.status < 300) {
            const jsonData = await response.data;
            return jsonData;
        } else {
            throw new Error(`Failed to fetch data from "/books/books". Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching data from "/books/books', error);
        throw error;
    }
};
