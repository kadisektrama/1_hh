//Setup after all tests

import chalk from "chalk";

export default async function() {
    console.log(chalk.blue('YY'));
    global.t = "End";
}