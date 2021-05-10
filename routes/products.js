var express = require('express');
var router = express.Router();
var db = require('../db');



router.get('/', async function(req, res, next) {
    try {
        console.log('---body params---', req.body);
        const sql = `SELECT * FROM products where status = 1`;
        db.query(
            sql,
            function(err, result, fields) {
                if (err) {
                    res.send({ status: 404, data: err });
                } else {
                    res.send({ status: 200, data: result });
                }
            })
    } catch (error) {
        console.log(error);
        res.send({ status: 404, error: error });
    }
});

router.get('/:id', async function(req, res, next) {
    try {
        console.log('---body params---', req.params);
        let product_id = req.params.id;
        const sql = `SELECT * FROM products where product_id = ?`;
        db.query(
            sql, [product_id],
            function(err, result, fields) {
                if (err) {
                    res.send({ status: 404, data: err });
                } else {
                    res.send({ status: 200, data: result });
                }
            })
    } catch (error) {
        console.log(error);
        res.send({ status: 404, error: error });
    }
});

router.put('/:id', async function(req, res, next) {
    try {
        console.log('---body params---', req.params);
        let product_id = req.params.id;
        const sql = `UPDATE products SET status = 0 WHERE product_id = ?`;
        db.query(
            sql, [product_id],
            function(err, result, fields) {
                if (err) {
                    res.send({ status: 404, data: err });
                } else {
                    res.send({ status: 200, data: result });
                }
            })
    } catch (error) {
        console.log(error);
        res.send({ status: 404, error: error });
    }
});

router.post('/', async function(req, res, next) {
    try {
        console.log('---body params---', req.body);
        let { product_name, category } = req.body;
        const sql = `INSERT INTO products (product_name, category) VALUES (?, ?)`
        db.query(
            sql, [product_name, category],
            function(err, result, fields) {
                if (err) {
                    res.send({ status: 404, data: err });
                } else {
                    res.send({ status: 200, data: result });
                }
            })
    } catch (error) {
        console.log(error);
        res.send({ status: 404, error: error });
    }
});

module.exports = router;