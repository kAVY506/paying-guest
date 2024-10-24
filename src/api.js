// src/api.js

const BASE_URL = 'http://localhost:6000/api/owners'; // Base URL with port number

// Fetch listings for a specific owner
export const fetchListings = async (ownerId) => {
    try {
        const response = await fetch(`${BASE_URL}/${ownerId}/listings`);
        if (!response.ok) {
            throw new Error('Failed to fetch listings');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

// Add a new listing for a specific owner
export const addListing = async (ownerId, listingData) => {
    try {
        const response = await fetch(`${BASE_URL}/${ownerId}/listings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(listingData),
        });
        if (!response.ok) {
            throw new Error('Failed to add listing');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Update an existing listing for a specific owner
export const updateListing = async (ownerId, listingId, listingData) => {
    try {
        const response = await fetch(`${BASE_URL}/${ownerId}/listings/${listingId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(listingData),
        });
        if (!response.ok) {
            throw new Error('Failed to update listing');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};

// Delete a listing for a specific owner
export const deleteListing = async (ownerId, listingId) => {
    try {
        const response = await fetch(`${BASE_URL}/${ownerId}/listings/${listingId}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete listing');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return null;
    }
};
