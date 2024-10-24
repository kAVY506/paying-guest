const Listing = require('../models/listing');
const Booking = require('../models/booking');

// Manage Listings
const getListings = async (req, res) => {
    try {
        const listings = await Listing.find({ ownerId: req.params.ownerId });
        res.status(200).json(listings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching listings', error });
    }
};

const addListing = async (req, res) => {
    try {
        const newListing = new Listing({ ...req.body, ownerId: req.params.ownerId });
        await newListing.save();
        res.status(201).json({ message: 'Listing added successfully', listing: newListing });
    } catch (error) {
        res.status(500).json({ message: 'Error adding listing', error });
    }
};

const updateListing = async (req, res) => {
    try {
        const updatedListing = await Listing.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedListing) {
            return res.status(404).json({ message: 'Listing not found' });
        }
        res.status(200).json({ message: 'Listing updated successfully', listing: updatedListing });
    } catch (error) {
        res.status(500).json({ message: 'Error updating listing', error });
    }
};

const deleteListing = async (req, res) => {
    try {
        const deletedListing = await Listing.findByIdAndDelete(req.params.id);
        if (!deletedListing) {
            return res.status(404).json({ message: 'Listing not found' });
        }
        res.status(200).json({ message: 'Listing deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting listing', error });
    }
};

// View Bookings
const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ listingId: req.params.listingId }).populate('listingId');
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings', error });
    }
};

module.exports = {
    getListings,
    addListing,
    updateListing,
    deleteListing,
    getBookings,
};
