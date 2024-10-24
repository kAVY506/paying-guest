import React, { useState,  } from 'react';

const ListingForm = ({ ownerId, listing, onSave, onCancel }) => {
    const [name, setName] = useState(listing ? listing.name : '');
    const [location, setLocation] = useState(listing ? listing.location : '');
    const [price, setPrice] = useState(listing ? listing.price : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ name, location, price });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default ListingForm;
