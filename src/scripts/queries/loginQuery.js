const dbConnection = require('../../database/db_connection');

const loginQuery = (username) => {
    return new Promise ((resolve, reject) => {
    dbConnection.query('SELECT password FROM users where username = $1',[username], (err, res) => {
        if (err) reject(err);
        else {
            resolve(res.rows[0].password);}
        })
    });
}

module.exports = loginQuery;
