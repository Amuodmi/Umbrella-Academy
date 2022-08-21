const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    attributes: ['id','tag_name'],
    include: [
      {model: Product,
      attributes: ['id', 'product_name','price','stock','category_id']}
    ]
  })
  .then(tagData => res.json(tagData))
  .catch ( c => {
    console.log(c); res.status(500).json(c)
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {model: Product}
    ]
  })
  .then(tagData => {
    if (!tagData) {
      res.status(404).json({message: 'no Tag found with this id'});
      return;
    };
    res.json(tagData);
  })
  .catch( c => {console.log(c); res.status(500).json(c)});
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name,
  })
  .then(tagData => res.json(tagData))
  .catch(c => {console.log(c); res.status(500).json(c)});
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req)({
    where: {
      id: req.params.id,
      attributes: ['id','tag_name'],
    include: [
      {model: Product,
      attributes: ['id', 'product_name','price','stock','category_id']}
    ]
    }
  })
  .then(tagData => {
    if(tagData) {
      res.json(tagData);
    }
    else {
      res.status(404).json({message: 'Tag already exists in category'});
    }
  })
  .catch (c => {console.log(c); res.status(500).json(c)});
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(tagData => {
    if (!tagData){
    res.status(404).json({message: 'no Tag found with this ID'});
    return;
    }
    res.json(tagData);
  })
  .catch(c => {console.log(c); res.status(500).json(c)});
});

module.exports = router;
