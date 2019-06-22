const mysql = require('mysql');
const config = require('../config/database.js')

const connection  = mysql.createConnection(config);

exports.module = connection;