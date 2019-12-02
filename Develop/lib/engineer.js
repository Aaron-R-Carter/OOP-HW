const inquirer = require("inquirer");
const fs = require ("fs");

const questions = [
    
    {
        type: "input",
        name: "gitHub",
        message: "What is the engineers's GitHub username?"
    }
];

function init() {
    inquirer.prompt(questions)
    .then(function({gitHub}){
        const e = new Engineer (gitHub);
        console.log(e);

    })
    .then(function(){
        // console.log(e);
        // return(e);
        

    })
};

init();

function Engineer(gitHub){
    this.gitHub = gitHub;

};


