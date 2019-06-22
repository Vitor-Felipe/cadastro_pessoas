module.exports = {

    get: (connection) => {
        var options = {sql: 'CALL user_list()', nestTables: true};
        return new Promise((resolve, reject) => {
            connection.query(options, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    },
    post: (body) => {
        var options = {sql: 'CALL user_add(?)', nestTables: true};
        return new Promise((resolve, reject) => {
            connection.query(options, body, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    },
    put: (body) => {
        var options = {sql: 'CALL user_update(?)', nestTables: true};
        return new Promise((resolve, reject) => {
            connection.query(options, body, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }

}