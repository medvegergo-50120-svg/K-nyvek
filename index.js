const express = require("express");
const app = express();
const PORT = 3030;
const { getKonyvek, getKonyvById } = require("./services/konyvekservice")
app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).json({info: "Könyvek backend alkalmazás"})
}); 
app.get("/konyvek", getKonyvek);
app.get("/konyvek/:id", getKonyvById);
app.listen(PORT, () => {
    console.log("Szerver elindult a " + PORT + "-on");
});