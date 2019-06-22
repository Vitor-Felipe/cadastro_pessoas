module.exports = {

    get: (sql) => {
        return new Promise((resolve, reject) => {
            sql.query('CALL user_list()', (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    },
    getByLogin: (sql, body) => {
        return new Promise((resolve, reject) => {
            sql.query('CALL user_bylogin(?)', [body.login], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    },
    post: (sql,body) => {
        return new Promise((resolve, reject) => {
            sql.query(`CALL user_add(?,?,?)`, [body.name, body.login, body.password], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    },
    put: (sql,body) => {
        return new Promise((resolve, reject) => {
            sql.query('CALL user_update(?,?,?,?)', [body.user_id, body.name, body.login, body.password], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    },
    delete_user: (sql,body) => {
        return new Promise((resolve, reject) => {
            sql.query('CALL user_delete(?)', [body.user_id], (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }

}