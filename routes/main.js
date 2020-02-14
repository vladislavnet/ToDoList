// module.exports = function (r,q) {
//     q.render('index');
// }

// const {Task, MainViewModel} = require('../models/ViewModels');

// module.exports = function (r,q) {
//     let model = new MainViewModel('TODO LIST');
//     model.tasks = [
//         // new Task('Title 1', new Date(), new Date(),'Finished'),
//         // new Task('Title 1', new Date(), new Date(),'In work'),
//         // new Task('Title 1', new Date(), new Date(),'In work'),
//         // new Task('Title 1', new Date(), new Date(),'Finished'),
//     ];
//     q.render('index', model);
// }

const {MainViewModel} = require('../models');
const db = require('../utils/localeStorage');

module.exports = (r, q) => {
    let model = new MainViewModel('TODO LIST', db.getTasks(), db.getStatuses());
    q.render('index', model);
}