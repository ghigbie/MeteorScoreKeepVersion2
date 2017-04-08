import React from "react"; // react only has one default export, which is called react
import ReactDOM from "react-dom"; //this is the same situation for react-dom
import {Meteor} from "meteor/meteor"; //this is a named export

Meteor.startup( () => {
    let jsx = <p>This is from JSX!!!</p>;
    ReactDOM.render(jsx, document.getElementById("app")); //ReactDom takes two arguments: the first is the item you wish to render, and the second is the location to which you wish to render
});
