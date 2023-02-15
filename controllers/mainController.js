const mainController = {
    index: (req, res) => {
        res.render('index');
    },
    error: (req, res) => {
        res.render('error');
    }
}

module.exports = mainController;