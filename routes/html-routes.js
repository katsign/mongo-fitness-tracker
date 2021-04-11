const path = require('path');

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.sendFile(path.resolve('public/index.html'));
    });

    app.get('/exercise', (req, res) => {
        res.sendFile(path.resolve('public/exercise.html'));
    });

    app.get('/stats', (req, res) => {
        res.sendFile(path.resolve('public/stats.html'))
    });

}