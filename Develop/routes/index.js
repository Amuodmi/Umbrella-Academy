//Imports
const router = require('express').Router();


//Route Imports
const apiRoutes = require('./api');
const categoryRoutes= require('./category-routes');
const productRoutes= require('/product-routes');
const tagRoutes= require('/tag-routes');


//Route Links
router.use('/api', apiRoutes);
router.use('/', categoryRoutes);
router.use('/', productRoutes);
router.use('/', tagRoutes);

//error message
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;