const bacheca = require("../data/data.js");
const check = (req, res, next) => {
    next();
};

module.exports = check;
