const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
router.get('/', homeController.homePage);
router.use('/project', require('./project'));
router.use('/issue', require('./issue'));

module.exports = router;