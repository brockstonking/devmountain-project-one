const axios = require('axios')
let favorites = [];
i = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(favorites.reverse())
    },
    add: (req, res) => {
        let entry = {
            id: i,
            category: req.body.category,
            type: req.body.type,
            difficulty: req.body.difficulty, 
            question: req.body.question,
            correct_answer: req.body.correct_answer,
            incorrect_answers: req.body.incorrect_answers
        }
        favorites.unshift(entry)
        i++;
        res.status(200).send(favorites)
    },
    delete: (req, res) => {
        let index = 'monkey';
        favorites.reverse().forEach((e, i)=>{
            if (Number(req.query.id) === e.id) index = i
        })
        favorites.splice(index, 1)
        res.status(200).send(favorites.reverse())
    },
    edit: (req, res) => {
        favorites.reverse().forEach((e, i) => {
            if (Number(req.query.id) === e.id) {
                e.question = req.query.question
            }
        })
        res.status(200).send(favorites.reverse())
    }
}