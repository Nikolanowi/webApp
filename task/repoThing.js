import Repos from "./repos";
import Thing from "./thnig";

class RepoThnings {
    getThnigs(onGetThings) {
        var repos = new Repos();
        repos.getRepos((items) => {
            let things = [];
            items.forEach(function (items) {
                var thing = new Thing(item.name, "");
                things.push(thing);
            }, this);
        });
    }
}




