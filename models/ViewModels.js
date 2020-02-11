exports.Task = class {
    /**
     * @param {String} title
     * @param {Date} start
     * @param {Date} end
     * @param {String} status
     */

     constructor(title, start, end, status) {
         this.title = title || '';
         this.startDate = start || new Date();
         this.endDate = end || new Date();
         this.status = status || '';
     }
}

exports.MainViewModel = class {
    /**
     * @param {String} title Title
     * @param {Array<Task>} tasks Array
     */

    constructor(title, tasks) {
        this.title = title || '';
        this.tasks = tasks || [];
    }
}