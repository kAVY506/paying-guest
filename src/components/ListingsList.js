import React from 'react';

const ListingsList = ({ listings, onEdit, onDelete }) => {
    return (
        <ul>
            {listings.map((listing) => (
                <li key={listing._id}>
                    <strong>{listing.name}</strong> - {listing.location} (${listing.price})
                    <button onClick={() => onEdit(listing)}>Edit</button>
                    <button onClick={() => onDelete(listing._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ListingsList;
