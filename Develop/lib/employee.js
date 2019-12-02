const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?"
    },

    {
        type: "input",
        name: "id",
        message: "What is the employee's ID?"
    },

    {
        type: "input",
        name: "email",
        message: "What is the employee's email address?"
    },

    {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["manger", "engineer", "intern"]
    }
];

function Employee(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role

};

function init() {

    inquirer.prompt(questions)
        .then(({ name, id, email, role }) => {
            const e = new Employee(name, id, email, role);
            console.log(e);

        })
        .then()
};

init();

// function getName(){
//  console.log(Employee.name)
//  return(Employee.name)
// }

// getName();




