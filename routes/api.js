let db = require('../utils/sqlitedb');

exports.info = (r, q) => {
    q.render('api');
};

exports.auth = (r, q, next) => {
    db.getRole(r.query).then(role => {
        r.isAdmin = role === 'Admin';
        r.isUser = role === 'Admin' || role === 'User';
        if(r.isUser) {
            next();
        } else {
            q.status(401).json('Login or password is incorrect');
        }
    });
};

exports.get = (r, q) => {
    db.getTasks(+r.query.id).then(item => {
        q.json(item || {});
    });
};

exports.add = (r, q) => {
    console.log(r.body);
    db.getStatuses(+r.body.status).then(status => {
        console.log(status);
        r.body.status = status;
        if(r.isAdmin === true) {
            db.addTask(r.body).then(x => {
                db.getLastTask().then(task => {
                    q.json(task);
                });
            });
        } else {
            q.status(403).json('Вы не можете добавлять записи');
        }
    }); 
};

exports.remove = (r, q) => { 
    db.getStatuses(+r.body.status).then(status => {
        console.log(status);
        r.body.status = status;
        if(r.isAdmin === true) {
            db.removeTask(r.body.id)
             q.json(`Запись с id = ${r.body.id} удалена`);
        } else {

            q.status(403).json('Вы не можете удалять записи');
        }
    }); 
};

exports.update = (r, q) => { 
    db.getStatuses(+r.body.status).then(status => {
        console.log(status);
        r.body.status = status;
        if(r.isAdmin === true) {
            db.updateTask(r.body);
             q.json(`Запись обновлена`);
        } else {            
            q.status(403).json('Вы не можете обновлять записи');
        }
    }); 
};