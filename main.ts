#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import ora from "ora";

async function main(){

console.log(chalk.white(figlet.textSync(`"OOP - BANK "`,{font: "Univers" })));
let current_balance = 10000;

let Bank_details = await inquirer.prompt([
            {
              name: "name",
              type: "string",
              message: chalk.cyan(`\nEnter your Name: `),
            },

            {
              name: "account_number",
              type: "number",
              message: chalk.cyan(`\nEnter 6 digit Account-Number (787898) :`),
            },
          ]);


if ( Bank_details.name.length < 10 && Bank_details.account_number === 787898) {
  const spinner_1 = ora(" In progress ... ").start();


  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(spinner_1.succeed("Account Verified!!! "));
      console.log(`\n\n\nHey there ${chalk.blueBright(Bank_details.name)} , your verification is complete...`,
                  `\nYour Account-Number is ${chalk.blueBright(Bank_details.account_number)}.`,
                  `\nYour Bank-Balance is ${chalk.blueBright(current_balance)}.` )
            }, 4000));

  // -------------------------------Action------------------------------
  async function asking() {
    let Perform_task = await inquirer.prompt([
      {
        name: "doing_task",
        type: "list",
        message: chalk.magenta("\n\n\nPlese select kind of Bank Account."),
        choices: ["Savings In BANK", "Current Account In BANK", "Transfer money In BANK"],
      },
    ]);

    // -------------------------------If-Savings------------------------------
    if (Perform_task.doing_task === "Savings In BANK") {
      let Answer_amount = await inquirer.prompt([
        {
          name: "amount",
          type: "number",
          message: chalk.cyan(`Enter your ammount:`),
        },
      ]);
      current_balance += Answer_amount.amount;
      console.log(`\n\n${chalk.yellow(`Congratulations...`)} your savings has been added `);
      console.log(`Your Current-Bank-Balance is ${chalk.blueBright(current_balance)}`);
      console.log(`${chalk.bold.blueBright(`********* Email: oopbank786@gmail.com********* `)}`);
      console.log(`${chalk.green("******Thank you for using Bank Program **********")} `);
      console.log(`${chalk.bold.blueBright(`********* Have a Good  🫶🏻 Day ********* `)}`);
    }
    // -------------------------------Current-Account------------------------------
    else if (Perform_task.doing_task === "Current Account In BANK") {
        
        let current_account = await inquirer.prompt([
            {
              name: "list",
              type: "list",
              message: chalk.cyan(`What do you want do?\n`),
              choices: [`Withdraw`, `Deposit`],
            },
      ]);

      if (current_account.list === "Withdraw") {
// -------------------------------In withdrawal-Asking for amount ------------------------------
        let Withdraw_amount = await inquirer.prompt([
            {
              name: "amount",
              type: "number",
              message: chalk.cyan(`Enter your Amount:`),
            },
        ]);

        const spinner_2 = ora("Please wait for little moment, We are working on your Withdrawal").start();
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve(spinner_2.succeed("Withdrawl Amount has been done ..."));
          }, 4000)
        );

        current_balance -= Withdraw_amount.amount;
        console.log(`\n Now your balance is ${chalk.bold.blueBright(current_balance)}`);
        console.log(`${chalk.bold.blueBright(`********* Email: oopbank786@gmail.com********* `)}`);
        console.log(`${chalk.green("******Thank you for using Bank Program **********")} `);
        console.log(`${chalk.bold.blueBright(`********* Have a Good  🫶🏻 Day ********* `)}`);
     
      }
      
      else if (current_account.list === "Deposit") {
        let Deposit_amount = await inquirer.prompt([
          {
            name: "amount",
            type: "input",
            message: chalk.cyan(`Enter your Amount:`),          },
        ]);
        
        const spinner_2 = ora("Please wait for little moment, We are working on your Deposit ...").start();
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve(spinner_2.succeed("\nYour Deposit has been done..."));
          }, 4000)
        );

        current_balance += Deposit_amount.amount;
        console.log(`\n\nYour balance is ${chalk.bold.blueBright(current_balance)}`);
        console.log(`${chalk.bold.blueBright(`********* Email: oopbank786@gmail.com********* `)}`);
        console.log(`${chalk.green("******Thank you for using Bank Program **********")} `);
        console.log(`${chalk.bold.blueBright(`********* Have a Good  🫶🏻 Day ********* `)}`);      }
    }
    // -------------------------------Transfer-Money------------------------------
    else if (Perform_task.doing_task === "Transfer money In BANK") {
      let Transfer_details = await inquirer.prompt([
        {
          name: "name",
          type: "string",
          message: chalk.cyan(`\nEnter the Tranfer Person's Name:`),        },
        {
          name: "account_number",
          type: "number",
          message: chalk.cyan(`Enter your 6 digit code (787898) : `),
        },
        {
          name: "amount",
          type: "input",
          message: chalk.cyan(`Enter your Amount:`),        },
      ]);

      // ------------------------------Transfer varification message------------------------------
      console.log(chalk.yellow(figlet.textSync(`"Tranfering Complete" `)));
    
      const spinner_3 = ora(`Please Wait for sec , Transfer Verification in progress...`).start();
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(
            spinner_3.succeed("Transfer Verification is all done ...")
          );
        }, 3000)
      );

      // ------------------------------Transfer person message------------------------------
      console.log(`\n\n\nHey there ${chalk.blueBright(Transfer_details.name)} , Your verification is completed`);
      console.log(`And your friend send  you the money - Rs ${chalk.blueBright(Transfer_details.amount)} to your account.`);
      console.log(`I have received Rs ${chalk.yellow(Transfer_details.amount)}`);
      console.log(`${chalk.bold.blueBright(`********* Email: oopbank786@gmail.com********* `)}`);
      console.log(`${chalk.green("******Thank you for using Bank Program **********")} `);
      console.log(`${chalk.bold.blueBright(`********* Have a Good  🫶🏻 Day ********* `)}`);

    }
  }

  await asking();
} 
 else {
  console.log(chalk.bold.red("\nPlease fill in with details"));
  console.log(chalk.bold.red("\nTry Again..."));
}
}

async function start_again(){
  do{
    await main()
    var again = await inquirer.prompt([
      {
        name:"restart",
        type:"input",
        message: chalk.gray(`\nWant to go Back in BANK -again- Enter (y) `),      }
    ])
  }
  while(again.restart === "Y" || again.restart === "y"|| again.restart === "Yes" || again.restart === "yes")
    
}

await start_again()


