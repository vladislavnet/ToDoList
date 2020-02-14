const {MainViewModel} = require('../models');
let db = require('../utils/localeStorage');

// exports.add = (r,q) => {
//     console.log(r.body);
//     let model = new MainViewModel('POST RESULT');
//     model.tasks = [r.body];
//     q.render('index', model)
// }

exports.get = (r, q) => {
    var item = db.getTasks(+r.params.id);
    if(item){
        let model = new MainViewModel('TODO LIST'
                                        , db.getTasks()
                                        , db.getStatuses()
                                        ,item);
        return q.render('index', model);
    }
    q.redirect('/');
}

exports.add = (r, q) => {
    r.body.status = db.getStatuses(+r.body.status);
    db.addTask(r.body);
    q.redirect('/');
}

exports.update = (r, q) => {
    r.body.id = +r.body.id;
    r.body.status = db.getStatuses(+r.body.status);
    db.updateTask(r.body);
    q.redirect('/');
}

exports.delete = (r, q) => {
    db.removeTask(+r.params.id);
    q.redirect('/');
}