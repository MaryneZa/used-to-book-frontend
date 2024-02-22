// apiService.js

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/auth`; // Assuming you have defined this in your .env file

// Function to fetch data from a specific endpoint
export const userLogin = async (data: any) => {
    try {
        const response = await fetch(`${BASE_URL}/login`, data);
        console.log(response)
        if (!response.ok) {
            throw new Error('Failed to fetch data from "/book"');
        }
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error fetching data from "/book', error);
        throw error;
    }
};
