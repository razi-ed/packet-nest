import inquirer from 'inquirer';
import path from 'path';
import fs from 'fs';
import { generateTemplateFilesBatch } from 'generate-template-files';

//joining path of directory 
const directoryPath = path.join(path.dirname('./'), 'src',);
const modules = [];
const prompt = inquirer.createPromptModule();

fs.readdirSync(directoryPath, { withFileTypes: true })
.forEach((entry) => {
  if (entry.isDirectory() && entry.name !== 'shared') {
    modules.push(entry.name);
  } 
})

prompt([
  {
    type: 'input',
    name: 'subModule',
    message: "Please enter the name of the sub-module",
    validate: function (value) {
      return !value ? "Invalid sub-module name!" : true;
    }
  },
  {
    type: 'list',
    name: 'module',
    message: 'Please select the module to create the sub-module in',
    choices: modules,
  },
])
.then((answers) => {
  generateTemplateFilesBatch([
    {
      option:
        `Generating starter files for ${answers.subModule} in ${answers.module}...`,
      entry: {
        folderPath: path.join(
          path.dirname("./"),
          "scripts",
          "scaffolding",
          "templates",
          "submodules"
        ),
      },
      dynamicReplacers: [
        { slot: "__name__", slotValue: answers.subModule },
        {
          slot: "__Name__",
          slotValue: answers.subModule.includes("-")
            ? answers.subModule
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join("")
            : answers.subModule.charAt(0).toUpperCase() +
              answers.subModule.slice(1),
        },
        { slot: "__module-name__", slotValue: answers.module },
      ],
      output: {
        path: `./src/${answers.module}/${answers.subModule}`,
      },
    },
  ]);
});