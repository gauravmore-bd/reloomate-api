const express = require('express');
const router = express.Router();
const { getOnboardingSteps } = require('../controllers/onboardingController');

// @route   GET /api/onboarding
router.get('/onboarding', getOnboardingSteps);

module.exports = router;
