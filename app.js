const express = require('express'),
bodyParser = require('body-parser');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const config = require('./config.js');
const app = express();
const PORT = process.env.PORT || config.port;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const db = require("./models");
db.sequelize.sync().then(function () {
  console.log("sequelize sync executed successfully.");
}).catch(function (e) {
  console.log("Error when executing sequelize sync: " + e);
});;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log('SAVICS OpenMRS service is listening on port: ' + PORT);
  require('./controllers');
})

exports.app = app;