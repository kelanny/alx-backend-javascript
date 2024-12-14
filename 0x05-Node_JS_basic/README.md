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

Task: 2. Reading a file synchronously with Node JS
mandatory

Using the database database.csv (provided in project description), create a function countStudents in the file 2-read_file.js

Create a function named countStudents. It should accept a path in argument
The script should attempt to read the database file synchronously
If the database is not available, it should throw an error with the text Cannot load the database
If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
CSV file can contain empty lines (at the end) - and they are not a valid student!


Task: 3. Reading a file asynchronously with Node JS
mandatory

Using the database database.csv (provided in project description), create a function countStudents in the file 3-read_file_async.js

Create a function named countStudents. It should accept a path in argument (same as in 2-read_file.js)
The script should attempt to read the database file asynchronously
The function should return a Promise
If the database is not available, it should throw an error with the text Cannot load the database
If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
CSV file can contain empty lines (at the end) - and they are not a valid student!

Task: 4. Create a small HTTP server using Node's HTTP module
mandatory

In a file named 4-http.js, create a small HTTP server using the http module:

It should be assigned to the variable app and this one must be exported
HTTP server should listen on port 1245
Displays Hello ALX! in the page body for any endpoint as plain text


Task: 5. Create a more complex HTTP server using Node's HTTP module
mandatory

In a file named 5-http.js, create a small HTTP server using the http module:

It should be assigned to the variable app and this one must be exported
HTTP server should listen on port 1245
It should return plain text
When the URL path is /, it should display Hello ALX! in the page body
When the URL path is /students, it should display This is the list of our students followed by the same content as the file 3-read_file_async.js (with and without the database) - the name of the database must be passed as argument of the file
CSV file can contain empty lines (at the end) - and they are not a valid student!
Terminal 1:
```
bob@dylan:~$ node 5-http.js database.csv
...
```

In terminal 2:
```
bob@dylan:~$ curl localhost:1245 && echo ""
Hello ALX!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
bob@dylan:~$ 
```

Task: 6. Create a small HTTP server using Express
mandatory

Install Express and in a file named 6-http_express.js, create a small HTTP server using Express module:

It should be assigned to the variable app and this one must be exported
HTTP server should listen on port 1245
Displays Hello ALX! in the page body for the endpoint /

In terminal 1:
```
bob@dylan:~$ node 6-http_express.js
...
```

In terminal 2:
```
bob@dylan:~$ curl localhost:1245 && echo ""
Hello ALX!
bob@dylan:~$ 
bob@dylan:~$ curl localhost:1245/any_endpoint && echo ""
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /lskdlskd</pre>
</body>
</html> 
bob@dylan:~$ 
```