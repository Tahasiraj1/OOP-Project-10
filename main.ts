import chalk from "chalk";
import inquirer from "inquirer";

class Person {
    personality: string;

    constructor(personality: string = "Mystery") {
        this.personality = personality;
    }

    async getPersonality(): Promise<string> {
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
        } else if (answer.personality === 2) {
            return chalk.blue("Extrovert");
        } else {
            return chalk.red("Mystery");
        }
    }
}

class Student extends Person {
    private _name: string;
    
    constructor(name: string = "Unknown", personality: string = "Mystery") {
        super(personality)
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }
}

const student = new Student();
student.name = "Taha Siraj";
console.log(`Your name is ${student.name} and your personality is ${student.personality}`);
