// const fortunes = require("./db.json")
// let globalId = 6

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
    }
}
      // updateFortune: (req, res) => {
    //     const existingId = +req.params.id
    //     let index = fortunes.findIndex(fortune => fortune.id === existingId)
    // },

    // createFortune: (req, res) => {
    //     const {saying} = req.body

    //     let newFortune = {
    //         saying,
    //         id: globalId
    //     }

    //     fortunes.push(newFortune)
    //     res.status(200).send(fortunes)
    //     globalId++
    // },

//     deleteFortune: (req, res) => {
//         const existingId = +req.params.id

//         let index = fortunes.findIndex(fortune => fortune.id === existingId)
//         fortunes.splice(index, 1)
//         res.status(200).send(fortunes)
//     }
// }