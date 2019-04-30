const axios = require('axios')
let favorites = [];
i = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(favorites)
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
        favorites.push(entry)
        i++;
        res.status(200).send(favorites)
    },
    delete: (req, res) => {
        console.log(working)
    }
}