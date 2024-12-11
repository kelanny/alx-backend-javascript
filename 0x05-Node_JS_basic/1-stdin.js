process.stdout.write("Welcome to ALX, what is your name?\n");

process.stdin.on('data', (input) => {
    const name = input.toString().trim();
    process.stdout.write(`Welcome ${name}!\n`);
    process.stdout.write("This important software is now closing\n");
    process.exit();
});
