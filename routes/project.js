const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('/create', projectController.create);
router.get('/info/:id', projectController.projectInfo);

module.exports = router;