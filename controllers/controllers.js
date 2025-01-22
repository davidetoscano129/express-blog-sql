// Importo la lista dati
const connection = require("../data/data");

// INDEX
const index = (req, res) => {
    const sql = 'SELECT * FROM posts';

    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                message: "Errore durante il recupero dei post"
            });
        }
        return res.status(200).json({
            status: "Success",
            data: results,
        });
    });
};

// SHOW
const show = (req, res) => {
};

// CREATE
// const create = (req, res) => {
// };

// // UPDATE
// const update = (req, res) => {
// };

// // MODIFY
// const modify = (req, res) => {
// }

// DESTROY
const destroy = (req, res) => {
};

module.exports = {
    index,
    show,
    // CREATE,
    // UPDATE,
    // MODIFY,
    destroy
};