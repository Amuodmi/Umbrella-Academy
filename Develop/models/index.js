// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {foreignKey: 'category_id'})

// Categories have many Products
Category.hasMany(Products, {foreignKey: 'product_id'})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {foreignKey: 'tag_id'})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Products,{foreignKey: 'product_tag'})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};