import {Meteor} from "meteor/meteor";
import {Players} from "./../imports/api/players";


Meteor.startup( () => {
    Players.insert({
        name: "Jeff",
        score: 33
    });
    console.log(Players.find().fetch()); //find returns a curser and fetch returns an array of documents
});
