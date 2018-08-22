const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load member validation
const validateMemberInput = require('../../validation/member');

// Load User model
const Member = require('../../models/Member');

// @route   GET api/member/test
// @desc    Tests member route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Member works' }));

// @route   POST api/member
// @desc    Create member
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateMemberInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const memberFields = {};

    memberFields.user = req.user.id;

    if (req.body.handle) {
      memberFields.handle = req.body.handle;
    } else {
      memberFields.handle = '';
    }

    Member.findOne({ user: req.user.id }).then(member => {
      if (member) {
        //Update
        Member.findOneAndUpdate(
          { user: req.user.id },
          { $set: memberFields },
          { new: true }
        ).then(member => res.json(member));
      } else {
        // Create

        // Check if handle exists
        Member.findOne({ handle: memberFields.handle }).then(member => {
          if (member) {
            errors.handle = 'This member already exists';
            res.status(400).json(errors);
          }

          // Save Member
          new Member(memberFields).save().then(member => res.json(member));
        });
      }
    });
  }
);

// @route   Post api/member/seasons
// @desc    Add draft history for member
// @access  Private
router.post(
  '/seasons',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateMemberInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Member.findOne({ user: req.user.id }).then(member => {
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
      member.seasons.unshift(newSeason);

      member.save().then(member => res.json(member));
    });
  }
);

module.exports = router;
