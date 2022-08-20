//Imports
const router = require('express').Router();


//Route Imports
const apiRoutes = require('./api');


//Route Links
router.use('/api', apiRoutes);

//error message
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;