
const express = require('express');
const router = express.Router();
const diaryCtrl = require('../../controllers/api/diary');

// GET /api/items
router.get('/', diaryCtrl.index);
// GET /api/items/:id
router.get('/:id', diaryCtrl.show);

module.exports = router;