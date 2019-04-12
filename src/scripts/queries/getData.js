const dbConnection = require('../../database/db_connection');

const actionQuery = cb => {
    dbConnection.query('SELECT * FROM actions', (err, res) => {
        if (err) return cb(err);
        cb(null, res.rows);
    });
};

//FINISH THIS
const opinionQuery = (cb, url) => {
    let id = url.split('=')[1];
    dbConnection.query(`SELECT name, opinion, date FROM opinions WHERE action_id = $1`,[id],
    (err, res) => {
        if (err) return cb(err);
        cb(null, res.rows);
    });
};

module.exports = { actionQuery, opinionQuery };