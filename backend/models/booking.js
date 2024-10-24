const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    listingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing' },
    userId: { type: String, required: true }, // Use appropriate user schema
    bookingDate: { type: Date, required: true },
    status: { type: String, enum: ['confirmed', 'canceled'], default: 'confirmed' },
});

module.exports = mongoose.model('Booking', bookingSchema);
