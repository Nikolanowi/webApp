import repoThing from "./repoThing";

const repoThing = new repoThing();

repoThing.getThings ((things)=>{
    things.array.forEach((things) => {

        console.log(things.getData());
    });
});