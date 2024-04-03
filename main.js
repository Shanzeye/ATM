#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
// console.log(pinEntered.pin)
if (pinAnswer.pin == myPin) {
    let atmQuestions = await inquirer.prompt([
        {
            name: "Account type",
            message: "Select your account type",
            type: "list",
            choices: [
                "Current Account",
                "Savings Account",
            ]
        },
        {
            name: "transMethod",
            message: "Select your transaction method",
            type: "list",
            choices: [
                "Cash Withdrawl",
                "Fast Cash"
            ]
        }
    ]);
    if (atmQuestions.transMethod == "Cash Withdrawl") {
        let cashwithdrawAmount = await inquirer.prompt([
            {
                name: "Withdrawl",
                message: "Enter the amount you want to withdraw",
                type: "number",
            }
        ]);
        // Greater than or equals to operator.
        if (myBalance >= cashwithdrawAmount.Withdrawl) {
            myBalance -= cashwithdrawAmount.cashwithdrawl; // totalbalance = tatalbalance - cashwithdrawAmount
            console.log(`Your Total Balance is :${myBalance}`);
        }
        else {
            console.log("insufficient Balance");
        }
    }
    else {
        let fastCashAmount = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Select the amount you want to withdraw",
                type: "list",
                choices: [
                    "1000",
                    "2000",
                    "3000",
                    "4000",
                    "5000",
                ]
            }
        ]);
        if (myBalance >= fastCashAmount.fastCash) {
            myBalance -= fastCashAmount.fastCash; // totalbalance = totalBalance -cashwithdrawAount
            console.log(`Your Total Balance is :${myBalance}`);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
}
