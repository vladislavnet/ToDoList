const router = require('express').Router();
const main = require('./main');
const crud = require('./crud');

router.get('/', main);
router.post('/add', crud.add);

module.exports = router;