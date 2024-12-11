process.stdout.write("Welcome to ALX, what is your name?\n");

process.stdin.on('data', (input) => {
    const name = input.toString().trim();
    process.stdout.write(`Your name is: ${name}\n`);
});

// Always trigger the end event when the input stream is closed
process.stdin.on('end', () => {
    process.stdout.write("This important software is now closing\n");
});
