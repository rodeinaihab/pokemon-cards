const fetch = require("node-fetch");

const getCards = async(req, res) => {
    try {
        let url = "https://api.pokemontcg.io/v2/cards?pageSize=10";

        if (req.query.order) {
            const order = req.query.order;
            url = `${url}&orderBy=${order=="ascending" ? "number" : "-number"}`;
        }

        url = `${url}&q=`;
        if (req.query.name) {
            const name = req.query.name;
            url = `${url}name:${name}`;
        }

        if (req.query.name) {
            const name = req.query.name;
            url = `${url}&q=name:${name}`;
        }

        if (req.query.types) {
            let types = JSON.parse(req.query.types);
            if (types.length > 0) {
                types = types.map((type) => `types:${type}`)
                const typesString = types.join(" OR ")
                url = `${url} (${typesString})`;
            }
        }

        //console.log(url);
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
