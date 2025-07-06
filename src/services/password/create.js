const { default: chalk } = require("chalk");

async function createPassword() {
    console.log(chalk.green("password"));
    const password = await handle();
    console.log(password);
}

export default createPassword;