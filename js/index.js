

const container = document.querySelectorAll('.content')[1];
const gridElementsList = document.querySelector('.grid').querySelectorAll('.grid__item');


axios('https://api.github.com/users/eladioclaudio/followers')
    .then(response => getDataset(response.data))
    .catch(response => console.log(response));





function getDataset(data) { 
    handler(gridElementsList, data);
}


function handler(listElements, data) {
    
}



