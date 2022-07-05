import _ from 'lodash';


class App {

    constructor(api) {
        this.api = api;
        this.request(api);
    }


    request(api) {
        axios(api)
            .then(res => {
                this.handler(res.data);
            })
            .catch(error => {
                console.log('==>', error);
            })
    }

    handler(dataset) {
        this.handleElements(dataset)
    }


    handleElements(data) {
        let gridContainer = document.querySelector('.content');
        data.map((value, index) => {
            gridContainer.innerHTML += this.layout(value.avatar_url, value.login);
        })
    }

    layout(photoUrl, name) {
        return `
        <div class="grid_item">
            <div class="image_container">
            <img src="${photoUrl}" alt="${name}">
            </div>
            <span>${name.toLowerCase()}</span>
        </div>
        `
    }
}


const endPoint = 'https://api.github.com/users/tchiinhemba/followers?per_page=139';

const appInstance = new App(endPoint)
