const express = require('express');
const urlencoded = require('body-parser').urlencoded({extended: true});
const routes = require("./routes");

let app = express();
let port = 80;

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.use(urlencoded);

app.use("/", routes);

app.listen(port, () => {
    console.info(`App run on http://localhost:${port}`);
});