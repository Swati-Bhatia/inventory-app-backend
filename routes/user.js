var express = require('express');
var router = express.Router();
var md5 = require('md5');
var jwt = require('jsonwebtoken');
var db = require('../db');


router.post('/login', async function(req, res, next) {
    try {
        console.log('---body params---', req.body);
        let { username, password } = req.body;
        const hashed_password = md5(password.toString());
        console.log('---hashes_password---', hashed_password);
        const sql = `SELECT * FROM users WHERE username = ? AND password = ?`
        db.query(
            sql, [username, hashed_password],
            function(err, result, fields) {
                if (err) {
                    res.send({ status: 404, data: err });
                } else {
                    let token = jwt.sign({ data: result }, 'secret')
                    res.send({ status: 200, data: result, token: token });
                }
            })
    } catch (error) {
        console.log(error);
        res.send({ status: 404, error: error });
    }
});
module.exports = router;