const inquirer = require("inquirer");
const fs = require ("fs");

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the engineers's name?"
    },

    {
        type: "input",
        name: "id",
        message: "What is the engineers's ID?"
    },

    {
        type: "input",
        name: "email",
        message: "What is the engineers's email address?"
    }
];

function init() {
    inquirer.prompt(engineerQuestions)
    .then(function({name, id, email}){
        console.log (name);
        console.log (id);
        console.log (email);
        const e = new Engineer (name, id, email);
        console.log(e);

    })
    .then(function(){

    })
};

init();

function Engineer(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;

};


