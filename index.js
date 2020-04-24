console.log("hello");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Please enter a README title:", (title) => {
    console.log(`the title is: ${title}`);

    rl.question("Please enter a README description:", (dis) => {
        console.log(`the title is: ${dis}`);
        process.exit(0);
    })
    
})


