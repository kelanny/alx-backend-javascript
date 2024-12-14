# Project: 0x05. NodeJS Basics
#Back-end #JavaScript #ES6 #NodeJS #ExpressJS

### Resources
**Read or watch:**

- [Node JS getting started]("https://intranet.alxswe.com/rltoken/hROgW3QO9jqFnFP-Nzwh8A")
- [Process API doc]("https://intranet.alxswe.com/rltoken/Wt69QV2xygB4GEqob26AjQ")
- [Child process]("https://intranet.alxswe.com/rltoken/IS4y9rRCblX71W_oeXpymw")
- [Express getting started]("https://intranet.alxswe.com/rltoken/XsfrhG9NRLuuaTpVZlZv_g")
- [Mocha documentation]("https://intranet.alxswe.com/rltoken/EBGDj1FwLrK_y4kgxp8hfg")
- [Nodemon documentation]("https://intranet.alxswe.com/rltoken/vnDSbLsicMDdxcf5YUSXIg")

### Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- run javascript using NodeJS
- use NodeJS modules
- use specific Node JS module to read files
- use process to access command line arguments and the environment
- create a small HTTP server using Node JS
create a small HTTP server using Express JS
- create advanced routes with Express JS
- use ES6 with Node JS with Babel-node
- use Nodemon to develop faster

### Requirements
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files will be interpreted/compiled on - Ubuntu 18.04 LTS using node (version 12.x.x)
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using Jest and the command npm run test
- Your code will be verified against lint using ESLint
- Your code needs to pass all the tests and lint. You can verify the entire project running npm run full-test
- All of your functions/classes must be exported by using this format: module.exports = myFunction;


### Tasks

Task: 0. Executing basic javascript with Node JS
n the file 0-console.js, create a function named displayMessage that prints in STDOUT the string argument.

```
bob@dylan:~$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");

bob@dylan:~$ node 0-main.js
Hello NodeJS!
bob@dylan:~$
```

**Task: 1. Using Process stdin**
mandatory

Create a program named 1-stdin.js that will be executed through command line:

- It should display the message `Welcome to ALX, what is your name?` (followed by a new line)
- The user should be able to input their name on a new line
- The program should display `Your name is: INPUT`
- When the user ends the program, it should display `This important software is now closing` (followed by a new line)
**Requirements:**

- Your code will be tested through a child process, make sure you have everything you need for that

```
bob@dylan:~$ node 1-stdin.js 
Welcome to ALX, what is your name?
Bob
Your name is: Bob
bob@dylan:~$ 
bob@dylan:~$ echo "John" | node 1-stdin.js 
Welcome to ALX, what is your name?
Your name is: John
This important software is now closing
bob@dylan:~$ 
```