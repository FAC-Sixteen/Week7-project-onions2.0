const dbConnection = require('../../database/db_connection');

const loginQuery = (username, callback) => {
   dbConnection.query('SELECT password FROM users where username = $1',[username], (err, res) => {
        if (err) return cb(err);
        cb(null, res.rows);
    });
}

module.exports = { loginQuery };
