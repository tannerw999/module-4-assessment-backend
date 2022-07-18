// STEP 1: GRAB ELEMENT

const complimentBtn = document.getElementById("complimentButton")

const fortuneBtn = document.getElementById("fortuneButton")

const motivationField = document.getElementById("motivationField");
const motivationButton = document.getElementById("motivationButton");

const indexSelect = document.getElementById("indexSelect");
const editMotivation = document.getElementById("editMotivation");
const editIndex = document.getElementById("editIndex");

const indexSelectDelete = document.getElementById("indexSelectDelete");
const deleteButton = document.getElementById("deleteButton");

const baseUrl = "http://localhost:4000/api/fortune/"
//STEP 2: WRITE FUNCTION
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

const postMotiv = () => {
    // Let's format our body object to send to the server
    // This is like preparing a food order ticket at the restaurant
    const postBody = {
        // Let's create a key value pair for the name
        // nameInput IS THE ELEMENT
        // nameInput.value IS THE ACTUAL VALUE TYPED IN
        motiv: motivationField.value
    }
    // Now let's send the order with the waiter to our kitchen
    // THIS IS THE AXIOS REQUEST
    axios.post("http://localhost:4000/api/post/motiv", postBody)
        // Let's wait for our order to come back
        // Sweet, the order OR res is back from the server
        // They're going to store inside of res, more specifically res.data
        .then((res) => {
            alert(res.data);
        })
};

const putMotiv = () => {
    const putBody = {
        newMotiv: editMotivation.value
    }

    axios.put(`http://localhost:4000/api/put/motiv/${indexSelect.value}`, putBody)
        .then((res) => {
            alert(res.data);
        })
};

const deleteMotiv = () => {
    // DELETE's sole purpose is to remove information
    // With that in mind, we do NOT need to provide a body here
    axios.delete(`http://localhost:4000/api/delete/motiv/${indexSelectDelete.value}`)
        .then((res) => {
            alert(res.data);
        })
};


//STEP 3: COMBINE FUNCTION WITH ELEMENT
complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
motivationButton.addEventListener('click', postMotiv);
editIndex.addEventListener('click', putMotiv);
deleteButton.addEventListener('click', deleteMotiv);


