const dbConnection = require('../../database/db_connection');

const postData = (name, opinion, action_id, cb) => {
    dbConnection.query('INSERT INTO opinions (name, opinion, action_id) VALUES ($1, $2, $3)',
    [name, opinion, action_id],
    (err, res) => {
        if (err) return cb(err);
        cb(null, res);
    });
};

module.exports = postData;