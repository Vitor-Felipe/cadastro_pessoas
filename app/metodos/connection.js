const mysql = require('mysql');
const config = require('../config/database')

const connection  = mysql.createPool(config);

module.exports = {
    getConnection: () => {
        return new Promise((resolve, reject) => {
            connection.getConnection((err, sql) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(sql);
                }
            });
        });
    }
}