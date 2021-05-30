const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');
const argv = yargs.argv;

var title = yargs.argv.title;
var body = yargs.argv.body;
var command = yargs.argv._[0];

if(command == "add"){
    console.log(chalk.blue("Adding Note"));
    notes.addingNote(title,body);
    console.log(chalk.cyan("New Note has been added"));
    
}
else if(command == "remove"){
    console.log(chalk.magenta("Removing Note"));
    notes.removeNote(title);
    console.log(chalk.cyan("Note has been removed"));
    
}
else if(command == "read"){
    console.log(chalk.green("Reading Note"));
    notes.readNote(title);
    console.log(chalk.cyan("Note has been read."));
}
else if(command == "list"){
    console.log(chalk.yellow("Listing Note"));
    notes.listNote();
    console.log(chalk.cyan("Note has been listed"));
}

else{
    console.log(chalk.red("Unknown Command!"));
}


