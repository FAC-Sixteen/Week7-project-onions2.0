const bcrypt = require('bcryptjs');

// let storedSalt = '';

const hashPassword = (password, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        if (err) callback(err);
        // storedSalt = salt;
        // console.log(storedSalt, ' is storedSalt');
        bcrypt.hash(password, salt, callback);
    });
};


// to test hashPassword
// hashPassword('abc123', (err, result) => {
//     if (err) console.log(err, ' is err');
//     console.log(result, ' is result for jk');
    // console.log(storedSalt, ' is storedSalt outside')
// });

// module.exports = {
//     hashPassword,
//     comparePasswords
// }