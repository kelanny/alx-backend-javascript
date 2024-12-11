const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
        if (lines.length <= 1) {
            throw new Error('Cannot load the database');
        }

        // Parse the header and rows
        const header = lines[0].split(','); // CSV headers
        const rows = lines.slice(1); // Student records

        console.log(`Number of students: ${rows.length}`);

        // Organize students by field
        const fields = {};
        rows.forEach((line) => {
            const values = line.split(',');
            const firstname = values[0];
            const field = values[values.length - 1];

            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(firstname);
        });

        // Print field-specific stats
        for (const [field, students] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
