const inquirer = require("inquirer");
const fs = require ("fs");

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?"
    },

    {
        type: "input",
        name: "ID",
        message: "What is the employee's ID?"
    },

    {
        type: "input",
        name: "email",
        message: "What is the employee's email address?"
    }
];

function init() {
    inquirer.prompt(questions)
    .then(function(name, ID, email){
        console.log (name,ID,email);
    })
    .then(function(){

    })
};

init();