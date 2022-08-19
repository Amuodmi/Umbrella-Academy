const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    where: {
      category_id: req.session.product_id
    },
    include: [
      {model: Product}
    ]
  })
  .then(categoryData => res.json(categoryData))
  .catch ( c => {
    console.log(c); res.status(500).json(c)
  });

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {model: Product}
    ]
    })
    .then(categoryData => {
      if(!categoryData){
        res.status(404).json({message: 'no category found with this id'});
        return;
      };
      res.json(categoryData);
    })
    .catch(c => {console.log(c); res.status(500).json(c)});
  });

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
