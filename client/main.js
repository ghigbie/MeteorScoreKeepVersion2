import React from "react"; // react only has one default export, which is called react
import ReactDOM from "react-dom"; //this is the same situation for react-dom
import {Meteor} from "meteor/meteor"; //this is a named export

const players = [
    {
        _id: "1",
        name: "Lauren",
        score: 50
    },
    {
        _id: "2",
        name: "Josh",
        score: 78
    },
    {
        _id: "3",
        name: "Beth",
        score: 67
    }
];
const renderPlayers = (playersList) => {
    return playersList.map((player) => {
        return <p key={player.id}>{player.name}</p>;
    });
};

Meteor.startup( () => {
    let title = "Score Keep";
    let name = "Mike";
    let jsx = (
        <div className="container">
            <h1>{title}</h1>
            <p>Hello {name}</p>
            <p>Se dice que no se puede escapar la ocean.</p>
            {renderPlayers(players)}
        </div>);
    ReactDOM.render(jsx, document.getElementById("app")); //ReactDom takes two arguments: the first is the item you wish to render, and the second is the location to which you wish to render
});
