const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load profile validation
const validateProfileInput = require('../../validation/profile');

// Load User model
const Profile = require('../../models/Profile');

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Profile works' }));

// @route   POST api/profile
// @desc    Create profile
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const profileFields = {};

    profileFields.user = req.user.id;

    if (req.body.handle) {
      profileFields.handle = req.body.handle;
    } else {
      profileFields.handle = '';
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        //Update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        // Create

        // Check if handle exists
        Profile.findOne({ handle: profileFields.handle }).then(profile => {
          if (profile) {
            errors.handle = 'This profile already exists';
            res.status(400).json(errors);
          }

          // Save Profile
          new Profile(profileFields).save().then(profile => res.json(profile));
        });
      }
    });
  }
);

// @route   Post api/profile/seasons
// @desc    Add draft history for profile
// @access  Private
router.post(
  '/seasons',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      const newSeason = {
        year: req.body.year,
        qb: req.body.qb,
        rb1: req.body.rb1,
        rb2: req.body.rb2,
        wr1: req.body.wr1,
        wr2: req.body.wr2,
        te: req.body.te,
        dst: req.body.dst,
        k: req.body.k
      };

      // Add to seasons array
      profile.seasons.unshift(newSeason);

      profile.save().then(profile => res.json(profile));
    });
  }
);

module.exports = router;
