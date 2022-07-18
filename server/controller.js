const database = require("./db.json");
const motivArr = ["The best is yet to be.", "Try to be a rainbow in someone's cloud", "Do good and good will come to you", "When things go wrong, don't go with them.", "GET MONEY GET PAID"];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["The night life is for you.", "Any day above ground is a good day", "Bide your time, for success is near.", "Congratulations! You are on your way.", "The only people who never fail are those who never try."]
        let fortuneIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[fortuneIndex];

        res.status(200).send(randomFortune);
    },

    postMotivation: (req, res) => {
        // The chef is preparing your order
        console.log("ENDPOINT HIT");
        console.log(req.body);

        motivArr.push(req.body.motiv);

        // The chef is done cooking, he will plate it and send it back for you
        res.status(200).send(motivArr);
    },
    
    putMotivation: (req, res) => {
        console.log("ENDPOINT HIT HIT HIT HIT");
        console.log(req.params);
        console.log(req.body);

        // Grab the index of the name we want to change
        const indexToEdit = +req.params.id; // Single + sign will change type to number
        
        // Let's use that index, and reassign it to our new name
        motivArr[indexToEdit] = req.body.newMotiv;

        // Send back a response
        res.status(200).send(motivArr);
    },
    
    deleteMotivation: (req, res) => {
        console.log("ENDPOINT HIT HIT HIT");
        console.log(req.params);

        const indexToDelete = +req.params.id; // This is the index of what we want to delete

        motivArr.splice(indexToDelete, 1);

        res.status(200).send(motivArr);
    }

}