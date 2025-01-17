const LeaderboardController = require('./LeaderboardController');
const UserController = require('./UserController');
const BespokeController = require('./BespokeController');
const SpotlightController = require('./SpotlightController');
const CollectableController = require('./CollectableController');
const AuthController = require('./AuthController');
const ArtistController = require('./ArtistController');
const ClaimController = require('./ClaimController');
const BidRegistrationController = require('./BidRegistrationController');

// Private
const AdminArtistController = require('./AdminArtistController');
const AdminCollectableController = require('./AdminCollectableController');
const AdminClaimController = require('./AdminClaimController');
const AdminEligibleClaimantController = require('./AdminEligibleClaimantController');
const AdminConstantsController = require('./AdminConstantsController');
const AdminMediaController = require('./AdminMediaController');
const AdminSpotlightController = require("./AdminSpotlightController")
const AdminFeaturedDropController = require('./AdminFeaturedDropController');
const AdminClaimsController = require('./AdminClaimsController');

module.exports = {
    LeaderboardController,
    UserController,
    BespokeController,
    SpotlightController,
    CollectableController,
    BidRegistrationController,
    AdminArtistController,
    AdminCollectableController,
    AdminConstantsController,
    AdminMediaController,
    AuthController,
    ArtistController,
    ClaimController,
    AdminSpotlightController,
    AdminClaimController,
    AdminEligibleClaimantController,
    AdminFeaturedDropController,
    AdminClaimsController,
};
