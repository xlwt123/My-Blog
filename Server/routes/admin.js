module.exports = app => {
  const express = require('express');
  const jwt = require('jsonwebtoken');
  const CONFIG = require('../config');
  const User = require('../models/User');
  const router = express.Router({
    mergeParams: true
  })

  router.get('/', async (req, res) => {
    const queryOptions = {};
    if (req.Model.modelName === 'Article') {
      queryOptions.populate = 'labels';
    }
    const items = await req.Model.find().setOptions(queryOptions);
    res.send(items);
  })

  router.get('/:id', async (req, res) => {
    const item = await req.Model.findById(req.params.id);
    res.send(item);
  })

  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body);
    res.send(model);
  })

  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
    res.send(model);
  })

  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id);
    res.send({
      success: true
    });
  })

  const auth = async (req, res, next) => {
    const token = (req.headers.authorization).split(' ').pop();
    if (token === 'undefined') {
      return res.status(401).send({
        message: '请登录'
      })
    }
    const { id } = jwt.verify(token, CONFIG.SECRTE);
    if (!id) {
      return res.status(401).send({
        message: '请登录'
      })
    }
    req.user = await User.findById(id);
    if (!req.user) {
      return res.status(401).send({
        message: '请登录'
      })
    }
    next();
  }

  app.use('/admin/api/rest/:resource', auth, async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource);
    req.Model = require(`../models/${modelName}`);
    next();
  }, router)

  const multer = require('multer');
  const upload = multer({
    dest: __dirname + '../../uploads'
  });

  app.post('/admin/api/uploads', auth, upload.single('file'), async (req, res) => {
    const file = req.file;
    file.url = `http://localhost:3000/uploads/${file.filename}`;
    res.send(file);
  })

  app.post('/admin/api/login', async (req, res) => {
    const {
      username,
      password
    } = req.body;
    const user = await User.findOne({
      username
    }).select('+password');
    if (!user) {
      return res.status(422).send({
        message: '用户名错误'
      })
    }
    const isValid = require('bcrypt').compareSync(password, user.password);
    if (!isValid) {
      return res.status(422).send({
        message: '密码错误'
      })
    }
    const token = jwt.sign({ id: user._id }, CONFIG.SECRTE);
    res.send(token)
  });

  app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    });
  });
}