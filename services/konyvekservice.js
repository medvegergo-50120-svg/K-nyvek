const {konyvek} = require("../database/database");
const getKonyvek = (req, res) => {
    res.status(200).json(konyvek);
};

const getKonyvById = (req, res) => {
    let paramId = Number(req.params.id);
    let konyv = konyvek.find(konyv => konyv.id == paramId);
    res.json(konyv);
};

const getKonyvekByAr = (req, res) => {
    let paramAr = req.params.ar;
    let konyvekByAr = konyvek.filter(konyv => konyv.price < paramAr);
    res.json(konyvekByAr);
};

const getKonyvAmount = (req, res) => {
    res.json({darab: konyvek.length});
};

const getKonyvCim = (req, res) => {
    let paramcim = req.params.cim.toLowerCase().replaceAll(' ', '');
    let konyvcim = konyvek.filter(konyv => konyv.title.toLowerCase().replaceAll(' ', '') == paramcim);
    res.json(konyvcim);
}

const getKonyvSzerzo = (req, res) => {
    let paramszerzo = req.params.szerzo.toLowerCase().replaceAll(' ', '');
    let konyvszerzo = konyvek.filter(konyv => konyv.author.toLowerCase().replaceAll(' ', '') == paramszerzo);
    res.json(konyvszerzo);
}

const getKonyvkategoria = (req, res) => {
    let paramkategoria = req.params.kategoria.toLowerCase().replaceAll(' ', '');
    let konyvkategoria = konyvek.filter(konyv => konyv.category.toLowerCase().replaceAll(' ', '') == paramkategoria);
    res.json(konyvkategoria);
}

const getKonyvArFelett = (req, res) => {
    let paramAr = req.params.ar;
    let konyvnagyobb = konyvek.filter(konyv => konyv.price > paramAr);
    res.json(konyvnagyobb);
}

const getKonyvoldal = (req, res) => {
    let paramoldal = req.params.oldal;
    let konyvoldal = konyvek.filter(konyv => konyv.pages < paramoldal);
    res.json(konyvoldal);
}

const getKonyvEv = (req, res) => {
    let paramev = req.params.ev;
    let konyvev = konyvek.filter(konyv => konyv.year > paramev);
    res.json(konyvev);
}

const getKonyvnep = (req, res) => {
    let paramviews = req.params.views;
    let konyvviews = konyvek.filter(konyv => konyv.views > paramviews);
    res.json(konyvviews);
}

const getOlcsoKonyv = (req, res) => {
    res.json({Ár: Math.min(konyvek.price)})
}

module.exports = {
    getKonyvek,
    getKonyvById,
    getKonyvekByAr,
    getKonyvAmount,
    getKonyvCim,
    getKonyvSzerzo,
    getKonyvkategoria,
    getKonyvArFelett,
    getKonyvoldal,
    getKonyvEv,
    getKonyvnep,
    getOlcsoKonyv,
    
};