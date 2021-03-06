
const { MainViewModel } = require('../models');
const db = require('../utils/sqlitedb');

let flag = 0;

module.exports = (r, q) => {
    db.getTasks().then(task => {
        db.getStatuses().then(statuses => {
            let model = new MainViewModel('TODO LIST', task, statuses);
            q.render('index', model);
            //Логирование
            if(flag++ < 1)
                db.addLog("Пользователь зашёл", Date().toLocaleString().substr(16,8));
        });
    });
}