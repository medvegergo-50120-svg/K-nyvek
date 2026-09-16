const express = require("express");
const app = express();
const PORT = 3030;
const { getKonyvek, getKonyvById, getKonyvekByAr, getKonyvAmount, getKonyvCim, getKonyvSzerzo, getKonyvkategoria, getKonyvArFelett, getKonyvoldal, getKonyvEv, getKonyvnep, getOlcsoKonyv,} = require("./services/konyvekservice")
app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).json({info: "Könyvek backend alkalmazás"})
}); 
app.get("/konyvek", getKonyvek);
app.get("/konyvek/db", getKonyvAmount);
app.get("/konyvek/legolcsobb", getOlcsoKonyv);
app.get("/konyvek/:id", getKonyvById);
app.get("/konyvek/ar/:ar", getKonyvekByAr);
app.get("/konyvek/cim/:cim", getKonyvCim);
app.get("/konyvek/szerzo/:szerzo", getKonyvSzerzo);
app.get("/konyvek/kategoria/:kategoria", getKonyvkategoria);
app.get("/konyvek/ar-felett/:ar", getKonyvArFelett);
app.get("/konyvek/oldal/:oldal", getKonyvoldal);
app.get("/konyvek/ev/:ev", getKonyvEv);
app.get("/konyvek/nepszeru/:views", getKonyvnep);



app.listen(PORT, () => {
    console.log("Szerver elindult a " + PORT + "-on");
});