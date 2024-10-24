import React, { useEffect, useState } from 'react';
import { fetchListings, addListing, updateListing, deleteListing } from '../api';
import ListingForm from '../components/ListingForm';
import ListingsList from '../components/ListingsList';

const OwnerDashboardPage = ({ ownerId }) => {
    const [listings, setListings] = useState([]);
    const [editingListing, setEditingListing] = useState(null);

    useEffect(() => {
        const getListings = async () => {
            const fetchedListings = await fetchListings(ownerId);
            setListings(fetchedListings);
        };
        getListings();
    }, [ownerId]);

    const handleSave = async (listingData) => {
        if (editingListing) {
            const updated = await updateListing(ownerId, editingListing._id, listingData);
            setListings((prev) => prev.map((listing) => (listing._id === updated.listing._id ? updated.listing : listing)));
        } else {
            const newListing = await addListing(ownerId, listingData);
            setListings((prev) => [...prev, newListing.listing]);
        }
        setEditingListing(null);
    };

    const handleDelete = async (listingId) => {
        await deleteListing(ownerId, listingId);
        setListings((prev) => prev.filter((listing) => listing._id !== listingId));
    };

    return (
        <div>
            <h1>Owner Dashboard</h1>
            <ListingForm
                ownerId={ownerId}
                listing={editingListing}
                onSave={handleSave}
                onCancel={() => setEditingListing(null)}
            />
            <h2>Listings</h2>
            <ListingsList
                listings={listings}
                onEdit={(listing) => setEditingListing(listing)}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default OwnerDashboardPage;
