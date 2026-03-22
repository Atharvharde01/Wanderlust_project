const express=require("express");
const router= express.Router({mergeParams:true});
const wrapAsync =require("../utils/wrapAsync.js");
const ExpressError =require("../utils/ExpressError.js");

const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");


const reviewContoller = require("../controllers/reviews.js");

// Reviews
// Post Review Route
router.post("/",isLoggedIn,validateReview , wrapAsync(reviewContoller.createReview));

// Delete Review Route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewContoller.destroyReview));

module.exports = router;