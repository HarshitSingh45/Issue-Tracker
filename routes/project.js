const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('/create', projectController.create);
router.get('/info/:id', projectController.projectInfo);
router.post('/search', projectController.search);
router.post('/filter', projectController.filter);

module.exports = router;