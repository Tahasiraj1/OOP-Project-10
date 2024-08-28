import chalk from "chalk";
import inquirer from "inquirer";
class Person {
    personality;
    constructor(personality = "Mystery") {
        this.personality = personality;
    }
    async getPersonality() {
        console.log(chalk.green("Type 1, if you like to keep to yourself, Type 2, if you like to talk to others & Type 3, if you wanna remain a mystery.."));
        let answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'personality',
                choices: [1, 2, 3],
                message: 'What is your personality type?'
            }
        ]);
        if (answer.personality === 1) {
            return chalk.yellow("Introvert");
        }
        else if (answer.personality === 2) {
            return chalk.blue("Extrovert");
        }
        else {
            return chalk.red("Mystery");
        }
    }
}
class Student extends Person {
    _name;
    constructor(name = "Unknown", personality = "Mystery") {
        super(personality);
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}
const student = new Student();
student.name = "Taha Siraj";
console.log(`Your name is ${student.name} and your personality is ${student.personality}`);
