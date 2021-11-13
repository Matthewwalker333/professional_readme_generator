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

//Markdown tips
const letsGo = chalk.greenBright(`\n
Let's Generate a README!!!
//~~~~~~~~~~~~~~~~~~~~~~//
     MD syntax tips
-------------------------
Bold    **bold text**
Italics *italicized text*       
Links   [title](https://www.example.com)
Image   ![alt text](image.jpg)
\n`);

//Success message
const success = chalk.greenBright(`
WooHoo! README Generated! It's in the Output folder
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~// 
`);