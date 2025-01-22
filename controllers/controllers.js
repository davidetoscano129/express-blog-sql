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
    const id = req.params.id;
    const sql = "SELECT * FROM `posts` WHERE id = ?";

    connection.query(sql, [id], (error, results) => {
        if (error) {
            return res.status(500).json({
                message: "Errore Interno Del Server"
            });
        } else if (results.length === 0) {
            return res.status(404).json({
                message: "Nessun risultato dalla ricerca"
            })
        } else {
            return res.status(200).json({
                status: "Success",
                posts: results[0],
            })
        }

    })
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
    const id = req.params.id;
    const sql = "DELETE FROM `posts` WHERE id = ?";
    connection.query(sql, [id], (error) => {
        if (error) {
            return res.status(500).json({
                message: "Errore interno del server",
            });
        } else {
            return res.sendStatus(204);
        }
    });


};

module.exports = {
    index,
    show,
    // CREATE,
    // UPDATE,
    // MODIFY,
    destroy
};