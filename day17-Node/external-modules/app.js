import chalk from "chalk";
import oneLinerJoker from "one-liner-joke"
// console.log(chalk)

let randomJoke = oneLinerJoker.getRandomJoke();
// console.log(chalk.blue("Hello world"));

// console.log(randomJoke)
console.log(chalk.blue.bgRed.bold(randomJoke.body));

// console.log(`
//     CPU: ${chalk.red('90%')}
//     RAM: ${chalk.green('40%')}
//     DISK: ${chalk.yellow('70%')}
//     `);