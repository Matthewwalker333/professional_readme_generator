'use strict';
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
inquirer.registerPrompt('recursive', require('./utils/my-inquirer-recursive.js'));
const generateMarkdown = require('./utils/generateMarkdown.js');

//Welcome message
const welcome = [
    {
        type: 'confirm',
        prefix: '\b',
        name: 'welcome',
        message: chalk.cyanBright(`Thanks for using my README.md generator! You will be presented with options for your README's sections and their respective contents. To begin hit 'y' or enter.`),

    },
];