const db = require('../config/db');

const getAllMessages = (callback) => {
    const sql = 'SELECT * FROM messages ORDER BY created_at ASC';
    db.query(sql, (err, results) => {
        if (err) return callback(err, null);
        callback(null, results);
    });
};

const createMessage = (content, sender, callback) => {
    const sql = 'INSERT INTO messages (content, sender, created_at) VALUES (?, ?, NOW())';
    db.query(sql, [content, sender], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
    });
};

module.exports = {
    getAllMessages,
    createMessage
};
