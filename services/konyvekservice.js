const {konyvek} = require("../database/database")
const getKonyvek = (req, res) => {
    res.status(200).json(konyvek)
};

const getKonyvById = (req, res) => {
    let paramId = Number(req.params.id);
    let konyv = konyvek.find(konyv => konyv.id == paramId);
    res.json(konyv);
}

module.exports = {
    getKonyvek,
    getKonyvById,
}