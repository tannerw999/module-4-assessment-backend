// const { createFortune } = require("./server/controller")

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

const baseUrl = "http://localhost:4000/api/fortune/"
// const fortunesCallBack = ({data: fortunes}) => alert(fortunes)
// const errCallback = err => console.log(err.response.data)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get(baseUrl)
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

// const createMovie = body => axios.post(baseURL, body).then(fortunesCallback).catch(errCallback)
// const deleteMovie = id => axios.delete(`${baseURL}/${id}`).then(fortuneCallback).catch(errCallback)
// const updateMovie = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(fortuneCallback).catch(errCallback)

// function submitHandler(e) {
//     e.preventDefault()

//     let saying = document.querySelector('#saying')

//     let bodyObj = {
//         saying: saying.value
//     }

//     createFortune(bodyObj)

//     saying.value = ""
// }

// function createNewFortune(fortune) {

// }

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
// addFortune.addEventListener('click', createFortune)

