const fs = require("fs");

const arr = JSON.parse(fs.readFileSync("./test.json", { encoding: "utf-8" }));

const finalString = arr.reduce((acc, inst) => {
  return acc + inst["name"];
}, "");

const arr2 = [...arr];
arr2[arr2.length - 1]["name"] = finalString;

fs.writeFileSync("./test2.json", JSON.stringify(arr2));
