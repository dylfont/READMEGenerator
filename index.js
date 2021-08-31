// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
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
    })
    .catch(function(err){
        console.log(err)
    })
}

// Function call to initialize app
init();
