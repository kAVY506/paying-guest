const express = require('express');
const router = express.Router();
const {
    getListings,
    addListing,
    updateListing,
    deleteListing,
    getBookings,
} = require('../controllers/ownerController');

router.route('/:ownerId/listings')
    .get(getListings)
    .post(addListing);

router.route('/:ownerId/listings/:id')
    .put(updateListing)
    .delete(deleteListing);

router.route('/:ownerId/bookings/:listingId')
    .get(getBookings);

module.exports = router;
