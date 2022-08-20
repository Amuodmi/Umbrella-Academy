const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      {model: Product,
      attributes: ['id', 'product_name', 'price', 'stock']}
    ]
  })
  .then(categoryData => {
    res.status(404).json({message: 'no category found with this ID'});
    return; 
  }),
  res.json(categoryData);
})
 .catch(err =>{
  console.log(err);
  res.status(500).json(err);
 });

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {model: Product,
      attributes: ['id', 'product_name', 'price', 'stock']}
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
  Category.create({
    category_name: req.body.category_id,
    title: req.body.title
  })
  .then(categoryData => res.json(categoryData))
  .catch(c => {console.log(c); res.status(500),json(c)});
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
Category.updateCategory(req)
.then(categoryData => {
  if (categoryData){
  res.json(categoryData);
  }
  else {
    res.status(404).json({message: 'Category already exists'});
  }
})
.catch(c => {console.log(c); res.status(500).json(c)});
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
    .then(categoryData => {
      if(!categoryData){
        res.status(404).json({ message: 'no category found with that id'});
        return;
      }
      res.json(categoryData);
    })
    .catch(c => {console.log(c); res.status(500).json(c)})
  });
});

module.exports = router;
