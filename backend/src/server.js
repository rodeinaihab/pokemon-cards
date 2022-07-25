const express = require("express");
const fetch = require("node-fetch");

const cors = require("cors");
const app = express();
const cards = require("./routes/cards.routes")
/*app.get("/cards", async (req, res) => {
    const result = await fetch("https://api.pokemontcg.io/v2/cards?q=name:gardevoir (hp:130)", {method: "GET"})
    res.send(await result.json());
});*/
app.use(cors());
app.use('/cards', cards);

app.listen(3000, () => console.log("Server is running on port 3000!"));
