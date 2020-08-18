const express = require('express');
const router = express.Router();
const User = require('../Models/User');

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.send(err);
  }
});

router.post('/', async (req, res) => {
  const { name, password, hasSubscription } = req.body;
  const user = new User({ name, password, hasSubscription });
  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
