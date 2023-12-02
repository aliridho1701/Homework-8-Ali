const pool = require('./config')
const express = require('express')
const router = express.Router()


// Soal 2.1: Menampilkan data list film
router.get('/film', (req, res) => {

    const query = 'SELECT * FROM film'

    pool.query(query, (err, result)=>{
        if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).json(result.rows);
          }
    })
})

// Soal 2.2: Menampilkan data list film berdasarkan id
router.get('/film/:id', (req, res) => {
    const id = req.params.id
  
    const query = `SELECT * FROM film WHERE film_id IN ($1)`;
  
    pool.query(query, [id], (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(result.rows);
      }
    });
  });

// Soal 2.3: MEnampilkan data list category
router.get('/category', (req, res) => {

    const query = 'SELECT * FROM category'

    pool.query(query, (err, result)=>{
        if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).json(result.rows);
          }
    })
})

// Soal 2.4: MEnampilkan data list film berdasarkan category
router.get('/film/category/:id', (req, res) => {
    const {id} = req.params

    const query = `SELECT * f.name
    FROM film AS f
    JOIN film_category ON f.film_id = film_category.film_id
    JOIN c.category ON film_category.category_id = c.category_id
    WHERE c.category_id=$1`

    pool.query(query,[id], (err, result) => {
        if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).json(result.rows);
          }
    })
})

module.exports = router