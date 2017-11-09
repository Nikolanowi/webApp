const fetch = require("node-fetch");

class Users {

    constructor(){
        this.url = "https://api.github.com/search/users?q=marko";
    }

    makeRequest(hendler) {
        return fetch("url").then(function (response) {
            hendler(response.items);

        });
    }
}

export default Users;