const fetch = require("node-fetch");

const getCards = async(req, res) => {
    try {
        let url = "https://api.pokemontcg.io/v2/cards?pageSize=10&q=";

        if (req.query.name) {
            const name = req.query.name;
            url = `${url}name:${name}`;
        }

        if (req.query.sort) {
            const sort = req.query.sort;
        }

        if (req.query.types) {
            let types = JSON.parse(req.query.types);
            if (types.length > 0) {
                types = types.map((type) => `types:${type}`)
                const typesString = types.join(" OR ")
                url = `${url}(${typesString})`;
            }

        }


        const result = await fetch(url, {method: "GET"});


        res.header("Access-Control-Allow-Origin", "*");
        res.send (await result.json());

    } catch(err) {
        console.log("Can't find any cards!!", err);
    }
}

module.exports = {
    getCards,
};
