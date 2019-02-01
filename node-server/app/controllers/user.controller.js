const User = require('../models/user.model.js');
exports.register = (req, res) => {
  // Validate request
  console.log(req.body);
  if(!req.body.user_name && !req.body.user_password && !req.body.user_email && !req.body.user_gender && !req.body.user_phone) {
    return res.status(400).send({
      message: "please fill all register entry required"
    });
  }

  // Create a Note
    const user = new User({
    user_name: req.body.user_name,
    user_password: req.body.user_password,
    user_email: req.body.user_email,
    user_gender: req.body.user_gender,
    user_phone: req.body.user_phone
  });

  // Save Note in the database
  user.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Note."
    });
  });
};
exports.login = (req, res) => {
  // Validate request
  console.log(req.body);
  if(!req.body.user_email && !req.body.user_password) {
    return res.status(400).send({
      message: "please fill all login entry required"
    });
  }

  // Create a Note
  const user = new User({
    user_email: req.body.user_name,
    user_password: req.body.user_password,
  });

  // Save Note in the database
  user.save()
    .then(data => {
      res.send(data);
    }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Note."
    });
  });
};