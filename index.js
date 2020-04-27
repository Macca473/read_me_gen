console.log("hello");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
})

const fs = require('fs');
// const markdown = require("markdown-js");

rl.question("Please enter a README title:", (title) => {
    console.log(`the title is: ${title}`);

    rl.question("Please enter a README description:", (dis) => {
        console.log(`the description is: ${dis}`);

        rl.question("Please enter installation instructions:", (installation) => {
            console.log(`the installation instructions are: ${installation}`);

            rl.question("Please enter instructions on how to use the application:", (usage) => {
                console.log(`the title is: ${usage}`);
                
                rl.question("Please enter license info:", (license) => {
                    console.log(`the title is: ${license}`);
                    
                    rl.question("Please enter who contributed to the project:", (contributors) => {
                        console.log(`the title is: ${contributors}`);

                        rl.question("Please enter any tests you did as part of the project:", (tests) => {
                            console.log(`the title is: ${tests}`);
                        
                            let content =
                            `[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
                    
# ${title}
                            
${dis}
                    
<details>
<summary>Table of content</summary>
                    
## Table of content
    * [Installation](###installation)
    * [Usage](#usage)
    * [License](###license)
    * [Contributors](###contributors)
    * [Tests](###tests)
                    
                    
</details>
                    
----
                    
### Installation
                    
    ${installation}
                    
### Usage
                    
    ${usage}
                    
### License
                    
    ${license}
                    
### Contributors
                    
    ${contributors}
                    
### Tests
                    
    ${tests}
                            `
                            
                            fs.appendFile('./readmes_folder/README.txt',content, function (err) {
                                if (err) throw err;
                                console.log('appended to readmes_folder');
                                process.exit(0);
                            })
                        })
                    })
                })
            })
        })
    })  
});
