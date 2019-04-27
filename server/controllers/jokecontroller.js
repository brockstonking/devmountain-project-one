const axios = require('axios')
let joke = '';

module.exports = {
    read: (req, res) => {
        axios.get('https://api.chucknorris.io/jokes/random').then(results => {
            joke = results.data.value
        });
        res.status(200).send(joke)
    }
}