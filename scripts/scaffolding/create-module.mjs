import inquirer from 'inquirer';
import path from 'path';
import fs from 'fs';
import { generateTemplateFilesBatch } from 'generate-template-files';

//joining path of directory 
const directoryPath = path.join(path.dirname('./'), 'src');
const modules = [];
const prompt = inquirer.createPromptModule();

fs.readdirSync(directoryPath, { withFileTypes: true })
.forEach((entry) => {
  if (entry.isDirectory()) {
    modules.push(entry.name);
  } 
})

prompt([
  {
    type: 'input',
    name: 'module',
    message: "Please enter the name of the module",
    validate: function (value) {
      if (value) {
        return modules.some((module) => module === value)
          ? "A module with the same name exists!"
          : true;
      }
      return "Invalid module name!";
    }
  }
])
.then((answers) => {
  generateTemplateFilesBatch([
    {
      option:
        `Generating starter files for ${answers.module}...`,
      entry: {
        folderPath: path.join(
          path.dirname("./"),
          "scripts",
          "scaffolding",
          "templates",
          "module"
        ),
      },
      dynamicReplacers: [
        { slot: "__name__", slotValue: answers.module },
        {
          slot: "__Name__",
          slotValue: answers.module.includes("-")
            ? answers.module
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join("")
            : answers.module.charAt(0).toUpperCase() +
              answers.module.slice(1),
        },
        {
          slot: "__nameVar__",
          slotValue: answers.module.includes("-")
            ? answers.module
                .split("-")
                .map((word, Idx) =>  idx === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
                .join("")
            : answers.module.charAt(0).toUpperCase() +
              answers.module.slice(1),
        },
      ],
      output: {
        path: `./src/${answers.module}/`,
      },
    },
  ]);
  
});