const fs = require("node:fs/promises");

const text = "Hola";

fs.writeFile("./text.txt", text, (error) => {
    if (error) {
        console.log(error);
    }

    console.log("file created")
});

fs.readFile("./text.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});

/* fs.unlink("./text.txt", (error) => {
    if (err) {
        throw(error)
    }

    console.log("file deleted")
}) */