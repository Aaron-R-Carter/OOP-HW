const inquirer = require("inquirer");
const fs = require ("fs");

const employeeQuestions = [
    {
        type: "input",
        name: "nameInput",
        message: "What is the employee's name?"
    },

    {
        type: "input",
        name: "idInput",
        message: "What is the employee's ID?"
    },

    {
        type: "input",
        name: "emailInput",
        message: "What is the employee's email address?"
    }
];

function init() {
    inquirer.prompt(employeeQuestions)
    .then(function({nameInput, idInput, emailInput}){
        console.log (nameInput);
        console.log (idInput);
        console.log (emailInput);
        const newEmployee = new Employee (nameInput, idInput, emailInput);
        console.log(newEmployee);

    })
    .then(function(){

    })
};

init();

function Employee(nameInput, idInput, emailInput){
    this.name = nameInput;
    this.id = idInput;
    this.email = emailInput;

};


