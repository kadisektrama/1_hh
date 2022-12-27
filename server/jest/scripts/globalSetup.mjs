//Setup before all tests

import chalk from "chalk";

export default async function() {
    console.log(chalk.blue('Y'));
    global.t = "Hello";
}