const controller = {
    index: (req, res) => {
        res.render('index');
    },
    error: (req, res) => {
        res.render('error');
    },
    lamps: (req, res) => {
        res.render('lamps');
    }
}

module.exports = controller;