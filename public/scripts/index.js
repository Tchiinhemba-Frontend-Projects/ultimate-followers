
class App {

    constructor(api) {
        this.api = api;

        this.handler(this.api);
    }


    handler(api) {
        fetch(api)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }
}


const endPoint = 'https://api.github.com/users/eladioclaudio/followers';

const appInstance = new App(endPoint)