// GET /api/onboarding
exports.getOnboardingSteps = (req, res) => {
  const steps = [
    {
      title: 'Find Your Ideal Roommate',
      description: 'We match you based on lifestyle, preferences, and interests.',
      image: 'https://i.imgur.com/xg4tKcm.png'
    },
    {
      title: 'Verified Listings Only',
      description: 'All homes and hosts are verified to keep you safe and stress-free.',
      image: 'https://i.imgur.com/ukrTYbt.png'
    },
    {
      title: 'Smooth Onboarding',
      description: 'Complete your profile and start exploring housing opportunities.',
      image: 'https://i.imgur.com/g1I1smW.png'
    }
  ];

  res.json(steps);
};
