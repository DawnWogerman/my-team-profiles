const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const generatePage = require()

const staffArray = [];

//create the manager
function createManager(){
    inquirer.prompt([
        {
            type: "input",
            name: "manager.name",
            message: "Please Enter Manager's Name"
        },
        {
            type: "input",
            name: "manager.id",
            message: "Enter the Manager's ID Number"
        },
        {
            type: "input",
            name: "manager.email",
            message: "Enter in the Manager's Email Address"
        },
        {
            type: "input",
            name: "manager.officeNumber",
            message: "Enter the Manager's Office Number"
        }
    ])
        .then(response=>{
            const mgrObj = new Manager =(response.manager.name, response.manager.id, response.manager.email, response.manager.officeNumber)
            staffArray.push(mgrObj)

            teamController();
        })
};

function createEngineer (){
    inquirer.prompt([
        {
            type: "input",
            name: "engineer.name",
            message: "Enter Engineer's Name"
        },
        {
            type: "input",
            name: "engineer.id",
            message: "Enter Engineer's Email Address",
        },
        {
            type: "input",
            name: "enigineer.id",
            message: "Enter Engineer's ID"
        },
        {
            type: "input",
            name: "engineer.github",
            message: "Enter Engineer's GitHub User Name"
        }
    ])
        .then(response =>{
            const engineerObj = new Engineer(response.engineer.name, response.engineer.id, response.engineer.email, response.engineer.github )
            staffArray.push(engineerObj)

            teamController();
        })
}

function createIntern () {
    inquirer.prompt([
        {
            type: "input",
            name: "intern.name",
            message: "Enter Intern's Name"
        },
        {
            type: "input",
            name: "intern.id",
            message: "Enter Intern's ID"
        },
        {
            type: "input",
            name: "intern.email",
            message: "Please Enter Intern's Email"
        },
        {
            type: "input",
            name: "intern.school",
            message: "Enter Intern's School Name"
        }
    ])
        .then(response =>{
            const internObj = new Intern(response.intern.name, response.intern.id, response.intern.email, response.intern.school)
            staffArray.push(internObj);

            teamController();
        })
}

function teamController () {
    inquirer.prompt([
        {
            type: "list",
            name: "addemployee",
            message: "Select Employee Type to Add",
            choices: ["Manger", "Engineer", "Intern", "None"]
        }
    ]) .then(response =>{
        if(response.addemployee === "Manager") {
            createManager();
        }
        else if (response.addemployee === "Intern") {
            createIntern();
        }
        else if(response.addemployee === "Engineer") {
            createEngineer();
        }
        else {createHtml()}
    });
}

// function createHtml(){
//     fs.writeFileSync('./src/index.html', )
// }