const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes");
const checkRoute = require('./routes/CheckRoute');
const favicon = require('express-favicon');

let port = process.env.PORT || 5000;
let app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(favicon(__dirname + '/public/favicon.png'));

app.use("/", routes);

app.use(checkRoute);

app.listen(port, () => {
    console.info(`App run on http://localhost:${port}`);
});