const express = require('express');
const router = express.Router();
const { getOnboardingSteps } = require('../controllers/onboardingController');

router.get('/onboarding', getOnboardingSteps);

module.exports = router;
