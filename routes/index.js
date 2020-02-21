const router = require('express').Router();
const main = require('./main');
const crud = require('./crud');
// const checkErr = require('./checkError');

router.get('/', main);
router.get('/get/:id', crud.get);
router.post('/add', crud.add);
router.post('/update', crud.update);
router.get('/delete/:id', crud.delete);
// router.get('/error', ch)


module.exports = router;