

const container = document.querySelectorAll('.content')[1];
const grid = document.querySelector('.grid');
const overlay = document.querySelector('.overlay')


axios('https://api.github.com/users/eladioclaudio/followers')
    .then(response => handler(response.data))
    .catch(response => console.log(response));


function handler(data) {


    data.map((value, index) => {
        const gridElementsList = grid.querySelectorAll('.grid__item');
        const overlayItems = overlay.querySelectorAll('.overlay__item')

        if (gridElementsList.length <= data.length) {
            const elCopy = gridElementsList[index].cloneNode(true);
            const overCopy = overlayItems[index].cloneNode(true);

            grid.appendChild(elCopy)
            overlay.appendChild(overCopy)
        }
        
        

        const boxImage = gridElementsList[index].querySelector('.box__img');
        const name = gridElementsList[index].querySelector('.box__title-inner');

        gridElementsList[index].setAttribute('href', `#preview-${index}`);
        overlayItems[index].setAttribute('id', `preview-${index}`);

        boxImage.setAttribute('src', value.avatar_url);
        name.setAttribute('data-hover', value.login)
        name.remove()
    })

}
