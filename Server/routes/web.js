module.exports = app => {
  const express = require('express');
  const router = express.Router({
    mergeParams: true
  })
  const Category = require('../models/Category.js');
  const Label = require('../models/Label.js');
  const Article = require('../models/Article.js');

  router.get('/categories/list', async (req, res) => {
    const items = await Category.find();
    res.send(items);
  })

  router.get('/labels/list', async (req, res) =>{
    const items = await Label.find();
    res.send(items);
  })
  
  router.get('/articles/list', async (req, res) =>{
    const items = await Article.find().populate('labels');
    res.send(items);
  })

  router.get('/articles/:id', async (req, res) => {
    const item = await Article.findById(req.params.id).populate('labels');
    res.send(item);
  })

  app.use('/web/api', router);
}