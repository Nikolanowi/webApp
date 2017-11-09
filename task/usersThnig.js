import Users from "./users";
import Thing from "./thnig";



class UserThings {
    getThnigs(onGetThings) {
        var user = new Users();
        user.getRepos((items) => {
            let things = [];
            items.forEach(function (items) {
                var thing = new Thing(item.name, "");
                things.push(thing);
            }, this);
        });
    }
}

export default UserThings;