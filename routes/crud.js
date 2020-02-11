const {Task, MainViewModel} = require('../models/ViewModels');

exports.add = (r,q) => {
    console.log(r.body);
    let model = new MainViewModel('POST RESULT');
    model.tasks = [r.body];
    q.render('index', model)
}