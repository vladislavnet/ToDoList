const router = require('express').Router();
const main = require('./main');
const crud = require('./crud');
const api = require('./api');
// const checkErr = require('./checkError');

router.get('/', main);
router.get('/get/:id', crud.get);
router.post('/add', crud.add);
router.post('/update', crud.update);
router.get('/delete/:id', crud.delete);
// router.get('/error', ch)

router.get('/api', api.info);
router.get('/api/tasks', api.get);
router.post('/api/tasks', api.add);


module.exports = router;