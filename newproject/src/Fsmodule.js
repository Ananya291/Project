const fs = require("fs");

// fs.readFile("file.txt", "utf8", (err, data) => {
//   console.log(err, data);
// });

// fs.writeFile("file2.txt", "welcome Rajan", () => {
//   console.log("written to the file");
// });

// const a = fs.readFileSync("file.txt");
// console.log(a.toString());

const b = fs.writeFileSync("file2.txt", "board infinity");
console.log(b);

console.log("finished reading file");
