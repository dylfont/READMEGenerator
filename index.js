// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input' ,
        name: 'title' , 
        message: 'What is the title of your project?' ,
    },
    {
        type: 'input' , 
        name: 'description' ,
        message: 'What is the description of your project?' ,

    },
    {
        type: 'input' , 
        name: 'usage' ,
        message: 'How do you use your project?' ,

    },
    {
        type: 'input' , 
        name: 'installation' ,
        message: 'How to install the project?' ,

    },
    {
        type: 'input' , 
        name: 'contribution' ,
        message: 'How to contribute to the project?' ,

    },
    {
        type: 'input' , 
        name: 'tests' ,
        message: 'How to test the project?' ,

    },
    {
        type: 'list' , 
        name: 'license' ,
        message: 'Which license is it under?' ,
choices:["GPL_3.0","MIT","none"]
    },
    {
        type: 'input' , 
        name: 'username' ,
        message: 'What is the username of the person who made this?' ,

    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const writeFileAsync = util.promisify(fs.writeFile);
    writeFileAsync(fileName, data)
        .then(function(){
            console.log("filewritten")
        })
        .catch(function(err){
            console.log("err")
        })
}
// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
    .then(function(answers){
        console.log(answers)
        const convertedAnswers = generateMarkdown(answers)
        writeToFile("README.md",convertedAnswers)
    })
    .catch(function(err){
        console.log(err)
    })
}

// Function call to initialize app
init();
