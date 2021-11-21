// Creating node dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");

// returns a promise to convert responses into an object.
const writeFileAsync = util.promisify(fs.writeFile);

//prompts readme information to fill out
inquirer.prompt([
{
        type: "input",
        name: "name",
        message: "Please enter your App Name:"
},
{
    type: "input",
    name: "desc",
    message: "Description:"
},
{
    type: "confirm",
    name: "toc",
    message: "Do you want a table of contents",
},
{
    type: "input",
    name: "install",
    message: "Installation:"
},
{
    type: "input",
    name: "use",
    message: "Useage:"
},
{
    type: "input",
    name: "license",
    message: "License:"
},
{
    type: "input",
    name: "cont",
    message: "Contributing:"
},
{
    type: "input",
    name: "tests",
    message: "Tests:"
},
{
    type: "input",
    name: "q",
    message: "Questions:"
}
]).then(function(res){
    return writeFileAsync("readme.txt",generateMarkdown(res)).then(function(){
        console.log("worked");
    }).catch(function(err){console.log(err)});
});
