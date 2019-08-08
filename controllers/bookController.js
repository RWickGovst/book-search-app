// dependencies
const mongoose = require('mongoose');

// file imports
const db = require('../models');

module.exports = {

    findAll: (req, res) => {
        db.Book.find({

        }).then(dbBooks => {
            res.send('Find all was hit')
        }).catch(err => {
            res.err(err)
        })
        
    },
    findById: (req, res) => {
        db.Book.findOne({
            id: req.params.id
        }).then(singleBook => {

        }).catch(err => {
            res.err(err)
        })
        res.send('Find by ID was hit')
    },
    addBook: (req, res) => {
        res.send('Add book was hit')
    },
    updateBook: (req, res) => {
        res.send('Update book was hit')
    },
    deleteById: (req, res) => {
        res.send('Delete was hit')
    }
}