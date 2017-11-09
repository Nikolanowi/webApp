const fetch = require("node-fetch");

class Repos {
    constructor() {
        this.url = "https://api.github.com/search/repositories?q=explore";
    }

    getRepo(notifyGetRepos) {
        return fetch("url").then(function (response) {
            notifyGetRepos(response.items);

        });
    }
}
export default Repos;