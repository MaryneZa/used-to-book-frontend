// apiService.js

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/users`; // Assuming you have defined this in your .env file

// Function to fetch data from a specific endpoint
export const getAllUser = async () => {
    try {
        const response = await fetch(`${BASE_URL}/users`);
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

// Function to post data to a specific endpoint
export const getSpecificTypeOfBook = async (data : String) => {
    try {
        const dataLower = data.toLowerCase();
        const response = await fetch(`${BASE_URL}/books/${dataLower}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`Type of ${data} not found`);
        }
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error(`Error posting data to ${data}:`, error);
        throw error;
    }
};

// Add more fetch functions as needed
