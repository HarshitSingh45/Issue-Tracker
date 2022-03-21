const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issueController');

router.post('/create', issueController.create);

module.exports = router;