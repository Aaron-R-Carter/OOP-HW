const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputPath = path.resolve(__dirname, "output", "team.html");
const render = require("./lib/htmlrender");

const teamMembers = [];
const idArray = [];

function appMenu() {
    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the managers's name?",

                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }

            },

            {
                type: "input",
                name: "managerId",
                message: "What is the manager ID?",

                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a positive number greater than zero.";
                }

            },

            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email address?",

                validate: answer => {
                    const pass = answer.match(
                      /\S+@\S+\.\S+/
                    );
                    if (pass) {
                      return true;
                    }
                    return "Please enter a valid email address.";
                  }
          
            },

            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's office number?",

                validate: answer => {
                    const pass = answer.match(
                      /^[1-9]\d*$/
                    );
                    if (pass) {
                      return true;
                    }
                    return "Please enter a positive number greater than zero.";
                  }
            }


        ])
        .then(answers =>{
            
        })



    }
}




appMenu();

